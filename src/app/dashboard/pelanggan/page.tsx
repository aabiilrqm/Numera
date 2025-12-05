"use client";

import { Search, Plus } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import CustomerCard from "@/src/components/menu/CostumerCard";

export default function DaftarPelangganPage() {
  const [allCustomers, setAllCustomers] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  // Load Data
  useEffect(() => {
    const storedData = localStorage.getItem("customers");
    if (storedData) {
      setAllCustomers(JSON.parse(storedData));
    } else {
      const initialData = [
        { id: 1, name: "Juswan", phone: "0874286384985" },
        { id: 2, name: "Jamal", phone: "081234567890" },
        { id: 3, name: "Jupri", phone: "08987654321" },
        { id: 4, name: "Siti Aminah", phone: "08214567890" },
        { id: 5, name: "Budi Santoso", phone: "08567890123" },
      ];
      setAllCustomers(initialData);
      localStorage.setItem("customers", JSON.stringify(initialData));
    }
  }, []);

  // --- LOGIKA HAPUS PELANGGAN ---
  const handleDelete = (idToDelete: number) => {
    const isConfirmed = window.confirm(
      "Apakah Anda yakin ingin menghapus pelanggan ini dari daftar?"
    );

    if (isConfirmed) {
      const updatedData = allCustomers.filter((c) => c.id !== idToDelete);
      setAllCustomers(updatedData);
      localStorage.setItem("customers", JSON.stringify(updatedData));
    }
  };

  // Logika Filtering
  const filteredCustomers = allCustomers.filter((customer) => {
    const queryLower = searchQuery.toLowerCase();
    const nameLower = customer.name.toLowerCase();
    const phoneString = customer.phone ? customer.phone.toString() : "";
    return nameLower.includes(queryLower) || phoneString.includes(queryLower);
  });

  return (
    <div className="text-gray-800 space-y-6">
      {/* HEADER */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-primary">Daftar Pelanggan</h1>
          {/* Sub-judul Baru */}
          <p className="text-sm text-gray-500 mt-1">
            Kelola data pelanggan dan riwayat pembelian mereka.
          </p>
        </div>

        <Link
          href="/dashboard/pelanggan/tambah"
          className="bg-primary text-white px-4 py-2.5 rounded-lg flex items-center gap-2 font-semibold hover:bg-secondary transition shadow-sm"
        >
          <Plus size={18} />
          <span className="hidden md:inline">Tambah Pelanggan</span>
        </Link>
      </div>

      {/* FILTER SECTION */}
      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="w-full md:w-96 flex items-center bg-broken-white border border-gray-200 rounded-lg px-4 py-2 focus-within:ring-2 focus-within:ring-primary/50 transition">
            <input
              type="text"
              placeholder="Cari Nama atau No. Telp"
              className="flex-1 bg-transparent border-none outline-none text-gray-700 placeholder:text-gray-400 text-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="text-gray-400 w-4 h-4 ml-2" />
          </div>
          <div className="flex items-center gap-3 min-w-max">
            <span className="font-semibold text-xs text-gray-600">
              Urutkan:
            </span>
            <select className="bg-broken-white border border-gray-200 rounded-lg px-3 py-2 font-semibold outline-none cursor-pointer text-xs text-gray-700 focus:border-primary transition">
              <option>Terbaru</option>
              <option>Nama A-Z</option>
            </select>
          </div>
        </div>
      </div>

      {/* CUSTOMER GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 pb-10">
        {filteredCustomers.length > 0 ? (
          filteredCustomers.map((c) => (
            <CustomerCard
              key={c.id}
              id={c.id}
              name={c.name}
              phone={c.phone}
              onDelete={handleDelete}
            />
          ))
        ) : (
          <div className="col-span-full py-20 text-center text-gray-400 bg-white rounded-xl border border-dashed border-gray-200">
            <p>Tidak ditemukan pelanggan dengan kata kunci "{searchQuery}"</p>
          </div>
        )}
      </div>
    </div>
  );
}
