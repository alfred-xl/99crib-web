import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteUrl } from "./seo";
import "./globals.css";
import "./legal.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "99 Crib | Verified student accommodation in Nigeria",
    template: "%s | 99 Crib",
  },
  description:
    "Find student accommodation near Nigerian universities, verified in person, with payments held in escrow until move-in.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={jakarta.variable}>
      <head>
        <noscript><style>{`[data-reveal]{opacity:1!important;transform:none!important}`}</style></noscript>
      </head>
      <body suppressHydrationWarning className="flex min-h-screen flex-col font-sans text-navy antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
