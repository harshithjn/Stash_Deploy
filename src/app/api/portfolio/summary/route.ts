import { NextResponse } from "next/server";
import { createClient } from "../../../../lib/supabase/supabaseClient";

export async function GET(req: Request) {
  const supabase = createClient();
  const { searchParams } = new URL(req.url);
  const userId = searchParams.get("user_id");

  if (!userId)
    return NextResponse.json({ error: "Missing user_id" }, { status: 400 });

  const { data, error } = await supabase
    .from("portfolios")
    .select("id, total_value_usd, roi_percentage")
    .eq("user_id", userId)
    .single();

  if (error)
    return NextResponse.json({ error: error.message }, { status: 500 });

  return NextResponse.json({ portfolio: data });
}
