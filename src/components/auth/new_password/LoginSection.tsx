import Link from "next/link";

export default function LoginSection() {
  return (
    <div className="w-full flex flex-col items-center mt-5 gap-2">
      <div className="w-full flex flex-col gap-1">
        <h3>New Password</h3>

        <input
          className="w-full bg-gray-100 p-3 rounded-xl font-light text-sm"
          placeholder="New Password"
        ></input>
      </div>

      <div className="w-full flex flex-col gap-1">
        <h3>Confirm New Password</h3>

        <input
          className="w-full bg-gray-100 p-3 rounded-xl font-light text-sm"
          placeholder="Confirm New Password"
        ></input>
      </div>

      <div className="w-full py-1 bg-secondary text-white rounded-lg text-center mt-5">
        <Link href={"/login"}>Reset Password</Link>
      </div>
    </div>
  );
}