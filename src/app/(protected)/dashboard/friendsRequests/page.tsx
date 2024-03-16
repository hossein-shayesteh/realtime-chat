import fetchRedis from "@/src/helpers/redis";
import { auth } from "@/auth";
import FriendsRequestsList from "@/src/components/UI/dashboard/friendsRequests/FriendsRequestsList";

const FriendsRequestsPage = async () => {
  // get session form nextAuth
  const session = await auth();

  // find out who senders id
  const incomingSendersId = (await fetchRedis(
    "smembers",
    `user:${session?.user?.id}:incoming_friend_requests`,
  )) as string[];

  // find the user base on id
  const incomingFriendsRequest = await Promise.all(
    incomingSendersId.map(async (senderId) => {
      const userData = await fetchRedis("get", `user:${senderId}`);
      return JSON.parse(userData);
    }),
  );
  console.log(incomingFriendsRequest);
  return (
    <div className="lg:w-[500px] w-full mt-10 px-10 rounded-2xl flex justify-center flex-col">
      <h1 className={"lg:text-4xl text-3xl my-6"}>Friends request</h1>
      <p className={"my-2"}>add a user to your friends</p>
      <FriendsRequestsList incomingFriendsRequest={incomingFriendsRequest} />
    </div>
  );
};
export default FriendsRequestsPage;
