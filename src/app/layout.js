import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ParticleField from "@/components/animations/ParticleField";

import "./globals.css";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <ParticleField />
        <Navbar />
        <main className="relative z-10 pt-28">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

