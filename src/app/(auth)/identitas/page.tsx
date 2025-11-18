import FormIdentitas from "@/src/components/auth/identitas/FormIdentitas";
export default function RegisterPage() {
  return (
    <div className="w-5/6 mx-auto">
      {/* Tahapan */}
      <div className="grid grid-cols-3 items-center gap-5">
        <div className="flex items-center gap-1">
          <div className="bg-third rounded-full p-1 w-[30px] h-[30px] flex items-center justify-center">
            <p>1</p>
          </div>
          <p>Identitas</p>
        </div>

        <div>
          <div className="bg-gray-300 h-px"></div>
        </div>

        <div className="flex items-center gap-1">
          <div className="border border-gray-300 rounded-full p-1 w-[30px] h-[30px] flex items-center justify-center">
            2
          </div>
          <p>Restoran</p>
        </div>
      </div>

      {/* Header */}
      <div className="mt-5">
        <h2 className="text-xl font-semibold">Identitas Pemilik</h2>
        <p className="text-xs text-gray-400">
          Harap masukkan identitas yang sesuai
        </p>
      </div>

      {/* Pembatas */}
      <div className="w-full bg-gray-400 h-px mt-5"></div>

      {/* Form */}
      <FormIdentitas />

      {/* Button */}
      <div className="w-full flex justify-end items-center">
        <button className="px-6 py-1 bg-acc text-white rounded-lg text-center mt-2 text-sm">
          Selanjutnya
        </button>
      </div>
    </div>
  );
}
