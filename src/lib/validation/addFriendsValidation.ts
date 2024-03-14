import { z } from "zod";

export const addFriendsValidation = z.object({
  email: z
    .string()
    .trim()
    .min(1, { message: "Required" })
    .email({ message: "Invalid Email format" }),
});
