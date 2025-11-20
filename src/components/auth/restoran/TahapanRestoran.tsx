import { Check } from "lucide-react";

export default function TahapanRestoran() {
  return (
    <div className="grid grid-cols-3 items-center gap-5">
      <div className="flex items-center gap-1">
        <div className="bg-acc rounded-full p-1 w-[30px] h-[30px] flex items-center justify-center text-white">
          <Check />
        </div>
        <p>Identitas</p>
      </div>

      <div>
        <div className="bg-gray-300 h-px"></div>
      </div>

      <div className="flex items-center gap-1">
        <div className="bg-third/40 rounded-full p-1 w-[30px] h-[30px] flex items-center justify-center">
          2
        </div>
        <p>Restoran</p>
      </div>
    </div>
  );
}
