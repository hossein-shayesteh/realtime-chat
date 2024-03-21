"use server";
import { revalidatePath } from "next/cache";
import { auth } from "@/auth";

const friendRequestAction = async (
  action: "deleteRequest" | "acceptRequest",
  senderId: string,
) => {
  const session = await auth();

  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"; // Replace with your base URL
    const url = new URL(`/api/friends/${action}`, baseUrl);

    const response = await fetch(url.toString(), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ session: session, id: senderId }),
    });

    const responseText = await response.text();
    const responseStatus = response.status;

    return {
      message: responseText,
      status: responseStatus,
    };
  } catch (e) {
    console.log(e);
  }
};
export default friendRequestAction;
