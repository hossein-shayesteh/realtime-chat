"use server";
import { addFriendsValidation } from "@/src/lib/validation/addFriendsValidation";
import { auth } from "@/auth";

export const addFriends = async (formData: FormData) => {
  const email = formData.get("email");
  const session = await auth();

  try {
    const validatedEmail = addFriendsValidation.parse({ email });
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"; // Replace with your base URL
    const url = new URL("/api/friends/add", baseUrl);

    await fetch(url.toString(), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: validatedEmail.email,
        id: session?.user?.id,
      }),
    }).then((response) => console.log(response));
  } catch (e) {
    console.log(e);
  }
};

// code for using useFormState
/*
const wrapAddFriends = async (
    state: { message: string | null } | undefined,
    payload: FormData,
) => {
  try {
    const result = await addFriends(payload);
    return result ? { message: result.message } : state;
  } catch (error) {
    console.error(error);
    return { message: "Something went wrong." };
  }
};
*/
