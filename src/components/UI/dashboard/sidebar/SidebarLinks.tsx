"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Badge, Button } from "@nextui-org/react";
import { UserCheck, UserPlus } from "lucide-react";

interface SidebarLinks {
  unseenFriendsRequest: number;
}

const SidebarLinks = ({ unseenFriendsRequest }: SidebarLinks) => {
  const pathname = usePathname();

  return (
    <div className={"flex flex-col text-xl gap-2 mb-3 px-6"}>
      <Button
        as={Link}
        href={"/dashboard/addFriends"}
        color={"primary"}
        variant={"flat"}
        className={`w-full bg-primary-50 ${pathname === "/dashboard/addFriends" && "bg-[#c0dcfc] delay-150"}`}
      >
        <UserPlus />
        Add Friends
      </Button>
      {unseenFriendsRequest === 0 ? (
        <Button
          as={Link}
          href={"/dashboard/friendsRequests"}
          color={"primary"}
          variant={"flat"}
          className={`w-full bg-primary-50 ${pathname === "/dashboard/friendsRequests" && "bg-[#c0dcfc] delay-150"}`}
        >
          <UserCheck />
          Friends Requests
        </Button>
      ) : (
        <Badge
          content={unseenFriendsRequest}
          color="danger"
          shape="circle"
          placement={"top-right"}
        >
          <Button
            as={Link}
            href={"/dashboard/friendsRequests"}
            color={"primary"}
            variant={"flat"}
            className={`w-full bg-primary-50 ${pathname === "/dashboard/friendsRequests" && "bg-[#c0dcfc] delay-150"}`}
          >
            <UserCheck />
            Friends Requests
          </Button>
        </Badge>
      )}
    </div>
  );
};
export default SidebarLinks;
