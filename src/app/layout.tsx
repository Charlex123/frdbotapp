import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from './provider'
import "./styles/global.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fifareward Airdrop Bot",
  description: "Fifareward Airdrop Bot",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
