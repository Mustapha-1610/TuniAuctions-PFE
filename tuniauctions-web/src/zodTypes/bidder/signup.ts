import { z } from "zod";

export const bidderSignupSchema = z.object({
  fullName: z.string().min(6).max(40),
  email: z.string().email("Invalid Email"),
  password: z.string().min(6).max(40),
  gender: z.enum(["Male", "Female"]),
});

export type bidderSignupSchemaType = z.infer<typeof bidderSignupSchema>;

export const addLocationSchema = z.object({
  phoneNumber: z.string().max(8),
  street: z.string().min(3),
  presetName: z.string().min(2),
});
export type addLocationSchemType = z.infer<typeof addLocationSchema>;
