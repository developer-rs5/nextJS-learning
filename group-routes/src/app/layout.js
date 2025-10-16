import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export default function RootLayout({ children, team }) {
  return (
    <html lang="en">
      <body className="w-screen h-screen flex">
        <div className="w-[50%] bg-amber-300 ">{children}</div>
        <div className="w-[50%] bg-red-400 " >{team}</div>
      </body>
    </html>
  );
}
