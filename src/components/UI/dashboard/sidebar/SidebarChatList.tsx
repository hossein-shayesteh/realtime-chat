import React from "react";
import FiendsChat from "@/src/components/UI/dashboard/sidebar/FiendsChat";

interface Props {
  friends: User[];
  currentUserId?: string;
}

const SidebarChatList = ({ friends, currentUserId }: Props) => {
  return (
    <div className={""}>
      {friends.map((user) => (
        <FiendsChat key={user.id} {...user} currentUserId={currentUserId} />
      ))}
    </div>
  );
};
export default SidebarChatList;
