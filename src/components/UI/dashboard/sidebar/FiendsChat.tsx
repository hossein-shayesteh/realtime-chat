"use client";
import { Avatar, Divider } from "@nextui-org/react";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import chatHrefConstructor from "@/src/helpers/chatHrefConstructor";

interface Props extends User {
  currentUserId?: string;
}

const FiendsChat = ({ name, id, image, email, currentUserId }: Props) => {
  const pathname = usePathname();
  const href = chatHrefConstructor(id, currentUserId);

  return (
    <Link
      href={`/dashboard/chat/${href}`}
      className={`flex flex-col gap-3 pt-3 ${pathname === `/dashboard/chat/${href}` && "bg-gray-100"}`}
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
            <div>10:25</div>
          </h4>
          <div className={"flex justify-between items-center w-full"}>
            <div className="text-xs tracking-tight text-default-400 w-40 text-nowrap truncate">
              <span className={"font-bold text-default-600"}>you: </span>
              {email}
            </div>
            <div
              className={
                "text-xs bg-gray-400 text-white rounded-xl h-4 w-4 flex justify-center items-center"
              }
            >
              2
            </div>
          </div>
        </div>
      </div>
      <Divider className={"h-[0.5px]"} />
    </Link>
  );
};
export default FiendsChat;
