"use client";
import React from "react";
import { ButtonProps } from "@nextui-org/button";
import { Button } from "@nextui-org/react";
import { useFormStatus } from "react-dom";

interface FormButtonProps extends ButtonProps {
  children?: React.ReactNode;
  hideContentOnPending?: boolean;
  hideChildrenOnPending?: boolean;
}

const FormButton: React.FC<FormButtonProps> = (props) => {
  const { pending } = useFormStatus();

  return (
    <Button
      {...props}
      isLoading={pending}
      endContent={
        props.hideContentOnPending && pending ? false : props.endContent
      }
      startContent={
        props.hideContentOnPending && pending ? false : props.startContent
      }
    >
      {props.hideChildrenOnPending && pending ? undefined : props.children}
    </Button>
  );
};

export default FormButton;
