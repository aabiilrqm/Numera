import Image from "next/image";

export default function LayoutAuth({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-center p-2 gap-4 min-h-screen bg-[#f6f6f6]">
      <div className="w-2/3 p-2 rounded-sm bg-white flex justify-evenly">
        <div className="w-full p-2 text">{children}</div>

        <div className="w-full">
          <div className=" bg-primary rounded-xl h-full">
            {/* <Image src={'/numera-logo.png'} width={200} height={100} alt="Numera logo" /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
