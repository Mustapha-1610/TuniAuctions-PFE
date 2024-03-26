import { usePathname, useRouter } from "next/navigation";
import { ChangeEvent } from "react";

interface Props {
  className: string;
}
export default function LanguageChanger({ className }: Props) {
  const pathname = usePathname();
  const currentLocale = pathname.split("/")[1];
  const locales = ["en", "fr", "ar"];
  const router = useRouter();
  const changeLanguage = (lang: string) => {
    const parts = pathname.split("/");
    const restOfPath = parts.slice(2).join("/");
    router.replace(`/${lang}/${restOfPath}`);
  };
  const handleLanguageChange = (e: ChangeEvent<HTMLSelectElement>) => {
    changeLanguage(e.target.value);
  };
  return (
    <select
      onChange={handleLanguageChange}
      defaultValue={currentLocale}
      className="block ml-1 lg:inline-block py-2  bg-neutral-900 text-sm text-white font-bold rounded-xl transition duration-200"
    >
      {locales.map((locale) => (
        <option className={className} key={locale} value={locale}>
          {locale}
        </option>
      ))}
    </select>
  );
}
