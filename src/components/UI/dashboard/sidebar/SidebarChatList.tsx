import React from "react";
import { Avatar, Divider } from "@nextui-org/react";
import FiendsChat from "@/src/components/UI/dashboard/sidebar/FiendsChat";

const SidebarChatList = () => {
  return (
    <>
      <Divider className={"w-full my-2 "} />
      <div className={"text-xs ml-[-8px] mb-2"}>Your chats</div>
      <div className={"flex flex-col gap-3"}>
        <FiendsChat />
        <FiendsChat />
        <FiendsChat />
        <FiendsChat />
      </div>
    </>
  );
};
export default SidebarChatList;
