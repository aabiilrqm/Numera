"use client"

import { useRouter } from "next/navigation";

import FormIdentitas from "@/src/components/auth/identitas/FormIdentitas";
import TahapanIdentitas from "@/src/components/auth/identitas/TahapanIdentitas";
import HeaderIdentitas from "@/src/components/auth/identitas/HeaderIdentitas";
export default function RegisterPage() {
  const router = useRouter()
  return (
    <div className="w-5/6 mx-auto">
      {/* Tahapan */}
      <TahapanIdentitas />
      {/* Header */}
      <HeaderIdentitas />
      {/* Pembatas */}
      <div className="w-full bg-gray-400 h-px mt-5 mb-5"></div>
      {/* Form */}
      <FormIdentitas />
      {/* Button */}
      <div className="w-full flex justify-end items-center">
        <button className="px-6 py-1 bg-primary text-white rounded-lg text-center mt-2 text-sm cursor-pointer" onClick={() => router.push('/restoran')}>
          Selanjutnya
        </button>
      </div>
    </div>
  );
}
