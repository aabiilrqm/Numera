import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(req: Request) {
  const body = await req.json();
  const { items, pay } = body;
  /*
    items = [
      { menu_id, qty, price }
    ]
  */

  // hitung total
  const total = items.reduce(
    (sum: number, item: any) => sum + item.qty * item.price,
    0
  );

  const change = pay - total;

  // simpan transaksi
  const { data: transaction, error } = await supabase
    .from("transactions")
    .insert([{ total, pay, change }])
    .select()
    .single();

  if (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }

  // simpan item transaksi
  const detailItems = items.map((item: any) => ({
    transaction_id: transaction.id,
    menu_id: item.menu_id,
    qty: item.qty,
    price: item.price,
  }));

  await supabase
    .from("transaction_items")
    .insert(detailItems);

  return NextResponse.json({
    message: "Transaksi berhasil",
    transaction_id: transaction.id,
    total,
    change,
  });
}
