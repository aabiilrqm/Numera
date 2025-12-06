"use client";

import { db } from "@/src/lib/firebase";
import { doc, deleteDoc } from "firebase/firestore";

export default function ModalDeleteMenu({ open, onClose, item, refresh } : any) {
  if (!open) return null;

  const handleDelete = async () => {
    await deleteDoc(doc(db, "menu", item.id));
    refresh();
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-40">
      <div className="bg-white p-6 rounded-xl w-1/3">
        <h2 className="text-lg font-semibold">Hapus Menu?</h2>
        <p className="text-sm text-gray-500 mt-2">
          Menu <strong>{item.label}</strong> akan dihapus.
        </p>

        <div className="mt-4 flex justify-end gap-3">
          <button className="px-4 py-2 bg-gray-300 rounded" onClick={onClose}>
            Batal
          </button>
          <button
            className="px-4 py-2 bg-red-500 text-white rounded"
            onClick={handleDelete}
          >
            Hapus
          </button>
        </div>
      </div>
    </div>
  );
}
