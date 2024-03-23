import { useTranslations } from "next-intl";

// Types
type bidderTranslationTextType = {
  modalText: {
    fullName: string;
    email: string;
    password: string;
    gender: string;
    male: string;
    female: string;
    terms: string;
    submit: string;
    loading: string;
    success: string;
  };
  apiErrors: {
    missingInputs: string;
    accountExists: string;
    [key: string]: string;
  };
  zodErrors: {
    fullName: string;
    email: string;
    password: string;
    gender: string;
  };
};

export function useBidderSignupModalTranslations() {
  const signupText = useTranslations("signupModal.bidder");
  const errorsText = useTranslations("errors.authErros");
  const bidderTranslations: bidderTranslationTextType = {
    modalText: {
      fullName: signupText("fullName"),
      email: signupText("email"),
      password: signupText("password"),
      gender: signupText("gender"),
      male: signupText("male"),
      female: signupText("female"),
      terms: signupText("terms"),
      submit: signupText("submit"),
      loading: signupText("loading"),
      success: signupText("success"),
    },
    apiErrors: {
      missingInputs: errorsText("missingInputs"),
      accountExists: errorsText("accountExists"),
    },
    zodErrors: {
      fullName: signupText("zodErrors.fullName"),
      email: signupText("zodErrors.email"),
      password: signupText("zodErrors.password"),
      gender: signupText("zodErrors.gender"),
    },
  };
  return bidderTranslations;
}
