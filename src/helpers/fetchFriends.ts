import fetchRedis from "@/src/helpers/redis";

const fetchFriends = async (userId?: string) => {
  // get friends id
  const friendsId = (await fetchRedis(
    "smembers",
    `user:${userId}:friends`,
  )) as string[];

  // find the user base on id
  return (await Promise.all(
    friendsId.map(async (id) => {
      const userData = await fetchRedis("get", `user:${id}`);
      return JSON.parse(userData);
    }),
  )) as User[];
};
export default fetchFriends;
