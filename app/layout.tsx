import "./globals.css";
import NavBar from "@/components/navbar";
import { ReactNode } from "react";

export const metadata = {
  title: "BBQ ",
  description: "This's my principal page",
  keywords: "store, online accont",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html>
      <body className="bg-amber-500 hover:bg-orange-400 text-white font-mono py-6 px-6 rounded-full">
        <NavBar />
        {children}
      </body>
    </html>
  );
}
