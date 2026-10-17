import Layout from "@/components/layouts/main/Layout";
import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Colnat - Software Engineer",
  description:
    "Nguyen Tan Loc (Colnat), Software Engineer specializing in backend and full-stack development with NestJS, Spring Boot and React. Explore my experience and selected projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${dmSans.className} min-h-full flex flex-col antialiased`}
      >
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
