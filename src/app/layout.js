import {Roboto } from "next/font/google";
import "./globals.css";

const roboto= Roboto({
    variable: "--font-roboto",
    subsets:["latin"],
    weight: ["400", "500", "600", "700"]
})

export const metadata = {
  title: "SkillSphere",
  description: "An Online Learning Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light" className="h-full antialiased">
      <body className={`${roboto.className} w-full mx-auto min-h-full flex flex-col`}>
          {children}
      </body>
    </html>
  );
}
