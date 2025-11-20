import { Binary } from "lucide-react";

export default function HeaderEnterCode() {
  return (
    <>
      <div className="mx-auto mt-2 border w-fit p-2 rounded-xl">
        <Binary />
      </div>
      <h1 className="text-3xl font-semibold text-center">Masukkan kode</h1>

      <p className="p-1 mt-2 text-center mx-auto text-gray-400 text-sm">
        Don’t worry, your account is secure. A verification code will be sent to
        your email.
      </p>
    </>
  );
}
