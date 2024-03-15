import React from "react";
import { signOut } from "@/auth";
import LogoutButton from "@/src/components/UI/dashboard/sidebar/LogoutButton";

const SidebarFooter = () => {
  return (
    <form
      action={async () => {
        "use server";
        await signOut({ redirectTo: "/" });
      }}
      className={"w-full"}
    >
      <LogoutButton />
    </form>
  );
};
export default SidebarFooter;
