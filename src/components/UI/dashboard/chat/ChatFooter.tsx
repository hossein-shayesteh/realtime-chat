import { Button, Input } from "@nextui-org/react";

const ChatFooter = () => {
  return (
    <footer className="p-4 bg-white w-full">
      <div className="flex items-center gap-2">
        <Input
          className="flex-grow"
          variant={"faded"}
          placeholder="Type your message"
        />
        <Button variant={"flat"}>Send</Button>
      </div>
    </footer>
  );
};
export default ChatFooter;
