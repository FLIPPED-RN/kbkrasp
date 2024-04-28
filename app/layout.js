import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdComponent from "@/components/AdComponent";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Расписание КБК",
  description: "Это сайт для показа расписания КБК",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <Header />
        </header>
        <main>
          {children}
        </main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
