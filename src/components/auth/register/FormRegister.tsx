import { useRouter } from "next/navigation";
export default function FormLogin() {
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

      <button
        type="button"
        className="py-1 bg-secondary text-white rounded-lg text-center mt-2"
        onClick={() => router.push("/identitas")}
      >
        Daftar
      </button>
    </form>
  );
}
