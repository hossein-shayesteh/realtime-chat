import { addFriendsValidation } from "@/src/lib/validation/addFriendsValidation";
import { NextRequest, NextResponse } from "next/server";
import fetchRedis from "@/src/helpers/redis";
import { db } from "@/src/lib/database/db";
import { ZodError } from "zod";
import { pusherServer } from "@/src/lib/pusher/pusher";
import toPusherKey from "@/src/helpers/toPusherKey";
import { Session } from "next-auth";
import { revalidatePath } from "next/cache";

export const POST = async (request: NextRequest) => {
  try {
    const body = await request.json();
    const { email } = addFriendsValidation.parse({ email: body.email });
    const session: Session = body.session;

    const currentUserId = session.user?.id;

    //connect to database with REST API
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
    if (!idToAdd) return new Response("User does not exist", { status: 400 });
    if (!currentUserId)
      return new Response("Unauthorized user. Please log in", { status: 401 });
    if (currentUserId === idToAdd)
      return new Response("You can't add yourself as a friend", {
        status: 400,
      });

    //check if user is already added
    const isAlreadyAdded = (await fetchRedis(
      "sismember",
      `user:${idToAdd}:incoming_friend_requests`,
      currentUserId,
    )) as 0 | 1;

    if (isAlreadyAdded)
      return new Response(
        "You have already sent a friend request to this user",
        { status: 400 },
      );

    //check if they are already friend
    const isAlreadyFriends = (await fetchRedis(
      "sismember",
      `user:${currentUserId}:friends`,
      idToAdd,
    )) as 0 | 1;

    if (isAlreadyFriends)
      return new Response("You are already friends with this user", {
        status: 400,
      });

    //send realtime friend request
    await pusherServer.trigger(
      toPusherKey(`user:${idToAdd}:incoming_friend_requests`),
      "incoming_friend_requests",
      {
        id: session.user?.id,
        name: session.user?.name,
        email: session.user?.email,
        image: session.user?.image,
      },
    );

    // //FINALLY send friend request :)
    await db.sadd(`user:${idToAdd}:incoming_friend_requests`, currentUserId);
    return new Response("Friend request has been sent successfully", {
      status: 200,
    });
  } catch (e) {
    if (e instanceof ZodError) {
      return new Response("Invalid request payload", { status: 422 });
    }

    return new Response("Invalid request", { status: 400 });
  }
};
