"use server";
import { addFriendsValidation } from "@/src/lib/validation/addFriendsValidation";
import { auth } from "@/auth";
import { ZodError } from "zod";

export const addFriends = async (
  prevState: { message: string } | undefined,
  formData: FormData,
) => {
  const email = formData.get("email");
  const session = await auth();

  try {
    const validatedEmail = addFriendsValidation.parse({ email });
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"; // Replace with your base URL
    const url = new URL("/api/friends/add", baseUrl);

    const response = await fetch(url.toString(), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: validatedEmail.email,
        id: session?.user?.id,
      }),
    });

    const responseText = await response.text();
    const responseStatus = response.status;
    return {
      message: responseText,
      status: responseStatus,
    };
  } catch (e) {
    if (e instanceof ZodError) return { message: e.issues[0].message };
  }
};
