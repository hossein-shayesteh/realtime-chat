"use server";
import { auth } from "@/auth";
import { revalidatePath } from "next/cache";

const sendMessageAction = async (formData: FormData, chatId: string) => {
  const session = await auth();
  const messageText = formData.get("message") as string;

  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"; // Replace with your base URL
    const url = new URL(`/api/message/send`, baseUrl);

    // Split the chatId into two user IDs (userId1 and userId2)
    const [userId1, userId2] = chatId.split("--");
    //find chat partner
    const chatPartnerId = session?.user?.id === userId1 ? userId2 : userId1;
    //generate date and id
    const date = new Date().getTime();

    const response = await fetch(url.toString(), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        text: messageText.trim(),
        senderId: session?.user?.id,
        receiverId: chatPartnerId,
        chatId: chatId,
      }),
    });

    // revalidatePath("/dashboard/friendsRequests");

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
export default sendMessageAction;
