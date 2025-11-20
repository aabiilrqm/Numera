"use client"
import { useRouter } from "next/navigation";

export default function LoginSection() {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="w-full flex flex-col gap-1">
        <h3>Email</h3>

        <input
          className="w-full bg-gray-100 p-3 rounded-xl font-light text-sm"
          placeholder="Email"
        ></input>
      </div>

      <div className="w-full py-1 bg-secondary text-white rounded-lg text-center mt-4">
        <button
          className="cursor-pointer"
          onClick={() => router.push("/enter_code")}
        >
          Send Code
        </button>
      </div>
    </div>
  );
}
