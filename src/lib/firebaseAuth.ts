import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";

export async function loginUser(email: string, password: string) {
  try {
    const userCred = await signInWithEmailAndPassword(auth, email, password);
    return {
      uid: userCred.user.uid,
      email: userCred.user.email,
    };
  } catch (error: any) {
    throw new Error(error.message);
  }
}
