import fetchRedis from "@/src/helpers/redis";

const fetchUser = async (userId: string) => {
  const userData = await fetchRedis("get", `user:${userId}`);
  return JSON.parse(userData) as User;
};
export default fetchUser;
