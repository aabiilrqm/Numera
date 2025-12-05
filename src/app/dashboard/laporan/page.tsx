"use client";

import { useState } from "react";
import {
  Calendar,
  Download,
  TrendingUp,
  TrendingDown,
  DollarSign,
  CreditCard,
  FileText,
} from "lucide-react";

export default function LaporanPage() {
  const [periode, setPeriode] = useState("Bulanan"); // Default jadi Bulanan agar relevan

  // Data Dummy Ringkasan
  const summary = {
    omset: 15400000,
    laba: 8200000,
    pengeluaran: 7200000,
    transaksi: 145,
  };

  // Data Dummy Transaksi
  const transactions = [
    {
      id: "TX-1001",
      date: "2025-10-24 10:30",
      type: "Dine In",
      amount: 150000,
      status: "Selesai",
    },
    {
      id: "TX-1002",
      date: "2025-10-24 11:15",
      type: "Take Away",
      amount: 45000,
      status: "Selesai",
    },
    {
      id: "TX-1003",
      date: "2025-10-24 12:00",
      type: "Dine In",
      amount: 320000,
      status: "Selesai",
    },
    {
      id: "TX-1004",
      date: "2025-10-24 12:45",
      type: "Online",
      amount: 85000,
      status: "Batal",
    },
    {
      id: "TX-1005",
      date: "2025-10-24 13:20",
      type: "Dine In",
      amount: 210000,
      status: "Selesai",
    },
  ];

  // --- DATA DUMMY GRAFIK (SETAHUN: JAN - DES) ---
  const chartData = [45, 50, 40, 60, 75, 55, 65, 80, 70, 85, 90, 95];
  const chartLabels = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "Mei",
    "Jun",
    "Jul",
    "Agu",
    "Sep",
    "Okt",
    "Nov",
    "Des",
  ];

  return (
    <div className="text-gray-800 space-y-6">
      {/* 1. HEADER & FILTER */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-primary">Laporan Keuangan</h1>
          <p className="text-sm text-gray-500">
            Pantau performa penjualan dan arus kas bisnis Anda.
          </p>
        </div>

        <div className="flex gap-2">
          {/* Dropdown Periode */}
          <div className="relative">
            <select
              value={periode}
              onChange={(e) => setPeriode(e.target.value)}
              className="appearance-none bg-white border border-gray-200 text-gray-700 py-2.5 pl-4 pr-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm font-medium cursor-pointer shadow-sm hover:bg-gray-50"
            >
              <option>Harian</option>
              <option>Mingguan</option>
              <option>Bulanan</option>
              <option>Tahunan</option>
            </select>
            <Calendar
              className="absolute right-3 top-2.5 text-gray-400 pointer-events-none"
              size={16}
            />
          </div>

          {/* Tombol Export */}
          <button
            className="flex items-center gap-2 bg-primary text-white px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-secondary transition shadow-sm"
            onClick={() => alert("Mengunduh Laporan PDF...")}
          >
            <Download size={16} />
            <span className="hidden sm:inline">Unduh Laporan</span>
          </button>
        </div>
      </div>

      {/* 2. KARTU RINGKASAN (SUMMARY CARDS) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Kartu Omset */}
        <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500 mb-1">Total Omset</p>
            <h3 className="text-2xl font-bold text-primary">
              Rp {summary.omset.toLocaleString()}
            </h3>
            <span className="text-xs text-green-600 flex items-center gap-1 mt-1 font-medium bg-green-50 w-fit px-1.5 py-0.5 rounded">
              <TrendingUp size={12} /> +12% dari periode lalu
            </span>
          </div>
          <div className="p-3 bg-blue-50 text-blue-600 rounded-lg">
            <DollarSign size={24} />
          </div>
        </div>

        {/* Kartu Pengeluaran */}
        <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500 mb-1">Total Pengeluaran</p>
            <h3 className="text-2xl font-bold text-gray-800">
              Rp {summary.pengeluaran.toLocaleString()}
            </h3>
            <span className="text-xs text-red-500 flex items-center gap-1 mt-1 font-medium bg-red-50 w-fit px-1.5 py-0.5 rounded">
              <TrendingDown size={12} /> +5% (Meningkat)
            </span>
          </div>
          <div className="p-3 bg-red-50 text-red-600 rounded-lg">
            <CreditCard size={24} />
          </div>
        </div>

        {/* Kartu Laba Bersih */}
        <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500 mb-1">Laba Bersih</p>
            <h3 className="text-2xl font-bold text-green-700">
              Rp {summary.laba.toLocaleString()}
            </h3>
            <span className="text-xs text-gray-400 mt-1 block">
              Margin Keuntungan: 53%
            </span>
          </div>
          <div className="p-3 bg-green-50 text-green-600 rounded-lg">
            <TrendingUp size={24} />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* 3. GRAFIK PENJUALAN (KIRI - 2/3) - UPDATE DATA SETAHUN */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-lg text-primary">Grafik Penjualan</h3>
            <span className="text-xs text-gray-400 font-medium px-2 py-1 bg-gray-100 rounded">
              Tahun 2025
            </span>
          </div>

          {/* Visualisasi Grafik CSS */}
          {/* Gap diubah jadi gap-2 agar 12 batang muat */}
          <div className="h-64 flex items-end justify-between gap-2 px-2">
            {chartData.map((height, i) => (
              <div
                key={i}
                className="w-full flex flex-col items-center gap-2 group h-full justify-end"
              >
                {/* Tooltip */}
                <div className="opacity-0 group-hover:opacity-100 transition-opacity mb-2 text-[10px] bg-gray-800 text-white px-2 py-1 rounded whitespace-nowrap absolute -mt-8 z-10">
                  Rp {(height * 200000).toLocaleString()}{" "}
                  {/* Simulasi Angka Jutaan */}
                </div>
                {/* Batang */}
                <div
                  className="w-full bg-primary/80 hover:bg-primary rounded-t-sm transition-all duration-300 cursor-pointer relative group-hover:shadow-lg"
                  style={{ height: `${height}%` }}
                ></div>
                {/* Label X-Axis (Bulan) */}
                <span className="text-[10px] text-gray-500 font-medium truncate w-full text-center">
                  {chartLabels[i]}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 4. METRIK TAMBAHAN (KANAN - 1/3) */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="font-bold text-primary mb-4">Metode Pembayaran</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Tunai (Cash)</span>
                <span className="text-sm font-bold">45%</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div
                  className="bg-green-500 h-2 rounded-full"
                  style={{ width: "45%" }}
                ></div>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">QRIS / E-Wallet</span>
                <span className="text-sm font-bold">35%</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div
                  className="bg-blue-500 h-2 rounded-full"
                  style={{ width: "35%" }}
                ></div>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Debit / Kredit</span>
                <span className="text-sm font-bold">20%</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div
                  className="bg-purple-500 h-2 rounded-full"
                  style={{ width: "20%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 5. TABEL RINCIAN TRANSAKSI */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-100 flex justify-between items-center">
          <h3 className="font-bold text-lg text-primary flex items-center gap-2">
            <FileText size={20} />
            Rincian Transaksi
          </h3>
          <button className="text-sm text-primary hover:underline font-medium">
            Lihat Semua
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-50 text-gray-500 font-medium">
              <tr>
                <th className="p-4">No. Transaksi</th>
                <th className="p-4">Tanggal & Waktu</th>
                <th className="p-4">Tipe Pesanan</th>
                <th className="p-4">Total</th>
                <th className="p-4">Status</th>
                <th className="p-4 text-center">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((trx, i) => (
                <tr
                  key={i}
                  className="border-b border-gray-50 last:border-0 hover:bg-gray-50 transition-colors"
                >
                  <td className="p-4 font-mono text-primary font-medium">
                    {trx.id}
                  </td>
                  <td className="p-4 text-gray-600">{trx.date}</td>
                  <td className="p-4">
                    <span className="px-2 py-1 bg-gray-100 rounded text-xs text-gray-600 font-medium border border-gray-200">
                      {trx.type}
                    </span>
                  </td>
                  <td className="p-4 font-bold text-gray-800">
                    Rp {trx.amount.toLocaleString()}
                  </td>
                  <td className="p-4">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-bold ${
                        trx.status === "Selesai"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {trx.status}
                    </span>
                  </td>
                  <td className="p-4 text-center">
                    <button className="text-gray-400 hover:text-primary transition">
                      Detail
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
