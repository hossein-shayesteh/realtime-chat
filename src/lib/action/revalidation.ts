"use server";
import { revalidatePath } from "next/cache";

export interface RevalidationProps {
  originalPath: string;
  type?: "layout" | "page";
}
export const revalidation = (path: RevalidationProps[]) => {
  path.forEach((href) => revalidatePath(href.originalPath, href?.type));
};
