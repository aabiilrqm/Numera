const formLabel = [
  "Nama Restoran",
  "Alamat Restoran",
  "No Whatsapp Restoran",
];

export default function FormRestoran() {
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
