import { Eye } from "lucide-react";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="w-5/6 h-[97vh] ">
      <h1 className="text-3xl font-semibold text-center">Create Account</h1>

      {/* Login Section */}
      <div className="flex flex-col items-center mt-5 gap-2">
        <div className="w-3/4 flex flex-col gap-1">
          <h3>Fullname</h3>

          <input
            className="w-full bg-gray-100 p-3 rounded-xl font-light text-sm"
            placeholder="Fullname"
          ></input>
        </div>

        <div className="w-3/4 flex flex-col gap-1">
          <h3>Email</h3>

          <input className="w-full bg-gray-100 p-3 rounded-xl font-light text-sm" placeholder="Email">
          </input>
        </div>

        <div className="w-3/4 flex flex-col gap-1">
          <h3>Password</h3>

          <input className="w-full bg-gray-100 p-3 rounded-xl font-light text-sm flex justify-between items-center" placeholder="Password">
          </input>
            <Eye />
        </div>

        <div className="py-1 bg-secondary text-white w-1/2 rounded-2xl text-center mt-2">
          <p>Register</p>
        </div>
      </div>

      {/* Login with google or any */}
      <div className="w-5/6 mt-7 mx-auto">
        <div className="flex justify-center items-center gap-1">
          <span className="bg-gray-500 w-1/3 h-0.5"></span>
          <p className="text-xl">Or</p>
          <span className="bg-gray-500 w-1/3 h-0.5"></span>
        </div>

        {/* Google */}
        <div className=" w-4/5 border border-gray-500 rounded-lg p-2 flex justify-center items-center mt-5 mx-auto">
          <p className="text-xs">Sign Up With Google</p>
        </div>

        {/* Apple */}
        <div className=" w-4/5 border border-gray-500 rounded-lg p-2 flex justify-center items-center mt-5 mx-auto">
          <p className="text-xs">Sign Up With Apple</p>
        </div>
      </div>

      <div className="text-center mt-5 text-sm">
        <p>
          Already Have an Account?{" "}
          <Link href={"/login"} className="text-secondary font-semibold">
            Log in here
          </Link>
        </p>
      </div>
    </div>
  );
}
