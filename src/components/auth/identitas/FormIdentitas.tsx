const formLabel = [
  "Nama Pemilik",
  "Email",
  "Buat kata sandi",
  "Konfirmasi kata sandi",
];

export default function FormIdentitas() {
  return (
    <form>
      {formLabel.map((item, index) => (
        <div key={index}>
          <p className="text-sm mb-1">{item}</p>
          <input
            id="password"
            className="w-full bg-gray-100 p-2 rounded-lg font-light text-sm flex justify-between items-center focus:outline-0"
            placeholder={`Masukkan ${item}`}
          />
        </div>
      ))}
    </form>
  );
}
