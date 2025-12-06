"use client";

import { useState } from "react";
import { ImagePlus } from "lucide-react";
import { supabase } from "@/src/lib/supabase";
import { db } from "@/src/lib/firebase";
import { addDoc, collection } from "firebase/firestore";

type ModalAddMenuProps = {
  open: boolean;
  onClose: () => void;
  refresh: () => void | Promise<void>;
};

export default function ModalAddMenu({ open, onClose, refresh }: ModalAddMenuProps) {
  if (!open) return null;

  // Form State
  const [menuName, setMenuName] = useState("");
  const [harga, setHarga] = useState("");
  const [kategori, setKategori] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  // Upload file ke Supabase Storage
  const uploadToSupabase = async (file: File | null) => {
    if (!file) return null;

    const filePath = `menu/${Date.now()}-${file.name}`;

    const { error } = await supabase.storage
      .from("images") // pastikan bucket bernama "images"
      .upload(filePath, file, {
        cacheControl: "3600",
        upsert: false,
      });

    if (error) {
      console.error("Supabase upload error:", error);
      alert("Gagal upload gambar");
      return null;
    }

    // Dapatkan public URL
    const { data } = supabase.storage.from("images").getPublicUrl(filePath);

    return data?.publicUrl ?? null;
  };

  // Simpan Menu
  const handleSaveMenu = async () => {
    if (!menuName || !harga || !kategori) {
      alert("Nama menu, harga, dan kategori wajib diisi");
      return;
    }

    setLoading(true);

    try {
      // Upload gambar ke supabase
      const imageUrl = await uploadToSupabase(image);

      // Simpan document KE COLLECTION MENU YANG SUDAH ADA
      await addDoc(collection(db, "menu"), {
        label: menuName,
        harga: Number(harga),
        kategori: kategori.split(",").map((i) => i.trim()), // "Makanan, Recomended"
        src: imageUrl ?? "",
      });

      alert("Menu berhasil ditambahkan!");

      // Reset form
      setMenuName("");
      setHarga("");
      setKategori("");
      setImage(null);

      onClose();
    } catch (error) {
      console.error("Error menambahkan menu:", error);
      alert("Gagal menambahkan menu");
    }

    setLoading(false);
  };

  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
      <div className="bg-white w-3/4 p-6 rounded-xl shadow-xl flex gap-5">
        {/* BAGIAN UPLOAD */}
        <div className="w-1/2">
          <p className="text-lg font-semibold">Tambah Menu</p>
          <p className="text-xs">Perbarui Informasi Menu</p>

          <div className="w-full p-10 border-2 border-dotted border-gray-400 rounded-md mt-5 text-center">
            <input
              type="file"
              id="upload-image"
              accept="image/*"
              className="hidden"
              onChange={(e) => setImage(e.target.files?.[0] || null)}
            />

            <label htmlFor="upload-image" className="cursor-pointer">
              <ImagePlus className="mx-auto text-gray-400" size={40} />
              <p className="text-xs text-gray-400 mt-1">Upload Gambar</p>
            </label>

            {image && <p className="text-xs mt-3 text-primary">{image.name}</p>}
          </div>
        </div>

        {/* FORM INPUT */}
        <div className="w-1/2 flex flex-col gap-3 mt-8">
          {/* Nama Menu */}
          <div>
            <p className="text-sm">Nama Menu</p>
            <input
              type="text"
              className="w-full p-2 border border-gray-400 rounded-lg text-sm"
              placeholder="Masukkan nama menu"
              value={menuName}
              onChange={(e) => setMenuName(e.target.value)}
            />
          </div>

          {/* Harga */}
          <div>
            <p className="text-sm">Harga</p>
            <input
              type="number"
              className="w-full p-2 border border-gray-400 rounded-lg text-sm"
              placeholder="Tentukan harga"
              value={harga}
              onChange={(e) => setHarga(e.target.value)}
            />
          </div>

          {/* Kategori */}
          <div>
            <p className="text-sm">Kategori</p>
            <input
              type="text"
              className="w-full p-2 border border-gray-400 rounded-lg text-sm"
              placeholder="Contoh: Makanan, Recomended"
              value={kategori}
              onChange={(e) => setKategori(e.target.value)}
            />
          </div>

          {/* BUTTON */}
          <div className="flex justify-start gap-2 mt-4">
            <button onClick={onClose} className="px-4 py-2 rounded bg-gray-200">
              Cancel
            </button>

            <button
              onClick={handleSaveMenu}
              disabled={loading}
              className="px-4 py-2 rounded bg-primary text-white"
            >
              {loading ? "Saving..." : "Save"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
