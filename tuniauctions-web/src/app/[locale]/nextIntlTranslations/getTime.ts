export const getauctionStartDateFormat = (locale: string) => {
  switch (locale) {
    case "en":
      return "ddd, MMM D, YYYY [at] h:mm A";
    case "fr":
      return "ddd D MMM YYYY [à] HH:mm";
    case "ar":
      return "ddd، D MMM، YYYY [في] HH:mm";
    default:
      return "ddd, MMM D, YYYY [at] h:mm A"; // Default to English format
  }
};
