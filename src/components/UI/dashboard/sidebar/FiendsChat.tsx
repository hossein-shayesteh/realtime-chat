import React from "react";
import { Avatar, Divider } from "@nextui-org/react";
import chatIdConstructor from "@/src/helpers/chatIdConstructor";
import ActiveLink from "@/src/components/UI/shared/ActiveLink";
import { fetchChatMessages } from "@/src/helpers/fetchChatMessages";
import generateChatTime from "@/src/helpers/generateChatTime";
import isPersian from "@/src/helpers/isPersian";

interface Props extends User {
  currentUserId?: string;
}

const FiendsChat = async ({ name, id, image, email, currentUserId }: Props) => {
  const chatId = chatIdConstructor(id, currentUserId);
  const messages = await fetchChatMessages(chatId);
  const lastMessages = messages.shift();
  const lastMessageTime = generateChatTime(lastMessages?.timestamp);
  const isTextPersian = isPersian(lastMessages?.text);

  return (
    <ActiveLink
      href={`/dashboard/chat/${chatId}`}
      className={`flex flex-col gap-3 pt-3 `}
      activeClassName={"bg-gray-100"}
    >
      <div className="flex gap-5 h-8 px-6">
        <Avatar
          showFallback
          radius="full"
          size="sm"
          src={image}
          className={"shrink-0"}
        />
        <div className="flex flex-col gap-1 items-start justify-center grow">
          <h4 className="text-xs font-semibold leading-none text-default-600 flex w-full justify-between">
            <div>{name}</div>
            <div>{lastMessageTime}</div>
          </h4>
          <div className={"flex justify-between items-center w-full"}>
            <div className="text-xs tracking-tight text-default-400 w-40 text-nowrap truncate">
              {currentUserId === lastMessages?.senderId && (
                <span className={"font-bold text-default-600"}>you: </span>
              )}
              <span className={`${isTextPersian && "persian-text"}`}>
                {lastMessages?.text}
              </span>
            </div>
            <div
              className={
                "text-xs bg-gray-400 text-white rounded-xl h-4 w-4 flex justify-center items-center"
              }
            >
              {/*unseen messages*/}
            </div>
          </div>
        </div>
      </div>
      <Divider className={"h-[0.5px]"} />
    </ActiveLink>
  );
};
export default FiendsChat;
