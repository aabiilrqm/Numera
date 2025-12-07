import { NextRequest, NextResponse } from "next/server";
import { retrieveDataById } from "@/src/lib/firebase/service";

export async function GET(
  req: NextRequest,
  context: { params: { id: string } }
) {
  const { id } = context.params; // FIX

  try {
    const data = await retrieveDataById("menu", id);
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}
