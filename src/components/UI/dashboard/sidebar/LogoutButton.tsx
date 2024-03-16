"use client";
import { Button } from "@nextui-org/button";
import React from "react";
import { useFormStatus } from "react-dom";
import { LogOut } from "lucide-react";

const LogoutButton = () => {
  const { pending } = useFormStatus();

  return (
    <Button
      variant={"flat"}
      color={"danger"}
      className={"w-full"}
      type={"submit"}
      isLoading={pending}
    >
      <LogOut />
      Logout
    </Button>
  );
};
export default LogoutButton;
