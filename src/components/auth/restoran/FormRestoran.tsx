
export default function FormRestoran({nama, setNama, alamat, setAlamat, wa, setWa}: any) {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="mt-4">
      <div>
        <p className="text-sm mb-1">Nama Restoran</p>
        <input
          value={nama}
          onChange={(e) => setNama(e.target.value)}
          placeholder="Masukkan Nama Restoran"
          className="w-full bg-gray-100 p-2 rounded-lg font-light text-sm focus:outline-0"
        />
      </div>

      <div>
        <p className="text-sm mb-1">Alamat Restoran</p>
        <input
          value={alamat}
          onChange={(e) => setAlamat(e.target.value)}
          placeholder="Masukkan Alamat Restoran"
          className="w-full bg-gray-100 p-2 rounded-lg font-light text-sm focus:outline-0"
        />
      </div>

      <div>
        <p className="text-sm mb-1">No Whatsapp Restoran</p>
        <input
          value={wa}
          onChange={(e) => setWa(e.target.value)}
          placeholder="Masukkan No Whatsapp Restoran"
          className="w-full bg-gray-100 p-2 rounded-lg font-light text-sm focus:outline-0"
        />
      </div>
    </form>
  );
}
