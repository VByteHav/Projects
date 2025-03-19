"use client";

import { SessionProvider } from "next-auth/react";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});




export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body>

        <SessionProvider>

          {children}
          </SessionProvider>
      </body>
    </html>
  );
}
