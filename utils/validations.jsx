import { z } from "zod";

export const validationSchema = z.object({
  name: z.string({
    required_error: "Name is required",
  }),
  email: z.string({
    required_error: "Email is required",
  }),
  message: z.string({
    required_error: "Message is required",
  }),
});
