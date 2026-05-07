import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "highlight.js/styles/github.css";
import "katex/dist/katex.min.css";
import "@/app/globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/data/site";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} | Academic Homepage`,
    template: `%s | ${site.name}`,
  },
  description:
    "Personal academic homepage and research blog for Suhui Wu, PhD student at Nanjing University.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geist.variable} flex min-h-screen flex-col antialiased`}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
