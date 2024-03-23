import { useTranslations } from "next-intl";
type sellerTranslationTextType = {
  modalText: {
    name: string;
    email: string;
    password: string;
    description: string;
    registrationLicense: string;
    street: string;
    apply: string;
    terms: string;
    loading: string;
    success: string;
  };

  zodErrors: {
    name: string;
    email: string;
    password: string;
    description: string;
    registrationLicense: string;
    street: string;
    city: string;
    municipality: string;
    [key: string]: string;
  };
  apiErrors: {
    missingInputs: string;
    accountExists: string;
    [key: string]: string;
  };
};
export function useSellerSignupModalTranslations() {
  const signupText = useTranslations("signupModal.seller");
  const errorsText = useTranslations("errors.authErros");
  const translationsObject: sellerTranslationTextType = {
    zodErrors: {
      name: signupText("zodErrors.name"),
      email: signupText("zodErrors.email"),
      password: signupText("zodErrors.password"),
      description: signupText("zodErrors.description"),
      registrationLicense: signupText("zodErrors.registrationLicense"),
      street: signupText("zodErrors.street"),
      municipality: signupText("zodErrors.municipality"),
      city: signupText("zodErrors.city"),
    },
    modalText: {
      name: signupText("name"),
      email: signupText("email"),
      password: signupText("password"),
      description: signupText("description"),
      registrationLicense: signupText("registrationLicense"),
      street: signupText("street"),
      apply: signupText("apply"),
      terms: signupText("terms"),
      loading: signupText("loading"),
      success: signupText("bidder.success"),
    },
    apiErrors: {
      missingInputs: errorsText("missingInputs"),
      accountExists: errorsText("accountExists"),
    },
  };
  return translationsObject;
}
