"use client"

import { useState } from "react";
import MenuResto from "./menu_resto/page";
import KategoriMenu from "./kategori_menu/page";

export default function MenuPage() {

  const [category, setCategory] = useState(true);

  return (
    <div className="p-4">
      <div className="w-full bg-white p-4 rounded-xl ">
        {/* Pilihan  */}
        <div className="flex text-sm">
          <p
            className={`p-2 border-b-2 ${
              category ? "border-primary" : "border-gray-400"
            } cursor-pointer`}
            onClick={() => setCategory(true)}
          >
            Menu Restoran
          </p>
          <p
            className={`p-2 border-b-2 ${
              category ? "border-gray-400" : "border-primary"
            } cursor-pointer`}
            onClick={() => setCategory(false)}
          >
            Kategori Menu
          </p>
        </div>

        {category ? <MenuResto /> : <KategoriMenu />}
        {/* <MenuResto /> */}
      </div>
    </div>
  );
}