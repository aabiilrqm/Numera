import { X } from "lucide-react";
import Image from "next/image";

type MenuItem = {
  src: string;
  label: string;
  harga: string;
  kategori: string[];
};

interface DetailMenuProps {
  menu: MenuItem[];
  open: boolean;
  onClose: () => void;
}

export default function DetailMenu({ menu, open, onClose }: DetailMenuProps) {
  if (!open) return null;
  return (
    <div className="bg-black/30 fixed inset-0 flex justify-end z-40">
      <div className="h-screen bg-white w-1/4">
        <div className="flex justify-between p-2">
          <h3 className="font-semibold">Detail Menu</h3>
          <X onClick={onClose} />
        </div>

        {menu.map((item, index) => (
          <div key={index} className="mt-2">
            <div>
              <Image src={item.src} width={400} height={100} alt=""></Image>

              <div className="text-[10px] flex gap-2 p-3">
                {item.kategori.map((i) => (
                  <p className="bg-third text-white p-1 rounded-sm">{i}</p>
                ))}
              </div>
            </div>

            <div className="p-2">
              <h3 className="font-semibold text-xl">{item.label}</h3>

              <p className="font-semibold text-sm">{item.harga}</p>
            </div>

            <div className="flex text-xs gap-3 justify-center mt-7">
              <div className="bg-acc text-white px-8 py-2 rounded-lg">
                Edit Menu
              </div>

              <div className="bg-gray-200 px-8 py-2 rounded-lg">
                Hapus Menu
              </div>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
}
