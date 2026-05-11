// "use client";

// import Link from "next/link";
// import Logo from "../ui/Logo";

// export default function Navbar() {
//   return (
//     <nav className="fixed top-0 w-full bg-black/60 backdrop-blur border-b border-gray-800 z-50">
//       <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">

//         {/* LEFT: LOGO */}
//         <div className="flex items-center gap-3">
//           <Logo />
//           <span className="text-sm text-gray-300 tracking-wide">
//             YC.OS
//           </span>
//         </div>

//         {/* RIGHT: LINKS */}
//         <div className="flex items-center gap-4 md:gap-6 text-xs sm:text-sm text-gray-300">
//           <Link href="/" className="hover:text-white transition">Home</Link>
//           <Link href="/about" className="hover:text-white transition">About</Link>
//           <Link href="/skills" className="hover:text-white transition">Skills</Link>
//           <Link href="/contact" className="hover:text-white transition">Contact</Link>
//         </div>

//       </div>
//     </nav>
//   );
// }




// version 2




// version 2

"use client";

import Link from "next/link";
import Logo from "../ui/Logo";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/skills", label: "Skills" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-black/60 backdrop-blur border-b border-gray-800 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">

        {/* LEFT: LOGO */}
        <div className="flex items-center gap-3">
          <Logo />
          <span className="text-sm text-gray-300 tracking-wide">
            YC.OS
          </span>
        </div>

        {/* RIGHT: LINKS */}
        <div className="flex items-center gap-4 md:gap-6 text-xs sm:text-sm">

          {links.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  relative group transition
                  ${isActive ? "text-[var(--accent)]" : "text-gray-300 hover:text-white"}
                `}
              >
                {item.label}

                {/* underline */}
                <span
                  className={`
                    absolute left-0 -bottom-1
                    h-[1px]
                    bg-[var(--accent)]
                    transition-all duration-300
                    ${isActive ? "w-full" : "w-0 group-hover:w-full"}
                  `}
                />
              </Link>
            );
          })}

        </div>

      </div>
    </nav>
  );
}
