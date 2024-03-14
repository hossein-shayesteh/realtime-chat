import { Input } from "@nextui-org/react";
import AddFriendsButton from "@/src/components/UI/addFriends/addFriendsButton";
import { addFriends } from "@/src/lib/action/addFriends";

const AddFriendsPage = () => {
  return (
    <div className="lg:w-[500px] w-full mt-10 px-10 rounded-2xl flex justify-center flex-col">
      <h1 className={"lg:text-4xl text-3xl my-6"}>Add a friend</h1>
      <p className={"my-2"}>add a friend with Email</p>
      <form action={addFriends}>
        <Input
          required
          name={"email"}
          size={"lg"}
          type="email"
          label="Email"
          isClearable
          className={"my-2"}
          variant={"underlined"}
        />
        <AddFriendsButton />
      </form>
    </div>
  );
};
export default AddFriendsPage;
