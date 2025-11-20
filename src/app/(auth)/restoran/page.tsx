"use client";
import FormRestoran from "@/src/components/auth/restoran/FormRestoran";
import TahapanRestoran from "@/src/components/auth/restoran/TahapanRestoran";
import InformasiRestoran from "@/src/components/auth/restoran/InformasiRestoran";
import ButtonRestoran from "@/src/components/auth/restoran/Button";
import HeaderRestoran from "@/src/components/auth/restoran/HeaderRestoran";
export default function RestoranAuthPage() {
  return (
    <div className="w-5/6 mx-auto">
      {/* Tahapan */}
      <TahapanRestoran />

      {/* Header */}
      <HeaderRestoran />

      {/* Pembatas */}
      <div className="w-full bg-gray-400 h-px mt-5 mb-5"></div>

      {/* Informasi Restoran */}
      <InformasiRestoran />

      {/* Form */}
      <FormRestoran />

      {/* Button */}
      <ButtonRestoran />
    </div>
  );
}
