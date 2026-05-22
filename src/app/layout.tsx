import "./globals.css";
import Layout from "../components/layout/Layout";

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
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}