"use client";

import Link from "next/link";
import {
  DollarSign,
  ShoppingBag,
  Utensils,
  AlertTriangle,
  Plus,
  Users,
  History,
  TrendingUp,
  Clock,
} from "lucide-react";

export default function DashboardPage() {
  // --- DATA DUMMY ---
  const stats = [
    {
      label: "Omset Hari Ini",
      value: "Rp 1.540.000",
      sub: "+12% dari kemarin",
      icon: <DollarSign size={24} />,
      color: "bg-green-100 text-green-700",
    },
    {
      label: "Total Transaksi",
      value: "45 Order",
      sub: "3 order dibatalkan",
      icon: <ShoppingBag size={24} />,
      color: "bg-blue-100 text-blue-700",
    },
    {
      label: "Pesanan Aktif",
      value: "3 Diproses",
      sub: "Menunggu di Dapur",
      icon: <Utensils size={24} />,
      color: "bg-orange-100 text-orange-700",
    },
    {
      label: "Stok Menipis",
      value: "2 Item",
      sub: "Perlu Restock Segera",
      icon: <AlertTriangle size={24} />,
      color: "bg-red-100 text-red-700",
    },
  ];

  const recentOrders = [
    {
      id: "#TX-9921",
      time: "10:45",
      customer: "Budi Santoso",
      total: "Rp 50.000",
      status: "Lunas",
    },
    {
      id: "#TX-9920",
      time: "10:42",
      customer: "Siti Aminah",
      total: "Rp 125.000",
      status: "Lunas",
    },
    {
      id: "#TX-9919",
      time: "10:30",
      customer: "Tanpa Nama",
      total: "Rp 25.000",
      status: "Lunas",
    },
    {
      id: "#TX-9918",
      time: "10:15",
      customer: "Juswan",
      total: "Rp 230.000",
      status: "Pending",
    },
  ];

  const topProducts = [
    { name: "Kopi Susu Gula Aren", sold: 24 },
    { name: "Nasi Goreng Spesial", sold: 18 },
    { name: "Roti Bakar Coklat", sold: 12 },
  ];

  // Data Tinggi Grafik (Persentase)
  const chartData = [30, 45, 20, 60, 80, 50, 90, 40, 60, 30];

  return (
    <div className="text-gray-800 space-y-6">
      {/* 1. HEADER WELCOME */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-primary">
            Halo, Admin Numera! 👋
          </h1>
          <p className="text-gray-500 text-sm">
            Berikut adalah ringkasan operasional toko Anda hari ini.
          </p>
        </div>
        <div className="bg-primary/10 px-4 py-2 rounded-lg flex items-center gap-2 text-primary font-medium text-sm">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          Sistem Online & Ter-sinkronisasi
        </div>
      </div>

      {/* 2. STATISTIK UTAMA (GRID 4) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col justify-between hover:shadow-md transition-shadow"
          >
            <div className="flex justify-between items-start mb-4">
              <div className={`p-3 rounded-lg ${stat.color}`}>{stat.icon}</div>
              <span className="text-xs font-bold text-green-600 flex items-center bg-green-50 px-2 py-1 rounded-full">
                <TrendingUp size={12} className="mr-1" /> Hari Ini
              </span>
            </div>
            <div>
              <h3 className="text-gray-500 text-sm font-medium">
                {stat.label}
              </h3>
              <p className="text-2xl font-bold text-primary mt-1">
                {stat.value}
              </p>
              <p className="text-xs text-gray-400 mt-1">{stat.sub}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* 3. BAGIAN KIRI: GRAFIK & TABEL (Lebar 2/3) */}
        <div className="lg:col-span-2 space-y-6">
          {/* A. Grafik Jam Sibuk */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold text-lg text-primary flex items-center gap-2">
                <Clock size={20} />
                Tren Jam Sibuk (Hari Ini)
              </h3>
            </div>

            {/* Chart Bar Manual (Tanpa Library) */}
            <div className="flex items-end justify-between h-48 gap-2">
              {chartData.map((height, i) => (
                <div
                  key={i}
                  className="w-full flex flex-col items-center gap-2 group h-full justify-end relative"
                >
                  {/* Tooltip (Hover) */}
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute bottom-full mb-2 text-xs bg-gray-800 text-white px-2 py-1 rounded whitespace-nowrap z-10">
                    {height} Pengunjung
                  </div>

                  {/* Batang Grafik (FIXED COLOR) */}
                  {/* Gunakan bg-green-200 agar pasti muncul */}
                  <div
                    className="w-full bg-green-200 hover:bg-primary rounded-t-md transition-all duration-300 cursor-pointer"
                    style={{ height: `${height}%` }}
                  ></div>

                  {/* Label Jam (FIXED LEADING ZERO ERROR) */}
                  <span className="text-[10px] text-gray-400 font-medium">
                    {String(8 + i).padStart(2, "0")}:00
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* B. Tabel Transaksi Terakhir */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6 border-b border-gray-100 flex justify-between items-center">
              <h3 className="font-bold text-lg text-primary">
                Transaksi Terakhir
              </h3>
              <button className="text-sm text-primary hover:underline font-medium">
                Lihat Semua
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-gray-50 text-gray-500">
                  <tr>
                    <th className="p-4 font-medium">Order ID</th>
                    <th className="p-4 font-medium">Jam</th>
                    <th className="p-4 font-medium">Pelanggan</th>
                    <th className="p-4 font-medium">Total</th>
                    <th className="p-4 font-medium">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {recentOrders.map((order, i) => (
                    <tr
                      key={i}
                      className="border-b border-gray-50 last:border-0 hover:bg-gray-50 transition-colors"
                    >
                      <td className="p-4 font-mono text-primary font-medium">
                        {order.id}
                      </td>
                      <td className="p-4 text-gray-500">{order.time}</td>
                      <td className="p-4 font-medium text-gray-700">
                        {order.customer}
                      </td>
                      <td className="p-4 font-bold text-gray-800">
                        {order.total}
                      </td>
                      <td className="p-4">
                        <span
                          className={`px-2 py-1 rounded text-xs font-bold ${
                            order.status === "Lunas"
                              ? "bg-green-100 text-green-700"
                              : "bg-yellow-100 text-yellow-700"
                          }`}
                        >
                          {order.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* 4. BAGIAN KANAN: SHORTCUT & TOP PRODUK (Lebar 1/3) */}
        <div className="space-y-6">
          {/* A. Pintasan Cepat */}
          <div className="bg-primary text-white p-6 rounded-xl shadow-lg relative overflow-hidden">
            <div className="absolute -right-6 -top-6 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>

            <h3 className="font-bold text-lg mb-4 relative z-10">
              Pintasan Cepat
            </h3>
            <div className="space-y-3 relative z-10">
              <Link
                href="/dashboard/menu"
                className="w-full bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-lg flex items-center gap-3 transition"
              >
                <div className="bg-white text-primary p-2 rounded-md shadow-sm">
                  <Plus size={18} />
                </div>
                <span className="font-medium text-sm">Buat Pesanan Baru</span>
              </Link>
              <Link
                href="/dashboard/pelanggan/tambah"
                className="w-full bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-lg flex items-center gap-3 transition"
              >
                <div className="bg-white text-primary p-2 rounded-md shadow-sm">
                  <Users size={18} />
                </div>
                <span className="font-medium text-sm">Tambah Pelanggan</span>
              </Link>
              <Link
                href="/dashboard/laporan"
                className="w-full bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-lg flex items-center gap-3 transition"
              >
                <div className="bg-white text-primary p-2 rounded-md shadow-sm">
                  <History size={18} />
                </div>
                <span className="font-medium text-sm">
                  Cek Riwayat Hari Ini
                </span>
              </Link>
            </div>
          </div>

          {/* B. Produk Terlaris */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="font-bold text-lg text-primary mb-4">
              Produk Terlaris 🔥
            </h3>
            <div className="space-y-4">
              {topProducts.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between pb-3 border-b border-gray-50 last:border-0 last:pb-0"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs ${
                        i === 0
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-gray-100 text-gray-500"
                      }`}
                    >
                      {i + 1}
                    </div>
                    <span className="text-sm font-medium text-gray-700">
                      {item.name}
                    </span>
                  </div>
                  <span className="text-sm font-bold text-primary">
                    {item.sold} Terjual
                  </span>
                </div>
              ))}
            </div>
            <button className="w-full mt-6 text-sm text-gray-500 border border-gray-200 py-2 rounded-lg hover:bg-gray-50 transition font-medium">
              Lihat Analisis Menu
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
