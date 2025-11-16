import { NextResponse } from "next/server";
import { retrieveData } from "@/src/lib/firebase/service";

export async function GET() {
  try {
    const data = await retrieveData("menu");
    return NextResponse.json(data);
  } catch {
    return NextResponse.json({
      status: 500,
      error: "Failed to fetch data",
    });
  }
}
