import { NextResponse, NextRequest } from "next/server";
import { retrieveData, retrieveDataById } from "@/src/lib/firebase/service";

const menu = [
  {
    id: 1,
    src: "/nasi goreng.jpg",
    label: "Nasi Goreng",
    harga: "Rp 15.000",
    kategori: ["Makanan", "Recomended"],
  },
  {
    id: 2,
    src: "/kopi.jpg",
    label: "Kopi",
    harga: "Rp 10.000",
    kategori: ["Minuman", "Recomended"],
  },
];

export async function GET(request: NextRequest) {
  // console.log(request);
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (id) {
    const detailMenu = menu.find((item) => item.id === Number(id));
    if (detailMenu) {
      return NextResponse.json({ status: 200, message: "Success", detailMenu });
    }

    return NextResponse.json({ status: 404, message: "Not Found", data: {} });
  }

  return NextResponse.json({ status: 200, message: "Success", menu });
}
