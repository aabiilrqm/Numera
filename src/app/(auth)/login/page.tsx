"use client";

import FormLogin from "@/src/components/auth/login/FormLogin";
import Link from "next/link";
export default function LoginPage() {

  return (
    <div className="w-5/6 mx-auto">
      <h1 className="text-xl font-semibold">Selamat Datang</h1>
      <h2 className="text-sm text-gray-500">
        Silahkan daftarkan akun anda
      </h2>

      {/* Google */}
      <div className="bg-secondary rounded-lg p-2 flex justify-center items-center mt-5 mx-auto cursor-pointer">
        <Link href={'/register'} className=" w-full text-sm text-white text-center">Register</Link>
      </div>

      <div className="flex items-center gap-2 mt-7">
        <span className="flex-1 bg-gray-500 h-px"></span>
        <p className="text-sm whitespace-nowrap">Masuk dengan email</p>
        <span className="flex-1 bg-gray-500 h-px"></span>
      </div>

      {/* Login Section */}
      <FormLogin />
    </div>
  );
}
      