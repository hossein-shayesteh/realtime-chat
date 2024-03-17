"use server";
import { signIn } from "@/auth";

const signInAction = async () => {
  await signIn("google");
};
export default signInAction;
