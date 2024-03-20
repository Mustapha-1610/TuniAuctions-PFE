import { useTranslations } from "next-intl";
import Navbar from "./landingpageNavbar";

export default function NavbarComponent() {
  const t = useTranslations("HomePage");

  return <Navbar test={t("HeroTitle")} />;
}
