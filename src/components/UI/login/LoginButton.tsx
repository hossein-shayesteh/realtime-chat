"use client";
import { useFormStatus } from "react-dom";
import { Image, Button } from "@nextui-org/react";

const LoginButton = () => {
  const { pending } = useFormStatus();

  return (
    <Button
      color={"primary"}
      variant={"flat"}
      type={"submit"}
      fullWidth
      isLoading={pending}
      endContent={
        <Image
          alt="Google logo"
          height={25}
          src="/google-logo.svg"
          width={25}
        ></Image>
      }
    >
      Google
    </Button>
  );
};
export default LoginButton;
