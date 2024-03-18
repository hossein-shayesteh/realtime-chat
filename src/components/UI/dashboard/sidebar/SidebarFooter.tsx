import React from "react";
import { signOut } from "@/auth";
import FormButton from "@/src/components/UI/shared/FormButton";
import { LogOut } from "lucide-react";
import signOutAction from "@/src/lib/action/signOutAction";

const SidebarFooter = () => {
  return (
    <form action={signOutAction} className={"w-full p-6"}>
      <FormButton
        variant={"flat"}
        color={"danger"}
        className={"w-full"}
        type={"submit"}
        hideContentOnPending
        startContent={<LogOut />}
      >
        Logout
      </FormButton>
    </form>
  );
};
export default SidebarFooter;
