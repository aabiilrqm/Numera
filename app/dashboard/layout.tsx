import Image from "next/image";
import {
  House,
  ChefHat,
  ChartNoAxesCombined,
  User,
  Settings,
} from "lucide-react";

const menuItems = [
  { icon: <House />, label: "Beranda" },
  { icon: <ChefHat />, label: "Menu" },
  { icon: <ChartNoAxesCombined />, label: "Laporan" },
  { icon: <User />, label: "Pengguna" },
  { icon: <Settings />, label: "Pengaturan" },
];

export default function LayoutAuth({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <div className="w-1/8 h-screen bg-primary flex flex-col items-center">
        <div>
          <Image
            src={"/numera-logo.png"}
            width={300}
            height={300}
            alt="numera-logo"
          />
        </div>

        <div className="text-white flex-1 flex flex-col justify-center">
          <ul className="flex flex-col gap-8">
            {menuItems.map((item, index) => {
              return (
                <li key={index} className="p-0.5 flex flex-col items-center hover:bg-white rounded-lg hover:text-primary cursor-pointer transition-all">
                  {item.icon}
                  {item.label}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="flex flex-col w-full">
        <div className="p-2 flex justify-end border-b border-gray-300 shadow-sm">
          <div className="p-7 bg-gray-400 rounded-full">
            
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}
