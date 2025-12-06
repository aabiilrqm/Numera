"use client";

import { useState, useEffect } from "react";
import { db } from "@/src/lib/firebase";
import { doc, updateDoc } from "firebase/firestore";

export default function ModalEditMenu({ open, onClose, item, refresh }: any) {
  const [menuName, setMenuName] = useState("");
  const [harga, setHarga] = useState("");
  const [kategori, setKategori] = useState("");

  useEffect(() => {
    if (item) {
      setMenuName(item.label);
      setHarga(item.harga);
      setKategori(item.kategori.join(", "));
    }
  }, [item]);

  if (!open) return null;

  const handleUpdate = async () => {
    await updateDoc(doc(db, "menu", item.id), {
      label: menuName,
      harga: Number(harga),
      kategori: kategori.split(",").map((i) => i.trim()),
    });

    refresh();
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-40">
      <div className="bg-white w-1/2 p-6 rounded-xl">
        <h2>Edit Menu</h2>

        <input
          className="input mt-4"
          value={menuName}
          onChange={(e) => setMenuName(e.target.value)}
        />
        <input
          className="input mt-2"
          type="number"
          value={harga}
          onChange={(e) => setHarga(e.target.value)}
        />
        <input
          className="input mt-2"
          value={kategori}
          onChange={(e) => setKategori(e.target.value)}
        />

        <div className="mt-4 flex justify-end gap-2">
          <button className="px-4 py-2 bg-gray-300 rounded" onClick={onClose}>
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-primary text-white rounded"
            onClick={handleUpdate}
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
}
