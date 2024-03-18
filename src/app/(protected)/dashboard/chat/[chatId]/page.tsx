import { auth } from "@/auth";
import { notFound } from "next/navigation";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
} from "@nextui-org/react";
import fetchUser from "@/src/helpers/fetchUser";
import ChatHeader from "@/src/components/UI/dashboard/chat/ChatHeader";
import ChatFooter from "@/src/components/UI/dashboard/chat/ChatFooter";
import ChatBody from "@/src/components/UI/dashboard/chat/ChatBody";
import { fetchChatMessages } from "@/src/helpers/fetchChatMessages";

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

  //find chat partner
  const chatPartnerId = session?.user?.id === userId1 ? userId2 : userId1;
  const chatPartner = await fetchUser(chatPartnerId);
  //
  const messages = await fetchChatMessages(chatId);

  return (
    <Card
      className="h-full flex grow flex-col overflow-y-auto shrink-0 border-0"
      radius={"none"}
      shadow={"none"}
    >
      <CardHeader className="flex gap-3">
        <ChatHeader {...chatPartner} />
      </CardHeader>
      <Divider />
      <CardBody className={"bg-[#74b4e0]"}>
        <ChatBody messages={messages} sessionId={session.user.id} />
      </CardBody>
      <Divider />
      <CardFooter className={"p-0"}>
        <ChatFooter chatId={chatId} />
      </CardFooter>
    </Card>
  );
};

export default Chats;
