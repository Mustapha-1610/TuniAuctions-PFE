import { useLocale } from "next-intl";
import { redirect } from "next/navigation";

export function navigateBidder(path: string, locale: string) {
  return redirect("/" + locale + path);
}
