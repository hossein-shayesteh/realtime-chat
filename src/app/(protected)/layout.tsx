import React from "react";
import ValidateProvider from "@/src/components/ValidateProvider";

const ProtectedLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <ValidateProvider />
      {children}
    </>
  );
};
export default ProtectedLayout;
