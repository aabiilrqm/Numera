export default function InformasiRestoran() {
  return (
    <div>
      <div>
        <h3 className="text-sm">Logo Restoran</h3>
      </div>

      <div className="flex gap-3 items-center mt-3">
        <div className="bg-gray-400 w-20 h-20 rounded-full"></div>

        <div>
          <button className="text-xs font-semibold px-3 py-2 bg-gray-400 text-white rounded-lg">
            Pilih Gambar
          </button>

          <p className="text-[10px] text-gray-400 mt-2">
            PNG,JPG, atau JPEG, maks. 2MB.
          </p>
        </div>
      </div>
    </div>
  );
}
