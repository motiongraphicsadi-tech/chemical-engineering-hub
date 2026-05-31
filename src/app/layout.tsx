import "./globals.css";

import Layout from "../components/layout/Layout";

import Header from "@/components/navigation/Header";

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "Chemical Engineering Platform",
  description: "Structured engineering knowledge platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">

      <body className={inter.className}>

        {/* Global Fixed Header */}
        <Header />

        {/* Website Content */}
        <Layout>
          {children}
        </Layout>

      </body>

    </html>
  );
}