"use client";
import { useFormState } from "react-dom";
import { Chip, Input } from "@nextui-org/react";
import AddFriendsButton from "@/src/components/UI/dashboard/addFriends/addFriendsButton";
import { addFriends } from "@/src/lib/action/addFriends";

const AddFriendsPage = () => {
  const [state, formAction] = useFormState(addFriends, { message: "" });

  return (
    <div className="lg:w-[500px] w-full mt-10 px-10 rounded-2xl flex justify-center flex-col">
      <h1 className={"lg:text-4xl text-3xl my-6"}>Add a friend</h1>
      <p className={"my-2"}>add a friend with Email</p>
      <form action={formAction}>
        <Input
          required
          name={"email"}
          size={"lg"}
          type="email"
          label="Email"
          variant={"underlined"}
          isClearable
          className={"my-2"}
          errorMessage={
            state && state.status !== 200 ? state.message : undefined
          }
        />
        <AddFriendsButton />
      </form>
      {state && state.status === 200 && (
        <Chip color="success" className={"text-white"}>
          {state.message}
        </Chip>
      )}
    </div>
  );
};
export default AddFriendsPage;