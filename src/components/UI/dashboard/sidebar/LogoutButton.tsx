"use client";
import Image from "next/image";
import { Button } from "@nextui-org/button";
import React from "react";
import { useFormStatus } from "react-dom";

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
      <Image
        src={"/logout-icon.png"}
        alt={"Logout icon"}
        width={24}
        height={24}
      />
      Logout
    </Button>
  );
};
export default LogoutButton;
