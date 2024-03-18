"use client";
import { Textarea } from "@nextui-org/react";
import React, { useRef } from "react";
import FormButton from "@/src/components/UI/shared/FormButton";
import sendMessageAction from "@/src/lib/action/sendMessageAction";

const ChatFooter = ({ chatId }: { chatId: string }) => {
  const ref = useRef<HTMLFormElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handlePressEnter = (
    e: React.KeyboardEvent<HTMLInputElement> | KeyboardEvent,
  ) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      ref.current?.requestSubmit();
    }
  };

  return (
    <footer className="p-4 bg-white w-full">
      <form
        className={"flex items-center gap-2 "}
        action={async (formData) => {
          if (textareaRef?.current?.value.trim().length !== 0) {
            await sendMessageAction(formData, chatId);
            ref.current?.reset();
          }
        }}
        ref={ref}
      >
        <Textarea
          className="flex-grow"
          variant={"faded"}
          placeholder="Type your message"
          minRows={1}
          maxRows={4}
          name={"message"}
          onKeyDown={handlePressEnter}
          ref={textareaRef}
        />

        <FormButton variant={"flat"} type={"submit"} hideChildrenOnPending>
          Send
        </FormButton>
      </form>
    </footer>
  );
};
export default ChatFooter;
