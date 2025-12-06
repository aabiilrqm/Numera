import { useRouter } from "next/navigation";
import { useState } from "react";

export default function FormRegister() {
  const router = useRouter();
  const [email, setEmail] = useState("");

  const handleNext = () => {
    if (!email) {
      alert("Email wajib diisi");
      return;
    }

    if (!email.includes("@")) {
      alert("Email tidak valid");
      return;
    }

    localStorage.setItem("register_email", email);
    router.push("/identitas");
  };


  return (
    <form className="flex flex-col mt-5 gap-3">
      <div className="flex flex-col gap-1">
        <label htmlFor="email">Email</label>

        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full bg-gray-100 p-2 rounded-xl font-light text-sm focus:outline-0"
          placeholder="Masukkan email"
        />
      </div>

      <button
        type="button"
        className="py-1 bg-secondary text-white rounded-lg text-center mt-2"
        onClick={handleNext}
      >
        Daftar
      </button>
    </form>
  );
}
