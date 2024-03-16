import FriendsRequestsListItem from "@/src/components/UI/dashboard/friendsRequests/FriendsRequestsListItem";

const FriendsRequestsList = ({
  incomingFriendsRequest,
}: {
  incomingFriendsRequest: User[];
}) => {
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
        />
      ))}
    </div>
  );
};
export default FriendsRequestsList;
