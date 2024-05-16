import type { Metadata } from "next";
import { Providers } from './providers'
import { Inter } from "next/font/google";
import "./globals.css";
import StoreProvider from "@/store/storeProvider";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>
          <Providers>
            {children}
          </Providers>
        </StoreProvider>

      </body>
    </html>
  );
}
