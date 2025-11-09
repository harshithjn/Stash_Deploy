"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/supabaseClient";

type Holding = {
  id: string;
  symbol: string;
  name: string;
  quantity: number;
  avg_price: number;
  current_price?: number;
  total_value?: number;
  profit_loss?: number;
};

export default function PortfolioPage() {
  const [holdings, setHoldings] = useState<Holding[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editHolding, setEditHolding] = useState<Holding | null>(null);
  const [newHolding, setNewHolding] = useState({
    symbol: "",
    name: "",
    quantity: "",
    avg_price: "",
  });
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [userId, setUserId] = useState<string | null>(null);

  const supabase = createClient();

  // 🔹 Fetch user + holdings on load
  useEffect(() => {
    const fetchData = async () => {
      const { data: authData } = await supabase.auth.getUser();
      const user = authData?.user;
      if (!user) return;

      setUserId(user.id);

      const { data, error } = await supabase
        .from("holdings")
        .select("*")
        .eq("user_id", user.id);

      if (error) console.error("Error fetching holdings:", error);

      const updatedHoldings = await fetchLivePrices(data || []);
      setHoldings(updatedHoldings);
      setLoading(false);
    };

    fetchData();
  }, []);

  // 🔹 Fetch live prices from CoinGecko
  const fetchLivePrices = async (holdingsData: Holding[]) => {
    if (!holdingsData.length) return holdingsData;
    const ids = holdingsData.map((h) => h.symbol).join(",");
    try {
      const res = await fetch(
        `https://api.coingecko.com/api/v3/simple/price?ids=${ids}&vs_currencies=usd`
      );
      const data = await res.json();
      return holdingsData.map((h) => ({
        ...h,
        current_price: data[h.symbol]?.usd || 0,
        total_value: (data[h.symbol]?.usd || 0) * h.quantity,
        profit_loss:
          ((data[h.symbol]?.usd || 0) - h.avg_price) * h.quantity,
      }));
    } catch (err) {
      console.error("CoinGecko price fetch failed:", err);
      return holdingsData;
    }
  };

  // 🔹 Refresh holdings
  const refreshData = async () => {
    if (!userId) return;
    const { data } = await supabase
      .from("holdings")
      .select("*")
      .eq("user_id", userId);
    const updatedHoldings = await fetchLivePrices(data || []);
    setHoldings(updatedHoldings);
  };

  // 🔹 Add holding
  const addHolding = async () => {
    if (!userId) return;
    const { error } = await supabase.from("holdings").insert({
      user_id: userId,
      symbol: newHolding.symbol.toLowerCase(),
      name: newHolding.name,
      quantity: parseFloat(newHolding.quantity),
      avg_price: parseFloat(newHolding.avg_price),
    });
    if (error) console.error("Add error:", error);
    setShowModal(false);
    setNewHolding({ symbol: "", name: "", quantity: "", avg_price: "" });
    refreshData();
  };

  // 🔹 Update holding
  const updateHolding = async () => {
    if (!editHolding) return;
    const { error } = await supabase
      .from("holdings")
      .update({
        quantity: parseFloat(editHolding.quantity.toString()),
        avg_price: parseFloat(editHolding.avg_price.toString()),
      })
      .eq("id", editHolding.id);
    if (error) console.error("Update error:", error);
    setShowModal(false);
    setEditHolding(null);
    refreshData();
  };

  // 🔹 Delete holding
  const deleteHolding = async (id: string) => {
    const { error } = await supabase.from("holdings").delete().eq("id", id);
    if (error) console.error("Delete error:", error);
    refreshData();
  };

  // 🔹 Search coins (CoinGecko)
  const searchCoin = async (query: string) => {
    setSearch(query);
    if (!query) {
      setSearchResults([]);
      return;
    }
    try {
      const res = await fetch(
        `https://api.coingecko.com/api/v3/search?query=${query}`
      );
      const data = await res.json();
      setSearchResults(data.coins || []);
    } catch (err) {
      console.error("Search error:", err);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <p className="text-gray-400">Loading portfolio...</p>
      </div>
    );
  }

  const totalValue = holdings.reduce((acc, h) => acc + (h.total_value || 0), 0);
  const totalCost = holdings.reduce(
    (acc, h) => acc + h.avg_price * h.quantity,
    0
  );
  const roi =
    totalCost === 0 ? 0 : ((totalValue - totalCost) / totalCost) * 100;

  return (
    <div className="min-h-screen bg-black text-white p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-10">
        <div>
          <h1 className="text-3xl font-bold mb-2">My Portfolio</h1>
          <p className="text-gray-400 text-sm">
            Total Value: ${totalValue.toLocaleString()}
          </p>
        </div>
        <p
          className={`text-xl font-bold ${
            roi >= 0 ? "text-green-400" : "text-red-400"
          }`}
        >
          ROI: {roi.toFixed(2)}%
        </p>
      </div>

      {/* Add Coin Button */}
      <div className="flex justify-end mb-6">
        <button
          onClick={() => {
            setEditHolding(null);
            setShowModal(true);
          }}
          className="px-4 py-2 bg-white text-black rounded-lg font-semibold hover:bg-white/80 transition"
        >
          + Add Coin
        </button>
      </div>

      {/* Holdings Table */}
      <div className="bg-[#0b0b0b] border border-zinc-800 p-6 rounded-2xl">
        {holdings.length === 0 ? (
          <p className="text-gray-500">No holdings added yet.</p>
        ) : (
          <table className="min-w-full border-collapse text-sm">
            <thead>
              <tr className="text-gray-400 border-b border-zinc-800">
                <th className="text-left py-3 px-4">Asset</th>
                <th className="text-right py-3 px-4">Quantity</th>
                <th className="text-right py-3 px-4">Avg Price</th>
                <th className="text-right py-3 px-4">Current Price</th>
                <th className="text-right py-3 px-4">Value</th>
                <th className="text-right py-3 px-4">P/L</th>
                <th className="text-right py-3 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {holdings.map((h) => (
                <tr
                  key={h.id}
                  className="border-b border-zinc-800 hover:bg-white/5 transition"
                >
                  <td className="py-3 px-4">{h.name}</td>
                  <td className="text-right py-3 px-4">{h.quantity}</td>
                  <td className="text-right py-3 px-4">
                    ${h.avg_price.toLocaleString()}
                  </td>
                  <td className="text-right py-3 px-4">
                    ${h.current_price?.toLocaleString() || 0}
                  </td>
                  <td className="text-right py-3 px-4">
                    ${h.total_value?.toLocaleString() || 0}
                  </td>
                  <td
                    className={`text-right py-3 px-4 ${
                      (h.profit_loss || 0) >= 0
                        ? "text-green-400"
                        : "text-red-400"
                    }`}
                  >
                    {(h.profit_loss || 0).toFixed(2)}
                  </td>
                  <td className="text-right py-3 px-4 space-x-3">
                    <button
                      onClick={() => {
                        setEditHolding(h);
                        setShowModal(true);
                      }}
                      className="text-blue-400 hover:underline"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteHolding(h.id)}
                      className="text-red-400 hover:underline"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="bg-[#0b0b0b] border border-zinc-700 p-6 rounded-2xl w-full max-w-md">
            <h2 className="text-xl font-semibold mb-4">
              {editHolding ? "Edit Holding" : "Add New Coin"}
            </h2>

            {/* Coin Search (only for adding) */}
            {!editHolding && (
              <>
                <input
                  type="text"
                  placeholder="Search coin..."
                  value={search}
                  onChange={(e) => searchCoin(e.target.value)}
                  className="w-full p-3 rounded-lg bg-black border border-zinc-700 text-white mb-4"
                />
                {searchResults.length > 0 && (
                  <div className="max-h-60 overflow-y-auto bg-black border border-zinc-700 rounded-lg mb-4">
                    {searchResults.slice(0, 8).map((coin) => (
                      <div
                        key={coin.id}
                        onClick={() => {
                          setNewHolding({
                            ...newHolding,
                            symbol: coin.id,
                            name: coin.name,
                          });
                          setSearch("");
                          setSearchResults([]);
                        }}
                        className="p-2 hover:bg-white/10 cursor-pointer flex items-center gap-3"
                      >
                        <img
                          src={coin.thumb}
                          alt={coin.name}
                          className="w-5 h-5 rounded-full"
                        />
                        <span>{coin.name}</span>
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}

            {/* Quantity + Price Inputs */}
            <input
              type="number"
              placeholder="Quantity"
              value={editHolding ? editHolding.quantity : newHolding.quantity}
              onChange={(e) =>
                editHolding
                  ? setEditHolding({
                      ...editHolding,
                      quantity: parseFloat(e.target.value),
                    })
                  : setNewHolding({
                      ...newHolding,
                      quantity: e.target.value,
                    })
              }
              className="w-full p-3 rounded-lg bg-black border border-zinc-700 text-white mb-4"
            />

            <input
              type="number"
              placeholder="Average Buy Price"
              value={editHolding ? editHolding.avg_price : newHolding.avg_price}
              onChange={(e) =>
                editHolding
                  ? setEditHolding({
                      ...editHolding,
                      avg_price: parseFloat(e.target.value),
                    })
                  : setNewHolding({
                      ...newHolding,
                      avg_price: e.target.value,
                    })
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
                onClick={editHolding ? updateHolding : addHolding}
                className="px-4 py-2 bg-white text-black font-semibold rounded-lg"
              >
                {editHolding ? "Update" : "Add"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
