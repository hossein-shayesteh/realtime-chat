import { Avatar, Divider } from "@nextui-org/react";
import React from "react";

const FiendsChat = () => {
  return (
    <>
      <div className="flex gap-5 h-8">
        <Avatar
          showFallback
          radius="full"
          size="sm"
          src={undefined}
          className={"shrink-0"}
        />
        <div className="flex flex-col gap-1 items-start justify-center grow">
          <h4 className="text-xs font-semibold leading-none text-default-600 flex w-full justify-between">
            <div>Hossein</div>
            <div>10:25</div>
          </h4>
          <div className={"flex justify-between items-center w-full"}>
            <div className="text-xs tracking-tight text-default-400 w-40 overflow-hidden text-ellipsis text-nowrap">
              <span className={"font-bold text-default-600"}>you: </span>
              message preview message previewmessage previewmessage preview
            </div>
            <div
              className={
                "text-xs bg-gray-400 text-white rounded-xl h-4 w-4 flex justify-center items-center"
              }
            >
              2
            </div>
          </div>
        </div>
      </div>
      <Divider className={"h-[0.5px]"} />
    </>
  );
};
export default FiendsChat;