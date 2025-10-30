import { NextResponse } from "next/server";

let mockHoldings = [
  { id: "1", symbol: "bitcoin", amount: 0.5, avg_price: 60000 },
  { id: "2", symbol: "ethereum", amount: 2, avg_price: 2500 },
  { id: "3", symbol: "solana", amount: 10, avg_price: 150 },
];

// 🟢 GET all holdings
export async function GET() {
  return NextResponse.json(mockHoldings);
}

// 🟢 POST create new holding
export async function POST(req: Request) {
  const body = await req.json();
  const newHolding = {
    id: Date.now().toString(),
    ...body,
  };
  mockHoldings.push(newHolding);
  return NextResponse.json(newHolding, { status: 201 });
}
