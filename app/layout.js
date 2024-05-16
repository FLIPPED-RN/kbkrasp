import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TehnWork from "@/components/TehnWork";
import {Suspense} from "react";
import {Metrika} from "@/components/metrika";
import BackgroundBest from "@/components/BackgroundBest";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Расписание КБК",
  description: "Это сайт для показа расписания КБК",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* <TehnWork /> */}
        <BackgroundBest />
        <header>
          <Header />
        </header>
        <main>
          {children}
        </main>
        <footer>
          <Footer />
        </footer>
        <Suspense>
          <Metrika />
        </Suspense>

      </body>
    </html>
  );
}
