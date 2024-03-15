"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Badge, Button } from "@nextui-org/react";

const SidebarLinks = () => {
  const pathname = usePathname();

  return (
    <div className={"flex flex-col text-xl gap-2 -my-3"}>
      <Button
        as={Link}
        href={"/dashboard/addFriends"}
        color={"primary"}
        variant={"flat"}
        className={`w-full bg-primary-50 ${pathname === "/dashboard/addFriends" && "bg-[#c0dcfc] delay-150"}`}
      >
        <Image
          src={"/add-friends.png"}
          alt={"Add Friends icon"}
          width={24}
          height={24}
        />
        Add Friends
      </Button>
      <Badge content="5" color="danger" shape="circle" placement={"top-right"}>
        <Button
          as={Link}
          href={"/dashboard/friendsRequests"}
          color={"primary"}
          variant={"flat"}
          className={`w-full bg-primary-50 ${pathname === "/dashboard/friendsRequests" && "bg-[#c0dcfc] delay-150"}`}
        >
          <Image
            src={"/friends-request.png"}
            alt={"Friends Requests icon"}
            width={24}
            height={24}
          />
          Friends Requests
        </Button>
      </Badge>
    </div>
  );
};
export default SidebarLinks;
