import { Avatar } from "@nextui-org/react";

const ChatHeader = ({ image, email, id, name }: User) => {
  return (
    <>
      <Avatar alt="nextui logo" src={image} />
      <div className="flex flex-col">
        <p className="text-md">{name}</p>
        <p className="text-small text-default-500">{email}</p>
      </div>
    </>
  );
};
export default ChatHeader;
