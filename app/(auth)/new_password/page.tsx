import Link from "next/link";
import { LockKeyholeOpen } from "lucide-react";

export default function ForgetPasswordPage() {
  return (
    <div className="w-5/6 h-[97vh] flex flex-col justify-between  py-3">
      <div>
        <div className="mx-auto mt-2 border w-fit p-2 rounded-xl">
          <LockKeyholeOpen />
        </div>
        <h1 className="text-3xl font-semibold text-center">New Password</h1>


        {/* Login Section */}
        <div className="flex flex-col items-center mt-5 gap-2">
          <div className="w-3/4 flex flex-col gap-1">
            <h3>New Password</h3>

            <input
              className="w-full bg-gray-100 p-3 rounded-xl font-light text-sm"
              placeholder="New Password"
            ></input>
          </div>

          <div className="w-3/4 flex flex-col gap-1">
            <h3>Confirm New Password</h3>

            <input
              className="w-full bg-gray-100 p-3 rounded-xl font-light text-sm"
              placeholder="Confirm New Password"
            ></input>
          </div>

          <div className="py-1 bg-secondary text-white w-1/2 rounded-2xl text-center mt-10">
            <Link href={"/login"}>Reset Password</Link>
          </div>
        </div>
      </div>

      <div className="mx-auto w-1/2 text-center">
        <p>
          Remember the password? <Link href={"/login"}>Login</Link>
        </p>

        <div className="flex justify-center items-center gap-1 mt-2">
          <span className="h-2 rounded-xl bg-gray-400  w-full  "></span>
          <span className="h-2 rounded-xl bg-gray-400 w-full  "></span>
          <span className="h-2 rounded-xl bg-secondary w-full  "></span>
        </div>
      </div>
    </div>
  );
}
