import { Avatar } from "@nextui-org/react";

const ChatHeader = ({ image, email, id, name }: User) => {
  return (
    <header className="flex items-center justify-between px-4 border-gray-200 bg-white">
      <div className="flex items-center gap-4">
        <Avatar size="md" src={image} />
        <div>
          <h2 className="text-lg font-bold">{name}</h2>
        </div>
      </div>
    </header>
  );
};
export default ChatHeader;
