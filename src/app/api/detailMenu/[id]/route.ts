import { NextRequest, NextResponse } from "next/server";
import { retrieveDataById } from "@/src/lib/firebase/service";

export async function GET(req: Request, {params} : {params: {id: string}}) {
  const {id} = await params

  console.log(id)
  try { 
      const data = await retrieveDataById("menu", id);
      return NextResponse.json(data);
    } catch {
      return NextResponse.json({
        status: 500,
        error: "Failed to fetch data",
      });
    }

  // try {
  //   const data = await retrieveDataById("menu", id!);
  //   return NextResponse.json(data);
  // } catch {
  //   return NextResponse.json({
  //     error: "Failed to fetch data",
  //   });
  // }
}
