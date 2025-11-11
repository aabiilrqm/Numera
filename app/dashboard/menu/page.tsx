"use client";

import { Search, Plus, ChevronRight } from "lucide-react";
import Image from "next/image";
import ModalAddMenu from "@/components/ModalPage";
import DetailMenu from "@/components/DetailMenu";
import { useState } from "react";

const menu = [
  {
    src: "/nasi goreng.jpg",
    label: "Nasi Goreng",
    harga: "Rp 15.000",
    kategori: ["Makanan", "Recomended"],
  },
  {
    src: "/kopi.jpg",
    label: "Kopi",
    harga: "Rp 10.000",
    kategori: ["Minuman", "Recomended"],
  },
  {
    src: "/ayam-bakar.jpg",
    label: "Ayam Bakar",
    harga: "Rp 25.000",
    kategori: ["Makanan", "Main Course"],
  },
  {
    src: "/mie goreng.jpg",
    label: "Mie Goreng",
    harga: "Rp 20.000",
    kategori: ["Makanan"],
  },
  {
    src: "/mie goreng.jpg",
    label: "Mie Goreng",
    harga: "Rp 20.000",
    kategori: ["Makanan"],
  },
];

type MenuItem = {
  src: string;
  label: string;
  harga: string;
  kategori: string[];
};

export default function MenuPage() {
  const [openModal, setOpenModal] = useState(false);
  const [selectedItems, setSelectedItems] = useState<MenuItem[]>([]);
  const [openDetail, setOpenDetail] = useState(false);

  return (
    <div className="p-4">
      <div className="w-full bg-white p-4 rounded-xl ">
        {/* Pilihan  */}
        <div className="flex text-sm">
          <p className="p-2 border-b-2 border-primary">Menu Restoran</p>
          <p className="p-2 border-b-2 border-gray-400">Kategori Menu</p>
        </div>

        {/* Search and Categories */}
        <div className="mt-4 flex  justify-between items-center">
          {/* Search */}
          <div className="w-1/5 relative">
            <Search className="absolute top-1.5 right-3 text-gray-400" />
            <input
              type="email"
              className="w-full bg-gray-100 p-2 rounded-xl font-light text-sm focus:outline-0"
              placeholder="Email"
            />
          </div>

          {/* Add Menu */}
          <button
            className="flex gap-2 text-xs items-center bg-primary p-2 rounded-xl"
            onClick={() => setOpenModal(true)}
          >
            <div className="rounded-full bg-white">
              <Plus />
            </div>
            <p className="text-white">Tambah Menu</p>
          </button>
        </div>

        {/* Modal */}
        <ModalAddMenu open={openModal} onClose={() => setOpenModal(false)} />

        {/* Select Options */}
        <div className="mt-4 flex  justify-between items-center">
          {/* Menus */}
          <div className="w-1/5 relative">
            <p className="font-semibold text-sm">Daftar Menu</p>
            <p className="text-[10px] text-gray-400">
              Menampilkan 5 dari 5 daftar menu
            </p>
          </div>

          {/* Options */}
          <select
            name="kategori"
            className="p-2 text-xs bg-gray-100 text-center rounded-lg focus:outline-0"
          >
            <option value="Active">Makanan</option>
            <option value="Active">Minuman</option>
            <option value="Active">Dessert</option>
          </select>
        </div>

        {/* Menu Item */}
        <div className="flex flex-wrap gap-5 justify-start cursor-pointer">
          {menu.map((item, index) => {
            return (
              <div
                key={index}
                className="flex gap-5 mt-5 p-2 border border-gray-200 rounded-lg shadow-xs"
                onClick={() => {
                  setSelectedItems([item]);
                  setOpenDetail(true);
                }}
              >
                <div>
                  <Image
                    src={item.src}
                    width={70}
                    height={50}
                    alt={item.label}
                    className="rounded-lg"
                  />
                </div>

                <div className="flex flex-col">
                  <div className="text-[7px] flex gap-2">
                    {item.kategori.map((kat, idx) => (
                      <p
                        key={idx}
                        className="bg-third text-primary p-0.5 rounded-sm"
                      >
                        {kat}
                      </p>
                    ))}
                  </div>
                  <p className="text-[15px] font-semibold">{item.label}</p>
                  <p className="text-[10px] text-gray-400">{item.harga}</p>
                </div>

                <div className="flex items-center justify-end ">
                  <ChevronRight />
                </div>
              </div>
            );
          })}
        </div>

        {/* Detail Menu */}
        <DetailMenu menu={selectedItems} open={openDetail} onClose={() => setOpenDetail(false)} />
      </div>
    </div>
  );
}
