import { auth } from "@/auth";
import { notFound } from "next/navigation";

interface PageProps {
  params: { chatId: string };
}

const Chats = async ({ params: { chatId } }: PageProps) => {
  // Authenticate the user
  const session = await auth();

  // Split the chatId into two user IDs (userId1 and userId2)
  const [userId1, userId2] = chatId.split("--");

  // Check if the current user is authorized to access this chat
  if (session?.user?.id !== userId1 && session?.user?.id !== userId2) {
    // If not authorized, display a 404 Not Found page
    notFound();
  }
  console.log(userId1, userId2);
  return <div></div>;
};

export default Chats;
