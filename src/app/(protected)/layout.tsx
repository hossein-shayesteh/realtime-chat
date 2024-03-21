import React from "react";
import ValidateProvider from "@/src/components/ValidateProvider";
import { auth } from "@/auth";

const ProtectedLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const session = await auth();

  return (
    <>
      <ValidateProvider session={session} />
      {children}
    </>
  );
};
export default ProtectedLayout;
