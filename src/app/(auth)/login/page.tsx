"use client";

import FormLogin from "@/src/components/auth/login/FormLogin";
export default function LoginPage() {

  return (
    <div className="w-5/6 mx-auto">
      <h1 className="text-xl font-semibold">Selamat Datang</h1>
      <h2 className="text-sm text-gray-500">
        Silahkan daftar/masuk melalui akun Google
      </h2>

      {/* Google */}
      <div className="border border-gray-500 rounded-lg p-2 flex justify-center items-center mt-5 mx-auto cursor-pointer">
        <p className="text-xs font-semibold">Lanjutkan dengan Google</p>
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
      