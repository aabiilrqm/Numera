"use client"

import Code from "@/src/components/auth/enter_code/Code";
import HeaderEnterCode from "@/src/components/auth/enter_code/Header";
import TahapKonfirmasi from "@/src/components/auth/TahapKonfirmasi";
import { Binary } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function EnterCodePage() {
  const path = usePathname()
  return (
    <div className="w-5/6 py-3 mx-auto">
      <div>
        <HeaderEnterCode />

        <div className="flex flex-col items-center mt-5 gap-2">
          <Code />

          <div className="w-full py-1 bg-secondary text-white rounded-lg text-center mt-2">
            <Link href={"/new_password"}>Enter Code</Link>
          </div>
        </div>
      </div>

      <TahapKonfirmasi pathName={path} />
    </div>
  );
}