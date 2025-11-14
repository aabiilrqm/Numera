"use client";

import {
  Search,
  Ham,
  SquarePen,
  Trash2,
  CupSoda,
  Citrus,
  Cookie,
  Plus,
  Edit,
} from "lucide-react";

const category = [
  {
    logo: <Ham />,
    label: "Main Course",
  },
  {
    logo: <CupSoda />,
    label: "Drink",
  },
  {
    logo: <Citrus />,
    label: "Appetizer",
  },
  {
    logo: <Cookie />,
    label: "Dessert",
  },
];

export default function KategoriMenu() {
  return (
    <div>
      {/* Search */}
      <div className="w-1/4 relative mt-5">
        <Search className="absolute top-1.5 right-3 text-gray-400" />
        <input
          type="email"
          className="w-full bg-gray-100 p-2 rounded-xl font-light text-sm focus:outline-0"
          placeholder="Cari Menu"
        />
      </div>

      {/* Daftar dan tambah kategori */}
      <div className="flex justify-between mt-5 items-center">
        <p>Daftar Kategori</p>

        {/* Add Menu */}
        <button className="flex gap-2 text-xs items-center bg-primary py-2 px-4 rounded-xl">
          <div className="rounded-full bg-white">
            <Plus width={20} height={20} />
          </div>
          <p className="text-white">Tambah Menu</p>
        </button>
      </div>

      {/* Kategori */}
      <div className="text-xs grid grid-cols-3 gap-4 mt-5">
        {category.map((item, index) => {
          return (
            <div
              className="flex justify-between shadow-sm py-2 px-4 rounded-lg"
              key={index}
            >
              <div className="flex items-center gap-3">
                <span className="text-third">{item.logo}</span>
                <p className="font-semibold">{item.label}</p>
              </div>

              <div className="flex text-gray-400 font-light">
                <span><SquarePen width={20}/></span>
                <span><Trash2 width={20} /></span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
