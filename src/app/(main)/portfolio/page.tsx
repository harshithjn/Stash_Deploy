"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

type PortfolioItem = {
  id: number;
  name: string;
  symbol: string;
  amount: number;
  avgBuyPrice: number;
};

type PriceMap = Record<string, { usd: number }>;

type Coin = {
  id: string;
  name: string;
  symbol: string;
  image?: string;
};

export default function PortfolioPage() {
  const [portfolio, setPortfolio] = useState<PortfolioItem[]>([
    { id: 1, name: "Bitcoin", symbol: "bitcoin", amount: 0.5, avgBuyPrice: 40000 },
    { id: 2, name: "Ethereum", symbol: "ethereum", amount: 2, avgBuyPrice: 2500 },
  ]);
  const [prices, setPrices] = useState<PriceMap>({});
  const [coins, setCoins] = useState<Coin[]>([]);
  const [loading, setLoading] = useState(true);

  // Modal States
  const [showModal, setShowModal] = useState(false);
  const [editAsset, setEditAsset] = useState<PortfolioItem | null>(null);
  const [newAsset, setNewAsset] = useState({
    name: "",
    symbol: "",
    amount: "",
    avgBuyPrice: "",
  });
  const [search, setSearch] = useState("");

  // Fetch coin list for dropdown
  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const res = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=100&page=1");
        const data = await res.json();
        setCoins(
          data.map((coin: any) => ({
            id: coin.id,
            name: coin.name,
            symbol: coin.symbol,
            image: coin.image,
          }))
        );
      } catch (err) {
        console.error("Error fetching coin list:", err);
      }
    };
    fetchCoins();
  }, []);

  // Fetch live prices for portfolio assets
  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const symbols = portfolio.map((p) => p.symbol).join(",");
        const res = await fetch(
          `https://api.coingecko.com/api/v3/simple/price?ids=${symbols}&vs_currencies=usd`
        );
        const data: PriceMap = await res.json();
        setPrices(data);
      } catch (err) {
        console.error("Error fetching prices:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchPrices();
  }, [portfolio]);

  // CRUD Operations
  const addAsset = () => {
    const newEntry: PortfolioItem = {
      id: Date.now(),
      name: newAsset.name,
      symbol: newAsset.symbol.toLowerCase(),
      amount: parseFloat(newAsset.amount),
      avgBuyPrice: parseFloat(newAsset.avgBuyPrice),
    };
    setPortfolio([...portfolio, newEntry]);
    setShowModal(false);
    setNewAsset({ name: "", symbol: "", amount: "", avgBuyPrice: "" });
  };

  const deleteAsset = (id: number) => {
    setPortfolio(portfolio.filter((item) => item.id !== id));
  };

  const updateAsset = () => {
    if (!editAsset) return;
    setPortfolio((prev) =>
      prev.map((item) => (item.id === editAsset.id ? editAsset : item))
    );
    setEditAsset(null);
    setShowModal(false);
  };

  const totalValue = portfolio.reduce((acc, asset) => {
    const price = prices[asset.symbol]?.usd || 0;
    return acc + price * asset.amount;
  }, 0);

  // Filter coins for dropdown search
  const filteredCoins = coins.filter(
    (coin) =>
      coin.name.toLowerCase().includes(search.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-8 bg-black min-h-screen text-white">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-semibold">My Portfolio</h1>
        <button
          onClick={() => {
            setEditAsset(null);
            setShowModal(true);
          }}
          className="bg-white text-black px-4 py-2 rounded-lg font-medium hover:bg-zinc-300 transition"
        >
          + Add Asset
        </button>
        {/* ✅ New Button to Connect Exchange */}
          <Link
            href="/portfolio/connect"
            className="border border-white text-white px-4 py-2 rounded-lg font-medium hover:bg-white hover:text-black transition"
          >
            Connect Exchange
          </Link>
      </div>

      <div className="bg-[#0b0b0b] border border-zinc-800 p-6 rounded-2xl mb-6">
        <h2 className="text-xl font-semibold mb-2">Total Portfolio Value</h2>
        <p className="text-3xl font-bold">
          ${totalValue.toLocaleString(undefined, { maximumFractionDigits: 2 })}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {portfolio.map((asset) => {
          const price = prices[asset.symbol]?.usd || 0;
          const currentValue = price * asset.amount;
          const profitLoss = currentValue - asset.amount * asset.avgBuyPrice;
          const profitLossPercent =
            ((currentValue - asset.amount * asset.avgBuyPrice) /
              (asset.amount * asset.avgBuyPrice)) *
            100;

          return (
            <div
              key={asset.id}
              className="bg-[#0b0b0b] border border-zinc-800 p-6 rounded-2xl"
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-semibold">{asset.name}</h3>
                <span className="uppercase text-gray-400 text-sm">
                  {asset.symbol}
                </span>
              </div>
              <p className="text-gray-400 mb-1">
                Holdings: {asset.amount} {asset.symbol.toUpperCase()}
              </p>
              <p className="text-gray-400 mb-1">
                Avg Buy Price: ${asset.avgBuyPrice.toLocaleString()}
              </p>
              <p className="text-gray-400 mb-1">
                Current Price: ${price.toLocaleString()}
              </p>
              <p
                className={`text-lg font-semibold ${
                  profitLoss >= 0 ? "text-green-400" : "text-red-400"
                }`}
              >
                {profitLoss >= 0 ? "+" : ""}
                {profitLoss.toLocaleString(undefined, {
                  maximumFractionDigits: 2,
                })}{" "}
                USD ({profitLossPercent.toFixed(2)}%)
              </p>

              <div className="flex gap-3 mt-4">
                <button
                  onClick={() => {
                    setEditAsset(asset);
                    setShowModal(true);
                  }}
                  className="px-3 py-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-sm"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteAsset(asset.id)}
                  className="px-3 py-2 rounded-lg bg-red-500 text-sm hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="bg-[#0b0b0b] border border-zinc-700 p-6 rounded-2xl w-full max-w-md">
            <h2 className="text-xl font-semibold mb-4">
              {editAsset ? "Edit Asset" : "Add New Asset"}
            </h2>

            {/* Dropdown Search */}
            {!editAsset && (
              <div className="relative mb-4">
                <input
                  type="text"
                  placeholder="Search coin..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full p-3 rounded-lg bg-black border border-zinc-700 text-white"
                />
                {search && (
                  <div className="absolute mt-2 bg-[#0b0b0b] border border-zinc-700 rounded-lg max-h-60 overflow-y-auto w-full z-50">
                    {filteredCoins.slice(0, 8).map((coin) => (
                      <div
                        key={coin.id}
                        onClick={() => {
                          setNewAsset({
                            ...newAsset,
                            name: coin.name,
                            symbol: coin.id,
                          });
                          setSearch("");
                        }}
                        className="flex items-center gap-3 p-2 hover:bg-zinc-900 cursor-pointer"
                      >
                        <img
                          src={coin.image}
                          alt={coin.name}
                          className="w-6 h-6 rounded-full"
                        />
                        <div>
                          <p className="font-medium">{coin.name}</p>
                          <p className="text-gray-500 text-sm uppercase">
                            {coin.symbol}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Inputs */}
            <input
              type="number"
              placeholder="Amount"
              value={editAsset ? editAsset.amount : newAsset.amount}
              onChange={(e) =>
                editAsset
                  ? setEditAsset({
                      ...editAsset,
                      amount: parseFloat(e.target.value),
                    })
                  : setNewAsset({ ...newAsset, amount: e.target.value })
              }
              className="w-full p-3 rounded-lg bg-black border border-zinc-700 text-white mb-4"
            />

            <input
              type="number"
              placeholder="Average Buy Price"
              value={editAsset ? editAsset.avgBuyPrice : newAsset.avgBuyPrice}
              onChange={(e) =>
                editAsset
                  ? setEditAsset({
                      ...editAsset,
                      avgBuyPrice: parseFloat(e.target.value),
                    })
                  : setNewAsset({ ...newAsset, avgBuyPrice: e.target.value })
              }
              className="w-full p-3 rounded-lg bg-black border border-zinc-700 text-white mb-4"
            />

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-zinc-800 rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={editAsset ? updateAsset : addAsset}
                className="px-4 py-2 bg-white text-black font-medium rounded-lg"
              >
                {editAsset ? "Update" : "Add"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
