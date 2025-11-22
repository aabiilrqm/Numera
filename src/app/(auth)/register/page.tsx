"use client";

import FormRegister from "@/src/components/auth/register/FormRegister";

export default function RegisterPage() {
  return (
    <div className="w-5/6 mx-auto">
      <h1 className="text-xl font-semibold">Selamat Datang</h1>
      <h2 className="text-sm text-gray-500">Silahkan daftarkan akun anda</h2>

      <div className="flex items-center gap-2 mt-7">
        <span className="flex-1 bg-gray-500 h-px"></span>
        <p className="text-sm whitespace-nowrap">Masuk dengan email</p>
        <span className="flex-1 bg-gray-500 h-px"></span>
      </div>

      {/* Login Section */}
      <FormRegister />
    </div>
  );
}
