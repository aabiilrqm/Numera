import { useRouter } from "next/navigation";
export default function ButtonRestoran({handleSubmit, loading}: any) {
  const router = useRouter();
  return (
    <div className="w-full flex justify-evenly items-center mt-4">
      <button
        className="px-6 py-1 text-black bg-primary/20 rounded-lg text-center mt-2 text-sm cursor-pointer"
        onClick={() => router.push("/identitas")}
        type="button"
      >
        Sebelumnya
      </button>

      <button
        className="px-6 py-1 bg-primary text-white rounded-lg text-center mt-2 text-sm"
        onClick={handleSubmit}
        disabled={loading}
        type="button"
      >
        {loading ? "Menyimpan..." : "Selanjutnya"}
      </button>
    </div>
  );
}
