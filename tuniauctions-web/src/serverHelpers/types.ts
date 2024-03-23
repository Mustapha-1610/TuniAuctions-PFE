import { IBidderFrontData } from "@/models/usersModels/types/bidderTypes";
import { ISellerFrontData } from "@/models/usersModels/types/sellerTypes";

export type resDataType = {
  authError: boolean;
  errorCode: string;
  errorMessage: string;
  serverError: boolean;
  success: boolean;
  bidderFrontData: IBidderFrontData | null;
  sellerFrontData: ISellerFrontData | null;
};
