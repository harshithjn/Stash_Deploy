// src/app/api/dashboard/[id]/route.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { supabaseServer } from "../../../../lib/supabase/supabaseServer";

export async function GET(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;

    // Fetch user profile
    const { data: profile, error: profileErr } = await supabaseServer
      .from("profiles")
      .select("id, full_name, email, avatar_url")
      .eq("id", id)
      .single();

    if (profileErr) {
      return NextResponse.json({ error: profileErr.message }, { status: 404 });
    }

    // Fetch user's crypto holdings (example table: holdings)
    const { data: holdings, error: holdingsErr } = await supabaseServer
      .from("holdings")
      .select("id, symbol, amount, avg_price, current_price")
      .eq("owner_id", id);

    if (holdingsErr) {
      return NextResponse.json({ error: holdingsErr.message }, { status: 500 });
    }

    // compute some derived stats
    const portfolioValue = holdings?.reduce((sum: number, h: any) => {
      const current = Number(h.current_price ?? 0) * Number(h.amount ?? 0);
      return sum + current;
    }, 0) ?? 0;

    const response = {
      profile,
      holdings,
      stats: {
        portfolioValue,
        assetsCount: holdings?.length ?? 0,
      },
    };

    return NextResponse.json(response);
  } catch (err: any) {
    return NextResponse.json({ error: err.message || "Server error" }, { status: 500 });
  }
}
