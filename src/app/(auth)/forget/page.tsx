"use client";
import { usePathname } from "next/navigation";
import TahapKonfirmasi from "@/src/components/auth/TahapKonfirmasi";
import LoginSection from "@/src/components/auth/forget/LoginSection";
import Header from "@/src/components/auth/forget/Header";

export default function ForgetPasswordPage() {
  const path = usePathname();
  return (
    <div className="flex flex-col justify-between py-3 px-8">
      <div>
        <Header />
        {/* Login Section */}
        <LoginSection /> 
      </div>

      <TahapKonfirmasi pathName={path} />
    </div>
  );
}
