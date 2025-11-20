import { KeyRound } from "lucide-react";

export default function Header() {
  return (
    <>
      <div className="mx-auto mt-2 border w-fit p-2 rounded-xl">
        <KeyRound />
      </div>
      <h1 className="text-xl font-semibold text-center">Forgot Password?</h1>

      <p className="p-1 mt-2 text-center mx-auto text-sm text-gray-400">
        Don’t worry, your account is secure. A verification code will be sent to
        your email.
      </p>
    </>
  );
}