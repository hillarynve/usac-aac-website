import './globals.css';
import { Inter } from 'next/font/google';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <Header />
        {/* <Nav/> */}
        <main className="min-h-screen p-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

