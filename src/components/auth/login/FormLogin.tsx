import { Eye, EyeClosed } from "lucide-react";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function FormLogin() {
  const [eyeClosed, setEyeClosed] = useState(false);
  const router = useRouter();

  return (
    <form className="flex flex-col mt-5 gap-3">
      <div className="flex flex-col gap-1">
        <label htmlFor="email">Email</label>

        <input
          id="email"
          type="email"
          className="w-full bg-gray-100 p-2 rounded-xl font-light text-sm focus:outline-0"
          placeholder="Masukkan email"
        />
      </div>

      <div className="flex flex-col gap-1 relative">
        <label htmlFor="password">Kata Sandi</label>

        <input
          id="password"
          className="w-full bg-gray-100 p-2 rounded-xl font-light text-sm flex justify-between items-center focus:outline-0"
          placeholder="Masukkan kata sandi"
        />
        <div className="absolute right-3 bottom-7 cursor-pointer">
          {eyeClosed ? (
            <EyeClosed onClick={() => setEyeClosed(false)} />
          ) : (
            <Eye onClick={() => setEyeClosed(true)} />
          )}
        </div>

        <p className="self-end text-xs text-secondary">Lupa Kata Sandi?</p>
      </div>

      <button
        type="button"
        className="py-1 bg-secondary text-white rounded-lg text-center mt-2"
        onClick={() => router.push("/identitas")}
      >
        Masuk
      </button>
    </form>
  );
}
