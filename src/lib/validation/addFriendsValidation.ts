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
