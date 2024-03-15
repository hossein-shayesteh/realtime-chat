"use client";
import { Button } from "@nextui-org/button";
import { useFormStatus } from "react-dom";

const AddFriendsButton = () => {
  const { pending } = useFormStatus();

  return (
    <Button
      type={"submit"}
      size={"md"}
      variant={"flat"}
      isLoading={pending}
      color={"primary"}
      className={"my-2 w-36"}
    >
      add
    </Button>
  );
};
export default AddFriendsButton;
