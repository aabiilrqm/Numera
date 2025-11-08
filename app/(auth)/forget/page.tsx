import Link from "next/link";
import { KeyRound } from "lucide-react";

export default function ForgetPasswordPage() {
  return (
    <div className="w-5/6 h-[97vh] flex flex-col justify-between  py-3">
      <div>
        <div className="mx-auto mt-2 border w-fit p-2 rounded-xl">
          <KeyRound />
        </div>
        <h1 className="text-3xl font-semibold text-center">Forget Password?</h1>

        <p className="p-1 mt-2 text-center w-3/4 mx-auto font-light">
          Don’t worry, your account is secure. A verification code will be sent
          to your email.
        </p>

        {/* Login Section */}
        <div className="flex flex-col items-center mt-5 gap-2">
          <div className="w-3/4 flex flex-col gap-1">
            <h3>Email</h3>

            <input
              className="w-full bg-gray-100 p-3 rounded-xl font-light text-sm"
              placeholder="Email"
            ></input>
          </div>

          <div className="py-1 bg-secondary text-white w-1/2 rounded-2xl text-center mt-2">
            <p>Send Code</p>
          </div>
        </div>
      </div>

      <div className="mx-auto">
        <p>
          Remember the password? <Link href={"/login"}>Login</Link>
        </p>

        <div className="flex justify-center items-center gap-1 mt-2">
          <span className="h-3 w-1/2 bg-black ">-</span>
          <span className="h-3 w-1/2 bg-black ">-</span>
          <span className="h-3 w-1/2 bg-black ">-</span>
        </div>
      </div>
    </div>
  );
}
