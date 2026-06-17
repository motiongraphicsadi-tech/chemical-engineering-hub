import "./globals.css";
import "katex/dist/katex.min.css";

import Layout from "../components/layout/Layout";

import HeaderWrapper from "@/components/navigation/HeaderWrapper";

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "Chemical Engineering Platform",
  description:
    "Structured engineering knowledge platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (

    <html lang="en">

      <body className={inter.className}>

        <HeaderWrapper />

        <Layout>
          {children}
        </Layout>

      </body>

    </html>

  );
}