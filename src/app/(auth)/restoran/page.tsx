"use client";

import { useState, ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/src/lib/supabase";
import { auth, db } from "@/src/lib/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import TahapanRestoran from "@/src/components/auth/restoran/TahapanRestoran";
import HeaderRestoran from "@/src/components/auth/restoran/HeaderRestoran";
import InformasiRestoran from "@/src/components/auth/restoran/InformasiRestoran";
import FormRestoran from "@/src/components/auth/restoran/FormRestoran";
import ButtonRestoran from "@/src/components/auth/restoran/Button";

export default function RestoranAuthPage() {
  const router = useRouter();

  // --- state (typed)
  const [image, setImage] = useState<File | null>(null);
  const [nama, setNama] = useState("");
  const [alamat, setAlamat] = useState("");
  const [wa, setWa] = useState("");
  const [loading, setLoading] = useState(false);

  // --- helper: upload ke supabase, mengembalikan public url atau null
  const uploadToSupabase = async (file: File | null) => {
    if (!file) return null;

    // buat nama file unik
    const fileName = `restoran/${Date.now()}-${file.name}`;

    const { error } = await supabase.storage
      .from("images")
      .upload(fileName, file, { cacheControl: "3600", upsert: false });

    if (error) {
      console.error("Supabase upload error:", error);
      return null;
    }

    // dapatkan public url
    const { data } = supabase.storage.from("images").getPublicUrl(fileName);
    // data mungkin undefined; guard
    return data?.publicUrl ?? null;
  };

  // --- handler submit lengkap
  const handleSubmit = async () => {
    setLoading(true);
    try {
      // baca data sementara dari localStorage
      const name = localStorage.getItem("register_name");
      const email = localStorage.getItem("register_email");
      const password = localStorage.getItem("register_password");

      // validasi wajib ada
      if (!email || !password) {
        alert(
          "Email atau password tidak ditemukan. Silakan ulang pendaftaran."
        );
        setLoading(false);
        return;
      }

      // upload gambar jika ada
      const logoUrl = await uploadToSupabase(image);

      // buat user di Firebase Auth
      const userCred = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      // simpan data user ke Firestore
      await setDoc(doc(db, "users", userCred.user.uid), {
        email,
        ownerName: name ?? null,
        restoran: {
          nama: nama || null,
          alamat: alamat || null,
          wa: wa || null,
          logo: logoUrl || null,
        },
        createdAt: new Date().toISOString(),
      });

      // bersihkan localStorage sementara
      localStorage.removeItem("register_name");
      localStorage.removeItem("register_email");
      localStorage.removeItem("register_password");

      router.push("/dashboard");
    } catch (err: any) {
      console.error("Registrasi error:", err);
      alert("Terjadi kesalahan saat mendaftar: " + (err.message ?? err));
    } finally {
      setLoading(false);
    }
  };

  // --- handler input file: aman dari 'files is possibly null'
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) {
      setImage(null);
      return;
    }
    setImage(files[0]);
  };

  return (
    <div className="w-5/6 mx-auto">
      {/* Tahapan  */}
      <TahapanRestoran />

      {/* Header */}
      <HeaderRestoran />

      <div className="w-full bg-gray-400 h-px mt-5 mb-5"></div>

      {/* Informasi Restoran (logo) */}
      <InformasiRestoran image={image} handleFileChange={handleFileChange} />

      {/* Form */}
      <FormRestoran
        nama={nama}
        setNama={setNama}
        alamat={alamat}
        setAlamat={setAlamat}
        wa={wa}
        setWa={setWa}
      />

      {/* Button */}
      <ButtonRestoran handleSubmit={handleSubmit} loading={loading} />
    </div>
  );
}
