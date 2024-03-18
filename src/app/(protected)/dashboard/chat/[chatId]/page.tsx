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
        <ChatBody
          messages={reversedInitialMessages}
          sessionId={session.user.id}
        />
      </CardBody>
      <Divider />
      <CardFooter className={"p-0"}>
        <ChatFooter />
      </CardFooter>
    </Card>
  );
};

export default Chats;

const initialMessage: Message[] = [
  {
    id: "1",
    text: "Hello, I have some issues with my account.",
    receiverId: "4061fe82-a4dd-4215-957b-ca1c656c75de", // me
    senderId: "a4c3b4b7-dc88-4a5b-8a3b-90b4ecefeae6",
    timestamp: 1710759230653,
  },

  {
    id: "2",
    text: "اگر می‌خواهید خواننده متن فارسی‌تان را کنار نگذارد و آن را تا انتها بخواهند، از ویرایش و بازخوانی متن غافل نشوید. سرویس ویرایش و بازخوانی متون فارسی شبکه مترجمین ایران این‌جا است تا متون فارسی‌تان را خوانش‌پذیر کند.اگر می‌خواهید خواننده متن فارسی‌تان را کنار نگذارد و آن را تا انتها بخواهند، از ویرایش و بازخوانی متن غافل نشوید. سرویس ویرایش و بازخوانی متون فارسی شبکه مترجمین ایران این‌جا است تا متون فارسی‌تان را خوانش‌پذیر کند.",
    receiverId: "a4c3b4b7-dc88-4a5b-8a3b-90b4ecefeae6",
    senderId: "4061fe82-a4dd-4215-957b-ca1c656c75de", // me
    timestamp: 1710759231653,
  },
  {
    id: "3",
    text: `Hello, how can I help you? ${"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium architecto consectetur deserunt, doloribus hic libero necessitatibus neque quam quas quisquam saepe sed sint veniam vitae voluptatibus. Ad consectetur dicta ducimus esse, facilis harum nesciunt officiis pariatur, possimus quaerat qui quis veniam, voluptatibus. Beatae culpa illo ipsum, nam quaerat quisquam tempore!"}`,

    receiverId: "4061fe82-a4dd-4215-957b-ca1c656c75de", // me
    senderId: "a4c3b4b7-dc88-4a5b-8a3b-90b4ecefeae6",
    timestamp: 1710759231653,
  },
  {
    id: "4",
    text: "Can you fix that for me",
    receiverId: "4061fe82-a4dd-4215-957b-ca1c656c75de", // me
    senderId: "a4c3b4b7-dc88-4a5b-8a3b-90b4ecefeae6",
    timestamp: 1710759241653,
  },
];
const reversedInitialMessages = initialMessage.reverse();
