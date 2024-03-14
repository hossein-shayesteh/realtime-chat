type Commands = "zrange" | "sismember" | "get" | "smembers";

const upstashRedisRestUrl = process.env.UPSTASH_REDIS_REST_URL;
const upstashRedisRestToken = process.env.UPSTASH_REDIS_REST_TOKEN;

const fetchRedis = async (command: Commands, ...args: (string | number)[]) => {
  const commandUrl = `${upstashRedisRestUrl}/${command}/${args.join("/")}`;

  const response = await fetch(commandUrl, {
    headers: {
      Authorization: `Bearer ${upstashRedisRestToken}`,
    },
    cache: "no-store",
  });

  if (!response.ok)
    throw new Error(
      `Error while executing Redis command: ${response.statusText}`,
    );

  const data = await response.json();
  return data.result;
};
export default fetchRedis;
