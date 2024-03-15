import React from "react";
import Sidebar from "@/src/components/UI/dashboard/sidebar/Sidebar";

const DashboardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className={"flex flex-row w-full h-screen"}>
      <Sidebar />
      <main className={"grow"}>{children}</main>
    </div>
  );
};
export default DashboardLayout;
