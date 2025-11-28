export default function InformasiRestoran({image, handleFileChange}: any) {
  return (
    <div>
      <div>
        <h3 className="text-sm">Logo Restoran</h3>
      </div>

      <div className="flex gap-3 items-center mt-3">
        <div className="bg-gray-400 w-20 h-20 rounded-full flex items-center justify-center overflow-hidden">
          {image ? (
            // preview sederhana
            <img
              src={URL.createObjectURL(image)}
              alt="preview"
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-xs text-white">No Image</span>
          )}
        </div>

        <div>
          <label className="text-xs font-semibold px-3 py-2 bg-gray-400 text-white rounded-lg cursor-pointer">
            Pilih Gambar
            <input
              type="file"
              accept="image/png,image/jpeg"
              onChange={handleFileChange}
              className="hidden"
            />
          </label>

          <p className="text-[10px] text-gray-400 mt-2">
            PNG,JPG, atau JPEG, maks. 2MB.
          </p>
        </div>
      </div>
    </div>
  );
}
