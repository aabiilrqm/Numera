"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import {
  House,
  ChefHat,
  ChartNoAxesCombined,
  Users,
  Settings,
  User,
} from "lucide-react";

// DATA MENU
const menuGroups = [
  {
    title: "Main",
    items: [
      { icon: <House size={20} />, label: "Beranda", href: "/dashboard" },
      { icon: <ChefHat size={20} />, label: "Menu", href: "/dashboard/menu" },
    ],
  },
  {
    title: "Analytics",
    items: [
      {
        icon: <ChartNoAxesCombined size={20} />,
        label: "Laporan",
        href: "/dashboard/laporan",
      },
    ],
  },
  {
    title: "Management",
    items: [
      {
        icon: <Users size={20} />,
        label: "Pelanggan",
        href: "/dashboard/pelanggan",
      },
    ],
  },
  {
    title: "Preferences",
    items: [
      {
        icon: <Settings size={20} />,
        label: "Pengaturan",
        href: "/dashboard/pengaturan",
      },
    ],
  },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // --- STATE UNTUK INFO TOKO DINAMIS ---
  const [storeInfo, setStoreInfo] = useState({
    name: "Numera Point of Sales",
    address: "Jl. Perintis Kemerdekaan, Makassar, Indonesia",
  });

  // --- EFEK BACA LOCAL STORAGE (Agar Nama Toko Berubah) ---
  useEffect(() => {
    const loadData = () => {
      const savedConfig = localStorage.getItem("storeConfig");
      if (savedConfig) {
        const parsed = JSON.parse(savedConfig);
        // Cek agar tidak undefined
        setStoreInfo({
          name: parsed.name || "Numera Point of Sales",
          address: parsed.address || "Indonesia",
        });
      }
    };

    // Load awal
    loadData();

    // Dengar sinyal perubahan dari halaman Pengaturan
    window.addEventListener("storeConfigUpdated", loadData);
    return () => window.removeEventListener("storeConfigUpdated", loadData);
  }, []);

  return (
    <div className="flex bg-broken-white h-screen overflow-hidden">
      {/* --- SIDEBAR (KIRI) --- */}
      <div className="w-52 bg-primary flex flex-col shrink-0 transition-all duration-300">
        {/* BAGIAN 1: PROFIL ADMIN */}
        <div className="h-[88px] flex items-center gap-3 border-b border-white/10 px-4 mb-2">
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white border-2 border-white/30 shrink-0">
            <User size={20} />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-white font-bold text-base leading-tight text-left">
              Admin Numera
            </h2>
            <div className="flex items-center gap-1.5 mt-0.5">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-xs text-gray-300 font-medium">Online</span>
            </div>
          </div>
        </div>

        {/* BAGIAN 2: MENU */}
        <div className="text-white flex-1 w-full px-4 overflow-y-auto scrollbar-hide">
          <div className="flex flex-col gap-6 py-4">
            {menuGroups.map((group, groupIndex) => (
              <div key={groupIndex}>
                <h3 className="text-third/50 uppercase text-[10px] font-bold mb-2 px-4 tracking-wider">
                  {group.title}
                </h3>
                <ul className="flex flex-col gap-1">
                  {group.items.map((item, itemIndex) => {
                    const isActive =
                      pathname === item.href ||
                      (item.href !== "/dashboard" &&
                        pathname.startsWith(item.href));
                    return (
                      <li key={itemIndex}>
                        <Link
                          href={item.href || "#"}
                          className={`
                            flex items-center gap-3 px-4 py-2.5 rounded-lg font-medium transition-all duration-200 text-sm
                            ${
                              isActive
                                ? "bg-white text-primary shadow-lg"
                                : "hover:bg-secondary/50 text-white hover:pl-6"
                            }
                          `}
                        >
                          <span
                            className={isActive ? "text-primary" : "text-third"}
                          >
                            {item.icon}
                          </span>
                          {item.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="py-4 text-[10px] text-third/50 text-center">
          © 2025 Numera POS
        </div>
      </div>

      {/* --- AREA KONTEN (KANAN) --- */}
      <div className="flex flex-col flex-1 h-full overflow-y-auto">
        {/* BAGIAN 3: HEADER ATAS (DINAMIS & MEPET KIRI) */}
        <div className="bg-white border-b border-gray-200 shadow-sm pl-0 pr-6 h-[88px] shrink-0 sticky top-0 z-40 flex items-center gap-1">
          {/* Logo Numera (Negative Margin dikit biar pas) */}
          <div className="relative w-6 h-10 shrink-0 -ml-1">
            <Image
              src={"/numera-logo.png"}
              fill
              alt="numera-logo"
              className="object-contain"
              priority
            />
          </div>

          {/* Nama Toko (Dari State) */}
          <div>
            <h1 className="text-xl font-bold text-primary leading-tight">
              {storeInfo.name}
            </h1>
            <p className="text-xs text-gray-500 truncate max-w-md">
              {storeInfo.address}
            </p>
          </div>
        </div>

        {/* Isi Halaman */}
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
}
