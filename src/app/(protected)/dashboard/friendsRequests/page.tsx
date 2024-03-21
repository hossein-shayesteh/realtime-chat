import { auth } from "@/auth";
import FriendsRequestsList from "@/src/components/UI/dashboard/friendsRequests/FriendsRequestsList";
import fetchIncomingFriendsRequest from "@/src/helpers/fetchIncomingFriendsRequest";

const FriendsRequestsPage = async () => {
  // get session form nextAuth
  const session = await auth();

  const incomingFriendsRequest = await fetchIncomingFriendsRequest(session);

  return (
    <div className="lg:w-[500px] w-full mt-10 px-10 rounded-2xl flex justify-center flex-col">
      <h1 className={"lg:text-4xl text-3xl my-6"}>Friends request</h1>
      <p className={"my-2"}>add a user to your friends</p>
      <FriendsRequestsList incomingFriendsRequest={incomingFriendsRequest} />
    </div>
  );
};
export default FriendsRequestsPage;
