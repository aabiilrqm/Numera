import { Binary } from "lucide-react";
import Link from "next/link";

export default function EnterCodePage() {
  return (
    <div className="w-5/6 h-[97vh] flex flex-col justify-between  py-3">
      <div>
        <div className="mx-auto mt-2 border w-fit p-2 rounded-xl">
          <Binary />
        </div>
        <h1 className="text-3xl font-semibold text-center">Masukkan kode</h1>

        <p className="p-1 mt-2 text-center w-3/4 mx-auto font-light">
          Don’t worry, your account is secure. A verification code will be sent
          to your email.
        </p>

        {/* Login Section */}
        <div className="flex flex-col items-center mt-5 gap-2">
          <div className="w-3/4 flex gap-1 justify-evenly">
            {Array(6)
              .fill(0)
              .map((_, index) => (
                <div className="p-5 border border-gray-400 rounded-sm" key={index}></div>
              ))}
          </div>

          <div className="py-1 bg-secondary text-white w-1/2 rounded-2xl text-center mt-2">
            <Link href={'/new_password'}>Enter Code</Link>
          </div>
        </div>
      </div>

      <div className="mx-auto w-1/2 text-center">
        <p>
          Remember the password? <Link href={"/login"}>Login</Link>
        </p>

        <div className="flex justify-center items-center gap-1 mt-2">
          <span className="h-2 rounded-xl bg-gray-400  w-full  "></span>
          <span className="h-2 rounded-xl bg-secondary w-full  "></span>
          <span className="h-2 rounded-xl bg-gray-400 w-full  "></span>
        </div>
      </div>
    </div>
  );
}