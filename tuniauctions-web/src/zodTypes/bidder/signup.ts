import { z } from "zod";

export const bidderSignupSchema = z.object({
  fullName: z.string().min(6).max(40),
  email: z.string().email("Invalid Email"),
  password: z.string().min(6).max(40),
  gender: z.enum(["Male", "Female"]),
});

export type bidderSignupSchemaType = z.infer<typeof bidderSignupSchema>;
