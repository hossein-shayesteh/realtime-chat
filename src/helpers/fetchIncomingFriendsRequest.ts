import fetchRedis from "@/src/helpers/redis";
import { Session } from "next-auth";

const fetchIncomingFriendsRequest = async (session: Session | null) => {
  // find out who senders id
  const incomingSendersId = (await fetchRedis(
    "smembers",
    `user:${session?.user?.id}:incoming_friend_requests`,
  )) as string[];

  // find the user base on id
  return (await Promise.all(
    incomingSendersId.map(async (senderId) => {
      const userData = await fetchRedis("get", `user:${senderId}`);
      return JSON.parse(userData);
    }),
  )) as User[];
};
export default fetchIncomingFriendsRequest;
