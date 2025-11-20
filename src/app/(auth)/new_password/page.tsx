"use client"

import { LockKeyholeOpen } from "lucide-react";
import LoginSection from "@/src/components/auth/new_password/LoginSection";
import { usePathname } from "next/navigation";
import TahapKonfirmasi from "@/src/components/auth/TahapKonfirmasi";

export default function ForgetPasswordPage() {
  const pathName = usePathname();

  return (
    <div className="w-5/6 mx-auto py-3">

      <div>
        <div className="mx-auto mt-2 border w-fit p-2 rounded-xl">
          <LockKeyholeOpen />
        </div>
        <h1 className="text-3xl font-semibold text-center">New Password</h1>

        {/* Login Section */}
        <LoginSection />
      </div>

      <TahapKonfirmasi pathName={pathName} />
    </div>
  );
}
