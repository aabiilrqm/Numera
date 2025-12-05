"use client";

import Link from "next/link";
import { ArrowLeft, History } from "lucide-react";
import { use } from "react";

// 1. Definisikan Tipe Data Transaksi
type Transaksi = {
  id: string;
  tanggal: string;
  total: number;
  status: string;
};

// 2. Fungsi Utama Halaman (Wajib ada 'export default')
export default function RiwayatPembelianPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // Unwrap params (Standar Next.js 15)
  const resolvedParams = use(params);

  // Data Dummy Transaksi (Kosong)
  const riwayatTransaksi: Transaksi[] = [
    // Jika nanti mau isi data dummy, formatnya begini:
    // { id: "TRX-001", tanggal: "2025-10-01", total: 50000, status: "Lunas" },
  ];

  return (
    <div className="p-6 text-gray-800">
      {/* Header Navigation */}
      <div className="flex items-center gap-4 mb-6">
        <Link
          href={`/dashboard/pelanggan/${resolvedParams.id}`}
          className="p-2 bg-white rounded-full border border-gray-200 hover:bg-gray-100 transition"
        >
          <ArrowLeft size={20} className="text-gray-600" />
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-primary">Riwayat Pembelian</h1>
          <p className="text-sm text-gray-500">
            ID Pelanggan: {resolvedParams.id}
          </p>
        </div>
      </div>

      {/* Tabel Template */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead className="bg-primary text-white">
            <tr>
              <th className="p-4 font-semibold text-sm">No</th>
              <th className="p-4 font-semibold text-sm">Tanggal Transaksi</th>
              <th className="p-4 font-semibold text-sm">ID Transaksi</th>
              <th className="p-4 font-semibold text-sm">Total Belanja</th>
              <th className="p-4 font-semibold text-sm">Status</th>
              <th className="p-4 font-semibold text-sm text-center">Aksi</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {riwayatTransaksi.length > 0 ? (
              riwayatTransaksi.map((trx, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="p-4">{index + 1}</td>
                  <td className="p-4">{trx.tanggal}</td>
                  <td className="p-4 font-mono">{trx.id}</td>
                  <td className="p-4 font-bold">
                    Rp {trx.total.toLocaleString()}
                  </td>
                  <td className="p-4">
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold">
                      {trx.status}
                    </span>
                  </td>
                  <td className="p-4 text-center">
                    <button className="text-primary hover:underline">
                      Detail
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              // Tampilan Jika Data Kosong
              <tr>
                <td colSpan={6} className="p-12 text-center text-gray-400">
                  <div className="flex flex-col items-center justify-center gap-2">
                    <History size={40} className="text-gray-300" />
                    <p>Belum ada riwayat transaksi untuk pelanggan ini.</p>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
