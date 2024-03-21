import FriendsRequestsListItem from "@/src/components/UI/dashboard/friendsRequests/FriendsRequestsListItem";
import { Session } from "next-auth";

const FriendsRequestsList = ({
  incomingFriendsRequest,
}: {
  incomingFriendsRequest: User[];
}) => {
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
