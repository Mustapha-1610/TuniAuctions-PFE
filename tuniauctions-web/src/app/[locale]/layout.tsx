import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/[locale]/globals.css";
import useMessage from "antd/es/message/useMessage";
import { NextIntlClientProvider } from "next-intl";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tuni Auctions",
  description: "Mustapha's Auction Graduation Project For DND Serv",
};

export default function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
