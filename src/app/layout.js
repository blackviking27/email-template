import { Inter } from "next/font/google";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/system";
import NavbarComponent from "@/components/Navbar";
import DataContextProvider from "@/context/DataContextProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "EasyMail",
  description: "Write beautiful emails",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextUIProvider>
          <DataContextProvider>
            {children}
          </DataContextProvider>
        </NextUIProvider>
      </body>
    </html>
  );
}
