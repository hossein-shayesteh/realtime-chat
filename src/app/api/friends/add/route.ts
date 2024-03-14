import { addFriendsValidation } from "@/src/lib/validation/addFriendsValidation";
import { NextRequest, NextResponse } from "next/server";
import fetchRedis from "@/src/helpers/redis";
import { db } from "@/src/lib/database/db";
import { ZodError } from "zod";

export const POST = async (request: NextRequest, response: NextResponse) => {
  try {
    const body = await request.json();
    const { email } = addFriendsValidation.parse({ email: body.email });
    const currentUserId = body.id;
    // connect to database with REST API
    const RESTResponse = await fetch(
      `${process.env.UPSTASH_REDIS_REST_URL}/get/user:email:${email}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.UPSTASH_REDIS_REST_TOKEN}`,
        },
        cache: "no-store",
      },
    );

    // finally getting the id
    const { result: idToAdd } = (await RESTResponse.json()) as {
      result: string | null;
    };

    //response base on the currentUseId and idToAdd
    if (!idToAdd)
      return new Response("This user does not exist", { status: 400 });
    if (!currentUserId)
      return new Response("Unauthorized user. please login", { status: 401 });
    if (currentUserId === idToAdd)
      return new Response("You cant add yourself as a friend", { status: 400 });

    //check if user is already added
    const isAlreadyAdded = (await fetchRedis(
      "sismember",
      `user:${idToAdd}:incoming_friend_requests`,
      currentUserId,
    )) as 0 | 1;

    if (isAlreadyAdded)
      return new Response("Already added this user", { status: 400 });

    //check if they are already friend
    const isAlreadyFriends = (await fetchRedis(
      "sismember",
      `user:${currentUserId}:friends`,
      idToAdd,
    )) as 0 | 1;

    if (isAlreadyFriends)
      return new Response("You are already friend with this user", {
        status: 400,
      });

    //FINALLY send friend request :)
    await db.sadd(`user:${idToAdd}:incoming_friend_requests`, currentUserId);
    return new Response("Friend request have been send successfully");
  } catch (e) {
    if (e instanceof ZodError) {
      return new Response("Invalid request payload", { status: 422 });
    }

    return new Response("Invalid request", { status: 400 });
  }
};
