"use client";
import FriendsRequestsListItem from "@/src/components/UI/dashboard/friendsRequests/FriendsRequestsListItem";
import { Session } from "next-auth";
import { useEffect } from "react";
import { pusherClient } from "@/src/lib/pusher/pusher";
import toPusherKey from "@/src/helpers/toPusherKey";
import { revalidation } from "@/src/lib/action/revalidation";

const FriendsRequestsList = ({
  incomingFriendsRequest,
  session,
}: {
  incomingFriendsRequest: User[];
  session: Session | null;
}) => {
  // Update state when new friends requests arrive or are deleted
  useEffect(() => {
    // Handler for updating incoming friends requests
    const handleUpdateIncomingFriendsRequest = () => {
      revalidation("/dashboard");
    };

    // Handler for deleting incoming friends requests
    const handleDeleteIncomingFriendsRequest = () => {
      revalidation("/dashboard");
    };

    // Subscribe to the pusher channels for incoming and deleted friends requests
    pusherClient.subscribe(
      toPusherKey(`user:${session?.user?.id}:incoming_friend_requests`),
    );
    pusherClient.bind(
      "incoming_friend_requests",
      handleUpdateIncomingFriendsRequest,
    );
    pusherClient.bind(
      "delete_friend_requests",
      handleDeleteIncomingFriendsRequest,
    );

    // Cleanup function to unsubscribe from pusher channels
    return () => {
      pusherClient.unsubscribe(
        toPusherKey(`user:${session?.user?.id}:incoming_friend_requests`),
      );
      pusherClient.unbind(
        "incoming_friend_requests",
        handleUpdateIncomingFriendsRequest,
      );
      pusherClient.unbind(
        "delete_friend_requests",
        handleDeleteIncomingFriendsRequest,
      );
    };
  }, []);

  // Render a message if there are no friends requests, otherwise render FriendsRequestsListItem components
  if (incomingFriendsRequest.length === 0)
    return (
      <div className={"text-sm text-default-600 mt-6"}>no friends request</div>
    );

  return (
    <div className={"mt-6 flex flex-col gap-2"}>
      {incomingFriendsRequest.map((user) => (
        <FriendsRequestsListItem
          name={user.name}
          image={user.image}
          key={user.id}
          id={user.id}
          email={user.email}
        />
      ))}
    </div>
  );
};
export default FriendsRequestsList;
