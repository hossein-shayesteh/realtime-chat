"use server";
import { revalidatePath } from "next/cache";

export const revalidation = (path: string) => {
  revalidatePath(path);
};
