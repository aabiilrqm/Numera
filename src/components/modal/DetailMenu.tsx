"use client";

import { X } from "lucide-react";
import Image from "next/image";
import { MenuItem } from "@/src/data/menu";
import { useEffect, useState } from "react";

interface DetailMenuProps {
  id: string;
  open: boolean;
  onClose: () => void;
}

export default function DetailMenu({ id, open, onClose }: DetailMenuProps) {
  const [menuDetail, setMenuDetail] = useState<any>([]);

  useEffect(() => {
    if (!open || !id) return;

    fetch(`/api/detailMenu/${id}`)
      .then((res) => res.json())
      .then((data) => setMenuDetail(data));
  }, [id, open]);

  // alert(id)

  if (!open) return null;

  return (
    <div className="bg-black/30 fixed inset-0 flex justify-end z-40">
      <div className="h-screen bg-white w-1/4">
        <div className="flex justify-between p-2">
          <h3 className="font-semibold">Detail Menu</h3>
          <X onClick={onClose} className="cursor-pointer" />
        </div>

        <div className="mt-2">
          <div>
            <Image src={menuDetail.src} width={400} height={100} alt=""></Image>

            {!menuDetail || !menuDetail.kategori ? (
              <div className="bg-gray-200 p-3 h-50"></div>
            ) : (
              <div className="text-[10px] flex gap-2 p-3">
                {menuDetail?.kategori?.map((i: string, idx: number) => (
                  <p className="bg-third text-white p-1 rounded-sm" key={idx}>
                    {i}
                  </p>
                ))}
              </div>
            )}
          </div>

          <div className="p-2">
            <h3 className="font-semibold text-xl">{menuDetail.label}</h3>

            <p className="font-semibold text-sm">{menuDetail.harga}</p>
          </div>

          <div className="flex text-xs gap-3 justify-center mt-7">
            <div className="bg-acc text-white px-8 py-2 rounded-lg">
              Edit Menu
            </div>

            <div className="bg-gray-200 px-8 py-2 rounded-lg">Hapus Menu</div>
          </div>
        </div>
      </div>
    </div>
  );
}
