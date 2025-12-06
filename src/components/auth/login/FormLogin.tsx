"use client";

import { Eye, EyeClosed } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/src/lib/firebase";

export default function FormLogin() {
  const [eyeClosed, setEyeClosed] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleLogin = async () => {
    if (!email || !password) {
      alert("Email dan password harus diisi!");
      return;
    }

    setLoading(true);

    try {
      // Login Firebase
      const userCred = await signInWithEmailAndPassword(auth, email, password);

      // simpan session ke localStorage
      localStorage.setItem("user_uid", userCred.user.uid);
      localStorage.setItem("user_email", userCred.user.email || "");

      router.push("/dashboard");
    } catch (err: any) {
      alert("Login gagal: " + err.message);
      console.error("Login Error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      className="flex flex-col mt-5 gap-3"
      onSubmit={(e) => e.preventDefault()}
    >
      {/* Email */}
      <div className="flex flex-col gap-1">
        <label htmlFor="email">Email</label>

        <input
          id="email"
          type="email"
          className="w-full bg-gray-100 p-2 rounded-xl font-light text-sm focus:outline-0"
          placeholder="Masukkan email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      {/* Password */}
      <div className="flex flex-col gap-1 relative">
        <label htmlFor="password">Kata Sandi</label>

        <input
          id="password"
          type={eyeClosed ? "password" : "text"}
          className="w-full bg-gray-100 p-2 rounded-xl font-light text-sm focus:outline-0"
          placeholder="Masukkan kata sandi"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* Eye toggle */}
        <div className="absolute right-3 bottom-6 cursor-pointer">
          {eyeClosed ? (
            <EyeClosed onClick={() => setEyeClosed(false)} />
          ) : (
            <Eye onClick={() => setEyeClosed(true)} />
          )}
        </div>

        <p className="self-end text-xs text-secondary cursor-pointer">
          Lupa Kata Sandi?
        </p>
      </div>

      {/* Button Login */}
      <button
        type="button"
        className="py-1 bg-secondary text-white rounded-lg text-center mt-2"
        onClick={handleLogin}
        disabled={loading}
      >
        {loading ? "Memproses..." : "Masuk"}
      </button>
    </form>
  );
}
