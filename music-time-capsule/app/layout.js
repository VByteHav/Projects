"use client";

import { SessionProvider } from "next-auth/react";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

// Load Poppins font with desired weights
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // Customize as needed
  variable: "--font-poppins", // Custom CSS variable
});




export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body>

        <SessionProvider>
          <Navbar/>
          {children}</SessionProvider>
      </body>
    </html>
  );
}
