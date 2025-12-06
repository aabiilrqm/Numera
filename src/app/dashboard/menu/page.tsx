"use client";

import { Search, Plus, ChevronRight, Pencil, Trash } from "lucide-react";
import Image from "next/image";
import ModalAddMenu from "@/src/components/modal/ModalAddMenu";
import ModalEditMenu from "@/src/components/modal/ModalEditMenu";
import ModalDeleteMenu from "@/src/components/modal/ModalDeleteMenu";

import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/src/lib/firebase";

export default function MenuResto() {
  const [openAdd, setOpenAdd] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [menu, setMenu] = useState<any[]>([]);
  const [search, setSearch] = useState("");

  const loadMenu = async () => {
    const snap = await getDocs(collection(db, "menu"));
    const data = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
    setMenu(data);
  };

  useEffect(() => {
    loadMenu();
  }, []);

  // FILTER search
  const filteredMenu = menu.filter((item) =>
    item.label.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      {/* TOP BAR — Search + Add + Categories */}
      <div className="mt-4 flex justify-between items-center">
        
        {/* Search */}
        <div className="w-1/3 relative">
          <Search className="absolute top-2 right-3 text-gray-400" />
          <input
            type="text"
            className="w-full bg-gray-100 p-2 rounded-xl text-sm"
            placeholder="Cari Menu"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Kategori */}
        <select className="p-2 bg-gray-100 text-xs rounded-lg">
          <option>Makanan</option>
          <option>Minuman</option>
          <option>Dessert</option>
        </select>

        {/* Add Menu */}
        <button
          className="flex gap-2 text-xs items-center bg-primary px-3 py-2 rounded-xl cursor-pointer"
          onClick={() => setOpenAdd(true)}
        >
          <div className="rounded-full bg-white p-1">
            <Plus size={12} />
          </div>
          <p className="text-white font-medium">Tambah Menu</p>
        </button>
      </div>

      {/* LIST MENU */}
      <div className="flex flex-wrap gap-5 justify-start cursor-pointer mt-6">
        {filteredMenu.map((item) => (
          <div
            key={item.id}
            className="flex gap-5 p-2 border border-gray-200 rounded-lg shadow-xs w-[280px]"
          >
            {/* IMAGE */}
            <Image
              src={item.src}
              width={75}
              height={60}
              alt={item.label}
              className="rounded-lg object-cover"
            />

            {/* INFO */}
            <div className="flex flex-col flex-grow">
              <div className="text-[10px] flex gap-1 flex-wrap">
                {item.kategori.map((kat: string, idx: number) => (
                  <p key={idx} className="bg-third text-primary px-1 rounded">
                    {kat}
                  </p>
                ))}
              </div>

              <p className="text-[15px] font-semibold">{item.label}</p>
              <p className="text-[10px] text-gray-500">
                Rp {item.harga.toLocaleString()}
              </p>
            </div>

            {/* ACTION BUTTONS */}
            <div className="flex flex-col items-center gap-2">
              {/* EDIT */}
              <button
                onClick={() => {
                  setSelectedItem(item);
                  setOpenEdit(true);
                }}
              >
                <Pencil size={16} className="text-blue-500" />
              </button>

              {/* DELETE */}
              <button
                onClick={() => {
                  setSelectedItem(item);
                  setOpenDelete(true);
                }}
              >
                <Trash size={16} className="text-red-500" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* MODALS */}
      <ModalAddMenu open={openAdd} onClose={() => setOpenAdd(false)} refresh={loadMenu} />
      <ModalEditMenu open={openEdit} onClose={() => setOpenEdit(false)} item={selectedItem} refresh={loadMenu} />
      <ModalDeleteMenu open={openDelete} onClose={() => setOpenDelete(false)} item={selectedItem} refresh={loadMenu} />
    </>
  );
}
