import React from "react";
import { Avatar } from "@nextui-org/react";
import { Button } from "@nextui-org/button";

const FriendsRequestsListItem = ({
  name,
  image,
}: {
  name: string;
  image: string;
}) => {
  return (
    <>
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
            <Button size={"sm"} variant={"flat"} color={"success"}>
              Confirm
            </Button>
            <Button size={"sm"} variant={"flat"} color={"danger"}>
              Delete
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FriendsRequestsListItem;
