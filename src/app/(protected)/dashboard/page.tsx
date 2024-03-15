import { Chip } from "@nextui-org/react";

const Dashboard = () => {
  return (
    <div className={"w-full h-full flex justify-center items-center"}>
      <Chip color="default" className={"flex justify-center items-center"}>
        Select a chat to start messaging
      </Chip>
    </div>
  );
};
export default Dashboard;
