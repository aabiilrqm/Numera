"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const formLabel = [
  "Nama Pemilik",
  "Email",
  "Buat kata sandi",
  "Konfirmasi kata sandi",
];

export default function IdentitasPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  useEffect(() => {
    const savedEmail = localStorage.getItem("register_email");
    if (savedEmail) setEmail(savedEmail);
  }, []);

  const handleNext = () => {
    if (password !== confirm) {
      alert("Password tidak sama");
      return;
    }

    localStorage.setItem("register_name", name);
    localStorage.setItem("register_password", password);

    router.push("/restoran");
  };

  return (
    <div className="w-full mx-auto">
      {/* UI tetap */}

      <form className="flex flex-col gap-4">
        <div>
          <p className="text-sm mb-1">Nama Pemilik</p>
          <input
            className="w-full bg-gray-100 p-2 rounded-lg text-sm"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Masukkan nama pemilik"
          />
        </div>

        <div>
          <p className="text-sm mb-1">Email</p>
          <input
            className="w-full bg-gray-100 p-2 rounded-lg text-sm"
            value={email}
            readOnly
          />
        </div>

        <div>
          <p className="text-sm mb-1">Buat kata sandi</p>
          <input
            type="password"
            className="w-full bg-gray-100 p-2 rounded-lg text-sm"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div>
          <p className="text-sm mb-1">Konfirmasi kata sandi</p>
          <input
            type="password"
            className="w-full bg-gray-100 p-2 rounded-lg text-sm"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
          />
        </div>
      </form>

      <div className="w-full flex justify-end">
        <button
          className="px-6 py-1 bg-primary text-white rounded-lg mt-2 text-sm"
          onClick={handleNext}
        >
          Selanjutnya
        </button>
      </div>
    </div>
  );
}
