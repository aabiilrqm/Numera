"use client"

import { Eye } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
export default function LoginPage() {

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("sudah submit")
  }

  return (
    <div className="w-5/6">
      <h1 className="text-3xl font-semibold text-center">Welcome</h1>

      <h2 className="text-center mt-10 text-lg">Log in with Email</h2>

      {/* Login Section */}
      <form className="flex flex-col items-center mt-5 gap-1" onSubmit={(e) => handleSubmit(e)}>
        <div className="w-3/4 flex flex-col gap-1">
          <p>Email</p>

          <input
            type="email"
            className="w-full bg-gray-100 p-2 rounded-xl font-light text-sm focus:outline-0"
            placeholder="Email"
          />
        </div>

        <div className="w-3/4 flex flex-col gap-1 relative">
          <p>Password</p>

          <input
            className="w-full bg-gray-100 p-2 rounded-xl font-light text-sm flex justify-between items-center"
            placeholder="Password"
          />
          <Eye className="absolute right-3 bottom-7" />

          <p className="self-end text-xs text-secondary">Lupa password?</p>
        </div>

        <button className="py-1 bg-secondary text-white w-1/2 rounded-2xl text-center mt-2">
          Login
        </button>
      </form>

      {/* Login with google or any */}
      <div className="w-5/6 mt-5 mx-auto">
        <div className="flex justify-center items-center gap-1">
          <span className="bg-gray-500 w-1/3 h-0.5"></span>
          <p className="text-xl">Or</p>
          <span className="bg-gray-500 w-1/3 h-0.5"></span>
        </div>

        {/* Google */}
        <div className=" w-4/5 border border-gray-500 rounded-lg p-2 flex justify-center items-center mt-5 mx-auto">
          <p className="text-xs">Continue With Google</p>
        </div>

        {/* Apple */}
        <div className=" w-4/5 border border-gray-500 rounded-lg p-2 flex justify-center items-center mt-5 mx-auto">
          <p className="text-xs">Continue With Apple</p>
        </div>
      </div>

      <div className="text-center mt-10 text-sm">
        <p>
          Dont have an account?{" "}
          <Link href={"/register"} className="text-secondary font-semibold">
            Sign up here
          </Link>
        </p>
      </div>
    </div>
  );
}
