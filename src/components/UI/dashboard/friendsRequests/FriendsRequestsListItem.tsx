import React from "react";
import { Avatar } from "@nextui-org/react";
import { Check, X } from "lucide-react";
import friendRequestAction from "@/src/lib/action/friendRequestAction";
import FormButton from "@/src/components/UI/shared/FormButton";

const FriendsRequestsListItem = ({
  name,
  image,
  id,
}: {
  name: string;
  image: string;
  id: string;
}) => {
  const acceptRequest = friendRequestAction.bind(null, "acceptRequest", id);
  const deleteRequest = friendRequestAction.bind(null, "deleteRequest", id);

  return (
    <div className="flex gap-5 h-8">
      <Avatar
        showFallback
        radius="full"
        size="md"
        src={image}
        className={"shrink-0"}
      />
      <div className="flex gap-1 justify-center items-center grow">
        <h4 className="text-sm font-semibold leading-none text-default-600 flex w-full justify-between">
          <div>{name}</div>
        </h4>
        <div className={"flex flex-row gap-1"}>
          <form action={acceptRequest}>
            <FormButton
              size={"sm"}
              variant={"flat"}
              color={"success"}
              type={"submit"}
              className={"w-24"}
              hideContentOnPending
              startContent={<Check />}
            >
              Confirm
            </FormButton>
          </form>
          <form action={deleteRequest}>
            <FormButton
              size={"sm"}
              variant={"flat"}
              color={"danger"}
              type={"submit"}
              className={"w-24"}
              hideContentOnPending
              startContent={<X />}
            >
              Delete
            </FormButton>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FriendsRequestsListItem;
