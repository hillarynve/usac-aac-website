import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <Nav/>
        <main className="min-h-screen p-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

