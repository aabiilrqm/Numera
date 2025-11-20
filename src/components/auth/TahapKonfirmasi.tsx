import Link from "next/link";
import path from "path";

export default function TahapKonfirmasi({ pathName }: any) {
  return (
    <div className="mx-auto text-center mt-40 w-full">
      <p>
        Remember the password?{" "}
        <Link href={"/login"} className="text-acc">
          Login
        </Link>
      </p>

      <div className="flex justify-center items-center gap-5 mt-2 w-full">
        <span
          className={`h-2 rounded-xl w-full ${
            pathName == "/forget" ? "bg-secondary" : "bg-gray-400"
          }`}
        ></span>
        <span
          className={`h-2 rounded-xl w-full ${
            pathName == "/enter_code" ? "bg-secondary" : "bg-gray-400"
          }`}
        ></span>
        <span
          className={`h-2 rounded-xl w-full ${
            pathName == "/new_password" ? "bg-secondary" : "bg-gray-400"
          }`}
        ></span>
      </div>
    </div>
  );
}
