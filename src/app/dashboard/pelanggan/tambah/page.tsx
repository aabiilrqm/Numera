"use client";

import Link from "next/link";
import { X, Image as ImageIcon } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation"; // Untuk pindah halaman otomatis

export default function TambahPelangganPage() {
  const router = useRouter();

  // 1. State untuk menampung inputan form
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    status: "aktif",
    note: "",
  });

  // 2. Fungsi menangani ketikan user
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // 3. Fungsi Simpan ke LocalStorage
  const handleSave = () => {
    // Validasi sederhana
    if (!formData.name || !formData.phone) {
      alert("Nama dan Nomor Telepon wajib diisi!");
      return;
    }

    // Ambil data lama dari LocalStorage (jika ada)
    const existingData = JSON.parse(localStorage.getItem("customers") || "[]");

    // Buat object pelanggan baru
    const newCustomer = {
      id: Date.now(), // Pakai timestamp biar ID unik
      name: formData.name,
      phone: formData.phone,
      address: formData.address,
      status: formData.status,
      note: formData.note,
    };

    // Gabungkan data lama + data baru
    const updatedData = [newCustomer, ...existingData];

    // Simpan kembali ke LocalStorage
    localStorage.setItem("customers", JSON.stringify(updatedData));

    // Beri notifikasi & Pindah ke halaman daftar
    alert("Pelanggan berhasil disimpan!");
    router.push("/dashboard/pelanggan");
  };

  return (
    <div className="bg-broken-white min-h-full p-4 flex justify-center items-start">
      <div className="bg-white w-full max-w-5xl rounded-xl p-6 md:p-8 shadow-sm relative animate-in fade-in slide-in-from-bottom-4 duration-300">
        {/* Header Modal */}
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-2xl font-bold text-primary">
              Daftar Pelanggan
            </h1>
            <p className="text-gray-500 mt-1">Tambah Pelanggan Baru</p>
          </div>
          <Link
            href="/dashboard/pelanggan"
            className="p-2 bg-broken-white rounded-full hover:bg-gray-200 transition text-gray-500 hover:text-primary"
          >
            <X size={24} />
          </Link>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Kiri: Upload Area (Visual Saja Dulu) */}
          <div className="w-full lg:w-5/12 shrink-0">
            <label className="border-2 border-dashed border-gray-300 rounded-xl h-64 lg:h-80 flex flex-col items-center justify-center text-gray-400 cursor-pointer hover:bg-broken-white hover:border-acc group transition-all">
              <div className="p-4 rounded-full bg-broken-white group-hover:bg-white transition-colors mb-3">
                <ImageIcon
                  size={40}
                  className="text-gray-300 group-hover:text-acc transition-colors"
                />
              </div>
              <span className="font-medium text-sm group-hover:text-primary transition-colors">
                Upload Foto Pelanggan
              </span>
              <input type="file" className="hidden" accept="image/*" />
            </label>
          </div>

          {/* Kanan: Form Input */}
          <div className="w-full lg:w-7/12 space-y-5">
            {/* Input Nama */}
            <div>
              <label className="block font-semibold mb-2 text-sm text-primary">
                Nama Pelanggan
              </label>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                type="text"
                placeholder="Masukkan nama lengkap"
                className="w-full bg-broken-white border border-transparent rounded-lg px-4 py-3 outline-none focus:border-primary focus:bg-white transition-all"
              />
            </div>

            {/* Input Telepon */}
            <div>
              <label className="block font-semibold mb-2 text-sm text-primary">
                No. Telp
              </label>
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                type="tel"
                placeholder="Contoh: 08123456789"
                className="w-full bg-broken-white border border-transparent rounded-lg px-4 py-3 outline-none focus:border-primary focus:bg-white transition-all"
              />
            </div>

            {/* Input Alamat */}
            <div>
              <label className="block font-semibold mb-2 text-sm text-primary">
                Alamat
              </label>
              <input
                name="address"
                value={formData.address}
                onChange={handleChange}
                type="text"
                placeholder="Masukkan alamat lengkap"
                className="w-full bg-broken-white border border-transparent rounded-lg px-4 py-3 outline-none focus:border-primary focus:bg-white transition-all"
              />
            </div>

            {/* Status Dropdown */}
            <div>
              <label className="block font-semibold mb-2 text-sm text-primary">
                Status
              </label>
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full bg-broken-white border border-transparent rounded-lg px-4 py-3 outline-none focus:border-primary focus:bg-white transition-all appearance-none cursor-pointer text-gray-700"
              >
                <option value="aktif">Aktif</option>
                <option value="nonaktif">Non-Aktif</option>
              </select>
            </div>

            {/* Textarea Catatan */}
            <div>
              <label className="block font-semibold mb-2 text-sm text-primary">
                Catatan (Opsional)
              </label>
              <textarea
                name="note"
                value={formData.note}
                onChange={handleChange}
                placeholder="Tambahkan catatan khusus..."
                className="w-full bg-broken-white border border-transparent rounded-lg px-4 py-3 outline-none focus:border-primary focus:bg-white h-28 resize-none transition-all"
              ></textarea>
            </div>

            {/* Tombol Simpan */}
            <div className="pt-6">
              <button
                onClick={handleSave}
                className="w-full bg-primary text-white py-3.5 rounded-lg font-bold text-lg hover:bg-secondary transition-all shadow-lg shadow-primary/20 active:scale-[0.99]"
              >
                Simpan Pelanggan
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
