import { z } from "zod";

export const sellerSignupSchema = z.object({
  name: z.string().min(3).max(30),
  email: z.string().email(),
  password: z.string().min(6).max(40),
  description: z.string().min(20),
  registrationLicense: z.any(),
  city: z.string(),
  municipality: z.string(),
  street: z.string().min(5),
});

export type sellerSignupSchemaType = z.infer<typeof sellerSignupSchema>;
