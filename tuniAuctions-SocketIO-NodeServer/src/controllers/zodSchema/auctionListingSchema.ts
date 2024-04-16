import z from "zod";

export const basicListingSchema = z.object({
  title: z.string(),
  guarentee: z.object({
    length: z.number().nonnegative(),
    period: z.string(),
  }),
  description: z.string(),
  openingBid: z.number(),
  originalPrice: z.number().nonnegative(),
  productCategory: z.string(),
  productPictures: z.array(z.string()).min(1).max(3),
  promotionalVideo: z.string(),
  startingDate: z.string(),
  minParticipatingBidders: z.number().nonnegative(),
});
export const premiumListingSchema = z.object({
  title: z.string(),
  buyItNowSection: z.object({
    promotionalDescription: z.string(),
    promotionalPicture: z.string(),
    storeLink: z.string(),
  }),
  guarentee: z.object({
    length: z.number().nonnegative(),
    period: z.string(),
  }),
  description: z.string(),
  openingBid: z.number(),
  originalPrice: z.number().nonnegative(),
  productCategory: z.string(),
  productPictures: z.array(z.string()).min(1).max(3),
  promotionalVideo: z.string(),
  socialsSection: z.object({
    facebook: z.string().optional(),
    instagram: z.string().optional(),
    youtube: z.string().optional(),
    twitter: z.string().optional(),
    tiktok: z.string().optional(),
  }),
  startingDate: z.string(),
  minParticipatingBidders: z.number().nonnegative(),
});
const standardSchemaListing = z.object({
  title: z.string(),
  buyItNowSection: z.object({
    promotionalDescription: z.string(),
    promotionalPicture: z.string(),
    storeLink: z.string(),
  }),
  guarentee: z.object({
    length: z.number().nonnegative(),
    period: z.string(),
  }),
  description: z.string(),
  openingBid: z.number(),
  originalPrice: z.number().nonnegative(),
  productCategory: z.string(),
  productPictures: z.array(z.string()).min(1).max(3),
  promotionalVideo: z.string(),
  startingDate: z.string(),
  minParticipatingBidders: z.number().nonnegative(),
});

export type basicListingType = z.infer<typeof basicListingSchema>;
export type standardListingType = z.infer<typeof standardSchemaListing>;
export type premiumListingType = z.infer<typeof premiumListingSchema>;
