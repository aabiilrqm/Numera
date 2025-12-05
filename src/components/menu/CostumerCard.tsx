"use client";

import Link from "next/link";
import { Edit3, Trash2 } from "lucide-react";

interface CustomerProps {
  id: number;
  name: string;
  phone: string;
  // Tambahkan prop ini untuk menerima fungsi hapus dari parent
  onDelete: (id: number) => void;
}

export default function CustomerCard({
  id,
  name,
  phone,
  onDelete,
}: CustomerProps) {
  const initial = name.charAt(0).toUpperCase();

  return (
    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between hover:shadow-md transition-shadow group">
      {/* Bagian Kiri (Klik untuk Detail) */}
      <Link
        href={`/dashboard/pelanggan/${id}`}
        className="flex items-center gap-4 flex-1 cursor-pointer"
      >
        <div className="w-12 h-12 shrink-0 rounded-full bg-third/30 flex items-center justify-center text-xl font-bold text-primary group-hover:bg-primary group-hover:text-white transition-colors">
          {initial}
        </div>
        <div className="overflow-hidden">
          <h3 className="font-semibold text-primary truncate group-hover:underline">
            {name}
          </h3>
          <p className="text-gray-500 text-sm truncate">{phone}</p>
        </div>
      </Link>

      {/* Tombol Aksi */}
      <div className="flex gap-2 shrink-0 ml-4">
        {/* Tombol Edit */}
        <Link href={`/dashboard/pelanggan/${id}`}>
          <button className="p-2 text-gray-400 hover:text-primary hover:bg-third/20 rounded-lg transition-colors">
            <Edit3 size={20} />
          </button>
        </Link>

        {/* Tombol Hapus (Dengan Fungsi onDelete) */}
        <button
          onClick={() => onDelete(id)}
          className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
        >
          <Trash2 size={20} />
        </button>
      </div>
    </div>
  );
}
