import fetchRedis from "@/src/helpers/redis";
import { messageArrayValidation } from "@/src/lib/validation/addFriendsValidation";
import { notFound } from "next/navigation";

export const fetchChatMessages = async (chatId: string) => {
  try {
    // Fetch messages from Redis sorted set
    const results = (await fetchRedis(
      "zrange",
      `chat:${chatId}:messages`,
      0,
      -1,
    )) as string[];

    // Parse messages from Redis into Message objects
    const dbMessages = results.map((message) => JSON.parse(message) as Message);

    // Reverse the order of messages to display them chronologically
    const reverseMessages = dbMessages.reverse();

    // Validate the array of messages
    return messageArrayValidation.parse(dbMessages);
  } catch (e) {
    // If an error occurs, return a 404 Not Found response
    notFound();
  }
};
