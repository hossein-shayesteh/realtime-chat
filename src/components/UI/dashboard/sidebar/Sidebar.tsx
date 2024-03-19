import React from "react";

import { CardHeader, Card, CardBody } from "@nextui-org/react";
import SidebarLinks from "@/src/components/UI/dashboard/sidebar/SidebarLinks";
import SidebarHeader from "@/src/components/UI/dashboard/sidebar/SidebarHeader";
import { CardFooter } from "@nextui-org/card";
import SidebarChatList from "@/src/components/UI/dashboard/sidebar/SidebarChatList";
import SidebarFooter from "@/src/components/UI/dashboard/sidebar/SidebarFooter";
import { auth } from "@/auth";
import fetchFriends from "@/src/helpers/fetchFriends";
import fetchUnseenFriendsRequest from "@/src/helpers/fetchUnseenFriendsRequest";

const Sidebar = async () => {
  const session = await auth();

  // fetch unseen Friends Request
  const unseenFriendsRequest = await fetchUnseenFriendsRequest(
    session?.user?.id,
  );

  //fetch friends list
  const friends = await fetchFriends(session?.user?.id);

  return (
    <Card
      radius={"none"}
      as={"aside"}
      className={
        "h-full flex max-w-xs grow flex-col  overflow-y-auto shrink-0 z-10 "
      }
    >
      <CardHeader className="justify-between">
        <SidebarHeader />
      </CardHeader>
      <SidebarLinks
        unseenFriendsRequest={unseenFriendsRequest.length}
        session={session}
      />
      <CardBody className={"p-0 border"}>
        <SidebarChatList friends={friends} currentUserId={session?.user?.id} />
      </CardBody>
      <CardFooter className={"p-0"}>
        <SidebarFooter />
      </CardFooter>
    </Card>
  );
};
export default Sidebar;
