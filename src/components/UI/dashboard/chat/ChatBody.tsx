import { Avatar, Card } from "@nextui-org/react";
import generateChatTime from "@/src/helpers/generateChatTime";
import isPersian from "@/src/helpers/isPersian";

interface Props {
  messages: Message[];
  sessionId?: string;
}

const ChatBody = ({ messages, sessionId }: Props) => {
  return (
    <main className="flex flex-col-reverse flex-grow overflow-y-auto p-4 gap-4">
      {messages.map((message) => {
        const isCurrentUser = message.senderId === sessionId;
        const time = generateChatTime(message.timestamp);
        const isTextPersian = isPersian(message.text);

        return (
          <div
            className={`flex items-end gap-2  ${isCurrentUser ? "justify-end ml-10" : "mr-10"}`}
            key={message.id}
          >
            <Card
              className={`p-2 flex flex-col max-w-unit-9xl  ${isTextPersian && " text-right persian-text"}  ${isCurrentUser && "bg-primary-100"}`}
            >
              <p>{message.text}</p>
              <p className={"flex text-xs justify-end text-default-500"}>
                {time}
              </p>
            </Card>
          </div>
        );
      })}
    </main>
  );
};
export default ChatBody;
