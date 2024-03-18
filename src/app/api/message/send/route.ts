import { messageValidation } from "@/src/lib/validation/addFriendsValidation";
import { NextRequest, NextResponse } from "next/server";
import fetchRedis from "@/src/helpers/redis";
import { db } from "@/src/lib/database/db";
import { ZodError } from "zod";
import { nanoid } from "nanoid";

export const POST = async (request: NextRequest, response: NextResponse) => {
  try {
    // Parse JSON body from the request
    const body = await request.json();
    const { receiverId, senderId, chatId } = body;

    // Generate timestamp for the message
    const timestamp = Date.now();

    // Prepare message data
    const messageData: Message = {
      id: nanoid(30),
      timestamp: timestamp,
      receiverId: body.receiverId,
      senderId: body.senderId,
      text: body.text,
    };

    // Validate the message data
    const message = messageValidation.parse(messageData);

    // Return error responses based on conditions
    if (!receiverId)
      return new Response("User does not exist", { status: 400 });
    if (!senderId)
      return new Response("Unauthorized user. Please log in", { status: 401 });

    // Check if the receiver is already friends with the sender
    const isAlreadyFriends = (await fetchRedis(
      "sismember",
      `user:${senderId}:friends`,
      receiverId,
    )) as 0 | 1;

    if (!isAlreadyFriends)
      return new Response("You are not friends with this user", {
        status: 400,
      });

    // Store the message in the database
    await db.zadd(`chat:${chatId}:messages`, {
      score: timestamp,
      member: JSON.stringify(message),
    });

    // Return success response
    return new Response("message has been sent successfully", {
      status: 200,
    });
  } catch (e) {
    // Handle validation errors and other exceptions
    if (e instanceof ZodError) {
      console.log(e);
      return new Response("Invalid request payload", { status: 422 });
    }
    return new Response("Invalid request", { status: 400 });
  }
};
