import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "./_components/sidebar";
import { Inter } from "next/font/google";

export const metadata: Metadata = {
  title: "StockPro",
  description:
    "Este projeto é uma dashboard de gerenciamento de produtos e vendas, desenvolvida utilizando o framework Next.js. A aplicação permite o gerenciamento eficiente de produtos e vendas, oferecendo uma interface amigável e informativa.",
};

const inter = Inter({
  subsets: ["latin"],
  display: "auto",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <div className="flex h-full gap-8">
          <Sidebar />
          {children}
        </div>
      </body>
    </html>
  );
}
