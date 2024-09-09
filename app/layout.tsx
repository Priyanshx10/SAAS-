import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  display: "swap",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SaaS Application",
  description: "Powerful SaaS solution for document management",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body 
          className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased min-h-screen h-screen overflow-hidden overflow-y-scroll`}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}