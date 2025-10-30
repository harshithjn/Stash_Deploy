import { NextResponse } from "next/server";

let mockHoldings = [
  { id: "1", symbol: "bitcoin", amount: 0.5, avg_price: 60000 },
  { id: "2", symbol: "ethereum", amount: 2, avg_price: 2500 },
  { id: "3", symbol: "solana", amount: 10, avg_price: 150 },
];

// 🟡 PUT update
export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const body = await req.json();
  mockHoldings = mockHoldings.map((h) =>
    h.id === params.id ? { ...h, ...body } : h
  );
  return NextResponse.json({ success: true });
}

// 🔴 DELETE remove
export async function DELETE(_: Request, { params }: { params: { id: string } }) {
  mockHoldings = mockHoldings.filter((h) => h.id !== params.id);
  return NextResponse.json({ success: true });
}
