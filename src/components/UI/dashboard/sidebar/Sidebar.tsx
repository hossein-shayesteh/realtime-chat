import React from "react";
import Image from "next/image";
import { CardHeader, Card, CardBody } from "@nextui-org/react";
import SidebarLinks from "@/src/components/UI/dashboard/sidebar/SidebarLinks";
import SidebarHeader from "@/src/components/UI/dashboard/sidebar/SidebarHeader";
import { CardFooter } from "@nextui-org/card";
import SidebarChatList from "@/src/components/UI/dashboard/sidebar/SidebarChatList";
import SidebarFooter from "@/src/components/UI/dashboard/sidebar/SidebarFooter";

const Sidebar = async () => {
  return (
    <Card
      as={"aside"}
      className={
        "h-full flex max-w-xs grow flex-col gap-y-5 overflow-y-auto p-6 shrink-0 "
      }
    >
      {/*<div className={"p-3 flex flex-row items-center"}>*/}
      {/*  <Image src={"/Blink.png"} alt={"Blink logo"} width={36} height={36} />*/}
      {/*  <span className={"ml-2 font-medium text-xl"}>Blink</span>*/}
      {/*</div>*/}
      <CardHeader className="justify-between">
        <SidebarHeader />
      </CardHeader>
      <SidebarLinks />
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
