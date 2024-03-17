import { z } from "zod";

export const addFriendsValidation = z.object({
  email: z
    .string()
    .email({ message: "This is not a valid email." })
    .min(1, { message: "Required." }),
});

export const stringValidation = z.object({
  id: z.string(),
});

export const messageValidation = z.object({
  id: z.string(),
  senderId: z.string(),
  receiverId: z.string(),
  text: z.string(),
  timestamp: z.number(),
});

export const messageArrayValidation = z.array(messageValidation);
