"use client";

import { ImagePlus } from "lucide-react";

interface ModalAddMenuProps {
  open: boolean;
  onClose: () => void;
}

const labels = [
  {
    label: "Nama Menu",
    placeholder: "Masukkan nama menu",
  },
  {
    label: "Harga",
    placeholder: "Tentukan harga",
  },
  {
    label: "Deskripsi",
    placeholder: "Deskripsi (opsional)",
  },
  {
    label: "Kategori",
    placeholder: "Rekomended",
  },
  {
    label: "Status",
    placeholder: "Aktif",
  },
];

export default function ModalAddMenu({ open, onClose }: ModalAddMenuProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
      <div className="bg-white w-3/4 p-6 rounded-xl shadow-xl flex gap-5">
        <div>
          <p className="text-lg font-semibold">Tambah Menu</p>
          <p className="text-xs">Perbarui Informasi Menu</p>

          <div className="w-full p-40 border-3 border-dotted border-gray-400 rounded-sm mt-5">
            <button>
              <ImagePlus className="mx-auto text-gray-400" />
              <p className="text-xs text-gray-400">Upload a file</p>
            </button>
          </div>
        </div>

        <div className="mt-16 w-full flex flex-col gap-3">
          {labels.map((item, index) => (
            <div key={index}>
              <p className="text-sm">{item.label}</p>
              <input type="text" className=" w-full p-1 border border-gray-400 rounded-lg ml-1 text-sm" placeholder={item.placeholder} />
            </div>
          ))}

          <div className="flex justify-start gap-2">
            <button onClick={onClose} className="px-4 py-2 rounded bg-gray-200">
              Cancel
            </button>
            <button className="px-4 py-2 rounded bg-primary text-white">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
