import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { ClerkProvider } from '@clerk/nextjs';

import LestSideBar from "@/components/layout/LestSideBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chuma - Admin Dashboard",
  description: "Admin dashboard to mannage Chuma's data",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <LeftSideBar />
          {children}</body>
      </html>
    </ClerkProvider>
  );
}
