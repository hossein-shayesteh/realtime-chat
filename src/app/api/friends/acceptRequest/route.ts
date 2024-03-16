import { NextRequest, NextResponse } from "next/server";
import { stringValidation } from "@/src/lib/validation/addFriendsValidation";
import { Session } from "next-auth";
import fetchRedis from "@/src/helpers/redis";
import { db } from "@/src/lib/database/db";
import { ZodError } from "zod";
import { revalidatePath } from "next/cache";

export const POST = async (request: NextRequest, response: NextResponse) => {
  try {
    const body = await request.json();

    const { id: idToAdd } = stringValidation.parse({ id: body.id });
    const session = body.session as Session | null;

    if (!session)
      return new Response("Unauthorized user. Please log in", { status: 401 });

    //check if they are already friend
    const isAlreadyFriends = (await fetchRedis(
      "sismember",
      `user:${session.user?.id}:friends`,
      idToAdd,
    )) as 0 | 1;

    if (isAlreadyFriends)
      return new Response("You are already friends with this user", {
        status: 400,
      });

    //check if they actually send the friend request
    const isAlreadySendFriends = (await fetchRedis(
      "sismember",
      `user:${session.user?.id}:incoming_friend_requests`,
      idToAdd,
    )) as 0 | 1;

    if (!isAlreadySendFriends)
      return new Response("This user didn't sent friend request to you", {
        status: 400,
      });

    //FINALLY accept friend request :)
    await db.sadd(`user:${session.user?.id}:friends`, idToAdd);
    await db.sadd(`user:${idToAdd}:friends`, session.user?.id);
    //clear friend request
    await db.srem(`user:${session.user?.id}:incoming_friend_requests`, idToAdd);
    await db.srem(`user:${idToAdd}:incoming_friend_requests`, session.user?.id);

    return new Response("Friend has been Add successfully", {
      status: 200,
    });
  } catch (e) {
    if (e instanceof ZodError) {
      return new Response("Invalid request payload", { status: 422 });
    }

    return new Response("Invalid request", { status: 400 });
  }
};
