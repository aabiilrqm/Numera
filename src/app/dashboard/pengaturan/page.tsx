"use client";

import { useState, useEffect } from "react";
import {
  Store,
  User,
  Settings as SettingsIcon,
  Database,
  Save,
  Printer,
  LogOut,
} from "lucide-react";

export default function PengaturanPage() {
  const [activeTab, setActiveTab] = useState("toko");
  const [loading, setLoading] = useState(false);

  // State Data Pengaturan
  const [storeConfig, setStoreConfig] = useState({
    name: "Numera Point of Sales",
    address: "Jl. Perintis Kemerdekaan, Makassar",
    phone: "0812-3456-7890",
    tax: 10, // PPN 10%
    serviceCharge: 5, // Service 5%
    printerName: "Epson TM-T82",
    footerStruk: "Terima kasih atas kunjungan Anda!",
  });

  // Load Data saat pertama buka
  useEffect(() => {
    const savedConfig = localStorage.getItem("storeConfig");
    if (savedConfig) {
      setStoreConfig(JSON.parse(savedConfig));
    }
  }, []);

  // Handle Perubahan Input
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setStoreConfig((prev) => ({ ...prev, [name]: value }));
  };

  // Simpan Data
  const handleSave = () => {
    setLoading(true);
    setTimeout(() => {
      localStorage.setItem("storeConfig", JSON.stringify(storeConfig));

      // --- TAMBAHAN BARU: Kirim sinyal update ke Layout ---
      window.dispatchEvent(new Event("storeConfigUpdated"));

      setLoading(false);
      alert("Pengaturan berhasil disimpan!");
    }, 1000);
  };

  return (
    <div className="text-gray-800 space-y-6">
      {/* HEADER */}
      <div>
        <h1 className="text-2xl font-bold text-primary">Pengaturan</h1>
        <p className="text-sm text-gray-500">
          Kelola informasi toko dan preferensi aplikasi.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* SIDEBAR MENU TAB (KIRI) */}
        <div className="w-full lg:w-64 flex flex-col gap-2 shrink-0">
          {[
            { id: "toko", label: "Profil Toko", icon: <Store size={18} /> },
            {
              id: "sistem",
              label: "Pajak & Struk",
              icon: <SettingsIcon size={18} />,
            },
            { id: "akun", label: "Akun & Keamanan", icon: <User size={18} /> },
            {
              id: "data",
              label: "Backup & Data",
              icon: <Database size={18} />,
            },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                activeTab === tab.id
                  ? "bg-primary text-white shadow-md"
                  : "bg-white text-gray-600 hover:bg-gray-50 border border-transparent hover:border-gray-200"
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* KONTEN TAB (KANAN) */}
        <div className="flex-1">
          {/* --- TAB 1: PROFIL TOKO --- */}
          {activeTab === "toko" && (
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 animate-in fade-in slide-in-from-bottom-2 duration-300">
              <h2 className="font-bold text-lg text-primary mb-6 flex items-center gap-2">
                <Store size={20} /> Informasi Toko
              </h2>
              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Nama Toko
                  </label>
                  <input
                    name="name"
                    value={storeConfig.name}
                    onChange={handleChange}
                    type="text"
                    className="w-full bg-broken-white border-none rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-primary/50 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Alamat Lengkap
                  </label>
                  <textarea
                    name="address"
                    value={storeConfig.address}
                    onChange={handleChange}
                    rows={3}
                    className="w-full bg-broken-white border-none rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-primary/50 outline-none resize-none"
                  ></textarea>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Nomor Telepon
                  </label>
                  <input
                    name="phone"
                    value={storeConfig.phone}
                    onChange={handleChange}
                    type="tel"
                    className="w-full bg-broken-white border-none rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-primary/50 outline-none"
                  />
                </div>
              </div>
            </div>
          )}

          {/* --- TAB 2: PAJAK & STRUK --- */}
          {activeTab === "sistem" && (
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 animate-in fade-in slide-in-from-bottom-2 duration-300">
              <h2 className="font-bold text-lg text-primary mb-6 flex items-center gap-2">
                <Printer size={20} /> Pengaturan Struk & Pajak
              </h2>
              <div className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Pajak PPN (%)
                    </label>
                    <input
                      name="tax"
                      value={storeConfig.tax}
                      onChange={handleChange}
                      type="number"
                      className="w-full bg-broken-white border-none rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-primary/50 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Service Charge (%)
                    </label>
                    <input
                      name="serviceCharge"
                      value={storeConfig.serviceCharge}
                      onChange={handleChange}
                      type="number"
                      className="w-full bg-broken-white border-none rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-primary/50 outline-none"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Nama Printer Utama
                  </label>
                  <select
                    name="printerName"
                    value={storeConfig.printerName}
                    onChange={handleChange}
                    className="w-full bg-broken-white border-none rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-primary/50 outline-none cursor-pointer"
                  >
                    <option>Epson TM-T82</option>
                    <option>Thermal Printer 58mm</option>
                    <option>Bluetooth Printer</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Catatan Kaki (Footer Struk)
                  </label>
                  <input
                    name="footerStruk"
                    value={storeConfig.footerStruk}
                    onChange={handleChange}
                    type="text"
                    className="w-full bg-broken-white border-none rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-primary/50 outline-none"
                  />
                </div>
              </div>
            </div>
          )}

          {/* --- TAB 3: AKUN --- */}
          {activeTab === "akun" && (
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 animate-in fade-in slide-in-from-bottom-2 duration-300">
              <h2 className="font-bold text-lg text-primary mb-6 flex items-center gap-2">
                <User size={20} /> Akun Admin
              </h2>
              <div className="flex items-center gap-4 mb-8 p-4 bg-primary/5 rounded-xl border border-primary/10">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
                  A
                </div>
                <div>
                  <h3 className="font-bold text-primary">Admin Numera</h3>
                  <p className="text-xs text-gray-500">admin@numera.com</p>
                </div>
                <button className="ml-auto text-xs bg-white border border-gray-200 px-3 py-1.5 rounded-lg hover:bg-gray-50">
                  Edit Profil
                </button>
              </div>

              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Ganti Password
                  </label>
                  <input
                    type="password"
                    placeholder="Password Lama"
                    className="w-full bg-broken-white border-none rounded-lg px-4 py-3 text-sm mb-3 focus:ring-2 focus:ring-primary/50 outline-none"
                  />
                  <input
                    type="password"
                    placeholder="Password Baru"
                    className="w-full bg-broken-white border-none rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-primary/50 outline-none"
                  />
                </div>

                <button className="w-full py-3 border border-red-200 text-red-600 rounded-xl font-semibold hover:bg-red-50 flex items-center justify-center gap-2 mt-4">
                  <LogOut size={18} />
                  Keluar Aplikasi (Logout)
                </button>
              </div>
            </div>
          )}

          {/* --- TAB 4: DATA & BACKUP --- */}
          {activeTab === "data" && (
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 animate-in fade-in slide-in-from-bottom-2 duration-300">
              <h2 className="font-bold text-lg text-primary mb-6 flex items-center gap-2">
                <Database size={20} /> Manajemen Data
              </h2>

              <div className="space-y-4">
                <div className="p-4 border border-gray-200 rounded-xl flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-gray-800 text-sm">
                      Backup Database
                    </h4>
                    <p className="text-xs text-gray-500">
                      Simpan salinan data transaksi & pelanggan.
                    </p>
                  </div>
                  <button className="bg-primary text-white px-4 py-2 rounded-lg text-xs font-bold hover:bg-secondary">
                    Download Backup
                  </button>
                </div>

                <div className="p-4 border border-red-100 bg-red-50 rounded-xl flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-red-700 text-sm">
                      Reset Semua Data
                    </h4>
                    <p className="text-xs text-red-500">
                      Hapus semua transaksi (Hati-hati!)
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      if (
                        confirm("Yakin hapus data? Ini tidak bisa dibatalkan!")
                      ) {
                        localStorage.clear();
                        window.location.reload();
                      }
                    }}
                    className="bg-white border border-red-200 text-red-600 px-4 py-2 rounded-lg text-xs font-bold hover:bg-red-100"
                  >
                    Reset Data
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* TOMBOL SIMPAN GLOBAL */}
          {activeTab !== "data" && activeTab !== "akun" && (
            <div className="mt-6 flex justify-end">
              <button
                onClick={handleSave}
                disabled={loading}
                className="flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-xl font-bold hover:bg-secondary transition shadow-lg shadow-primary/20 disabled:opacity-70"
              >
                {loading ? (
                  "Menyimpan..."
                ) : (
                  <>
                    <Save size={18} /> Simpan Perubahan
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
