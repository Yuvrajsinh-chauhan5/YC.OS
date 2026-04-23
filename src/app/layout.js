// import Navbar from "@/components/layout/Navbar";
// import Footer from "@/components/layout/Footer";
// import ParticleField from "@/components/animations/ParticleField";

// import "./globals.css";


// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className="bg-black text-white">
//         <ParticleField />
//         <Navbar />
//         <main className="relative z-10 pt-28">
//           {children}
//         </main>
//         <Footer />
//       </body>
//     </html>
//   );
// }




import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ParticleField from "@/components/animations/ParticleField";
import BootGate from "@/components/boot/BootGate";

import "./globals.css";

import { Inter, JetBrains_Mono } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable}`}>
      <body className="bg-black text-white font-ui">

        <BootGate>

          <ParticleField />
          <Navbar />

          <main className="relative z-10 pt-28">
            {children}
          </main>

          <Footer />

        </BootGate>

      </body>
    </html>
  );
}
