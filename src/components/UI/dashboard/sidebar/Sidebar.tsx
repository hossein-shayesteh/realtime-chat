import React from "react";

import { CardHeader, Card, CardBody } from "@nextui-org/react";
import SidebarLinks from "@/src/components/UI/dashboard/sidebar/SidebarLinks";
import SidebarHeader from "@/src/components/UI/dashboard/sidebar/SidebarHeader";
import { CardFooter } from "@nextui-org/card";
import SidebarChatList from "@/src/components/UI/dashboard/sidebar/SidebarChatList";
import SidebarFooter from "@/src/components/UI/dashboard/sidebar/SidebarFooter";
import { auth } from "@/auth";
import fetchRedis from "@/src/helpers/redis";

const Sidebar = async () => {
  const session = await auth();

  const unseenFriendsRequest = (
    await fetchRedis(
      "smembers",
      `user:${session?.user?.id}:incoming_friend_requests`,
    )
  ).length;

  return (
    <Card
      as={"aside"}
      className={
        "h-full flex max-w-xs grow flex-col gap-y-5 overflow-y-auto p-6 shrink-0 "
      }
    >
      <CardHeader className="justify-between">
        <SidebarHeader />
      </CardHeader>
      <SidebarLinks
        unseenFriendsRequest={unseenFriendsRequest}
        sessionId={session?.user?.id}
      />
      <CardBody>
        <SidebarChatList />
      </CardBody>
      <CardFooter>
        <SidebarFooter />
      </CardFooter>
    </Card>
  );
};
export default Sidebar;
