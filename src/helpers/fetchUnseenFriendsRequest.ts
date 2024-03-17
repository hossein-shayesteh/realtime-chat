import fetchRedis from "@/src/helpers/redis";

const fetchUnseenFriendsRequest = async (userId?: string) => {
  return (await fetchRedis(
    "smembers",
    `user:${userId}:incoming_friend_requests`,
  )) as string[];
};
export default fetchUnseenFriendsRequest;
