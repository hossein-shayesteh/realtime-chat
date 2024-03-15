import { Avatar } from "@nextui-org/react";
import React from "react";
import { auth } from "@/auth";

const SidebarHeader = async () => {
  const session = await auth();
  return (
    <div className="flex gap-5">
      <Avatar
        showFallback
        isBordered
        radius="full"
        size="md"
        src={session?.user?.image || undefined}
      />
      <div className="flex flex-col gap-1 items-start justify-center">
        <h4 className="text-small font-semibold leading-none text-default-600">
          {session?.user?.name}
        </h4>
        <h5 className="text-small tracking-tight text-default-400">
          {session?.user?.email}
        </h5>
      </div>
    </div>
  );
};
export default SidebarHeader;
