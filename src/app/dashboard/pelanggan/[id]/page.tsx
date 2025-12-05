"use client";

import Link from "next/link";
import { X, Image as ImageIcon } from "lucide-react";
import { useState, useEffect, use } from "react";
import { useRouter } from "next/navigation";

export default function DetailPelangganPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = use(params);
  const customerId = resolvedParams.id;
  const router = useRouter();

  // 1. State Baru: Mode Edit (Default False = Mode Lihat Saja)
  const [isEditing, setIsEditing] = useState(false);

  // State Form
  const [formData, setFormData] = useState({
    id: 0,
    name: "",
    phone: "",
    address: "",
    status: "aktif",
    note: "",
  });

  // Load Data (Sama seperti sebelumnya)
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("customers") || "[]");
    const foundCustomer = storedData.find((c: any) => c.id == customerId);
    if (foundCustomer) {
      setFormData(foundCustomer);
    }
  }, [customerId]);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = () => {
    const storedData = JSON.parse(localStorage.getItem("customers") || "[]");
    const updatedData = storedData.map((c: any) => {
      if (c.id == customerId) {
        return { ...c, ...formData };
      }
      return c;
    });
    localStorage.setItem("customers", JSON.stringify(updatedData));

    // Setelah simpan, kembalikan ke Mode Lihat
    alert("Perubahan berhasil disimpan!");
    setIsEditing(false);
  };

  return (
    <div className="bg-broken-white min-h-full p-4 flex justify-center items-start">
      <div className="bg-white w-full max-w-5xl rounded-xl p-6 md:p-8 shadow-sm relative animate-in fade-in slide-in-from-bottom-4 duration-300">
        {/* Header */}
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-2xl font-bold text-primary">
              Daftar Pelanggan
            </h1>
            <p className="text-gray-500 mt-1">
              {isEditing ? "Edit Data Pelanggan" : "Detail Pelanggan"}
            </p>
          </div>
          <Link
            href="/dashboard/pelanggan"
            className="p-2 bg-broken-white rounded-full hover:bg-gray-200 transition text-gray-500 hover:text-primary"
          >
            <X size={24} />
          </Link>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Kiri: Foto */}
          <div className="w-full lg:w-5/12 shrink-0">
            {/* Disable klik upload jika sedang tidak edit */}
            <label
              className={`border-2 border-dashed border-gray-300 rounded-xl h-64 lg:h-80 flex flex-col items-center justify-center text-gray-400 ${
                isEditing
                  ? "cursor-pointer hover:bg-broken-white hover:border-acc"
                  : "cursor-default bg-gray-50"
              } transition-all`}
            >
              <div className="p-4 rounded-full bg-broken-white mb-3">
                <ImageIcon size={40} className="text-gray-300" />
              </div>
              <span className="font-medium text-sm">
                {isEditing ? "Ubah Foto" : "Foto Profil"}
              </span>
              <input
                type="file"
                className="hidden"
                accept="image/*"
                disabled={!isEditing}
              />
            </label>
          </div>

          {/* Kanan: Form Input */}
          <div className="w-full lg:w-7/12 space-y-5">
            {/* Input Nama */}
            <div>
              <label className="  font-semibold mb-2 text-base text-primary">
                Nama Pelanggan
              </label>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                disabled={!isEditing} // KUNCI: Matikan jika tidak sedang edit
                type="text"
                className={`w-full rounded-lg px-4 py-3 outline-none transition-all ${
                  isEditing
                    ? "bg-broken-white focus:border-primary border border-transparent"
                    : "bg-transparent border-b border-gray-200 pl-0"
                }`}
              />
            </div>

            {/* Input Telp */}
            <div>
              <label className="  font-semibold mb-2 text-base text-primary">
                No. Telp
              </label>
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                disabled={!isEditing}
                type="tel"
                className={`w-full rounded-lg px-4 py-3 outline-none transition-all ${
                  isEditing
                    ? "bg-broken-white focus:border-primary border border-transparent"
                    : "bg-transparent border-b border-gray-200 pl-0"
                }`}
              />
            </div>

            {/* Input Alamat */}
            <div>
              <label className="  font-semibold mb-2 text-base text-primary">
                Alamat
              </label>
              <input
                name="address"
                value={formData.address}
                onChange={handleChange}
                disabled={!isEditing}
                type="text"
                className={`w-full rounded-lg px-4 py-3 outline-none transition-all ${
                  isEditing
                    ? "bg-broken-white focus:border-primary border border-transparent"
                    : "bg-transparent border-b border-gray-200 pl-0"
                }`}
              />
            </div>

            {/* Status */}
            <div>
              <label className="  font-semibold mb-2 text-base text-primary">
                Status
              </label>
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                disabled={!isEditing}
                className={`w-full rounded-lg px-4 py-3 outline-none transition-all appearance-none text-gray-700 ${
                  isEditing
                    ? "bg-broken-white focus:border-primary border border-transparent cursor-pointer"
                    : "bg-transparent border-b border-gray-200 pl-0 cursor-default"
                }`}
              >
                <option value="aktif">Aktif</option>
                <option value="nonaktif">Non-Aktif</option>
              </select>
            </div>

            {/* Catatan */}
            {/* Catatan (Adaptive Height) */}
            <div>
              <label className="  font-semibold mb-2 text-base text-primary">
                Catatan
              </label>

              {isEditing ? (
                // MODE EDIT: Pakai Textarea agar bisa diketik
                <textarea
                  name="note"
                  value={formData.note}
                  onChange={handleChange}
                  className="w-full bg-broken-white border border-transparent rounded-lg px-4 py-3 outline-none min-h-[100px] focus:border-primary transition-all resize-y"
                  placeholder="Tambahkan catatan..."
                ></textarea>
              ) : (
                // MODE LIHAT: Pakai DIV agar tinggi menyesuaikan isi teks
                <div
                  className={`w-full rounded-lg px-0 py-2 min-h-8 whitespace-pre-wrap text-gray-700 ${
                    !formData.note ? "text-gray-400 italic" : ""
                  }`}
                >
                  {formData.note || "Tidak ada catatan."}
                </div>
              )}
            </div>

            <div className="pt-2">
              <Link
                href={`/dashboard/pelanggan/${customerId}/riwayat`}
                className="text-acc font-bold text-sm cursor-pointer hover:underline hover:text-primary transition-colors inline- "
              >
                Lihat Riwayat Pembelian Pelanggan
              </Link>
            </div>

            {/* TOMBOL LOGIC (Edit vs Simpan) */}
            <div className="pt-4">
              {isEditing ? (
                // Jika sedang Edit -> Tampilkan Tombol Simpan & Batal
                <div className="flex gap-4">
                  <button
                    onClick={() => setIsEditing(false)}
                    className="flex-1 bg-gray-200 text-gray-700 py-3.5 rounded-lg font-bold hover:bg-gray-300 transition-all"
                  >
                    Batal
                  </button>
                  <button
                    onClick={handleUpdate}
                    className="flex-1 bg-primary text-white py-3.5 rounded-lg font-bold hover:bg-secondary transition-all shadow-lg shadow-primary/20"
                  >
                    Simpan Perubahan
                  </button>
                </div>
              ) : (
                // Jika sedang Lihat -> Tampilkan Tombol Edit
                <button
                  onClick={() => setIsEditing(true)}
                  className="w-full bg-primary text-white py-3.5 rounded-lg font-bold hover:bg-secondary transition-all shadow-lg shadow-primary/20"
                >
                  Edit Pelanggan
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
