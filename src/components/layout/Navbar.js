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

// "use client";

// import Link from "next/link";
// import Logo from "../ui/Logo";
// import { usePathname } from "next/navigation";

// export default function Navbar() {
//   const pathname = usePathname();

//   const links = [
//     { href: "/", label: "Home" },
//     { href: "/about", label: "About" },
//     { href: "/experience", label: "Experience" },
//     { href: "/skills", label: "Skills" },
//     { href: "/contact", label: "Contact" },
//   ];

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
//         <div className="flex items-center gap-4 md:gap-6 text-xs sm:text-sm">

//           {links.map((item) => {
//             const isActive = pathname === item.href;

//             return (
//               <Link
//                 key={item.href}
//                 href={item.href}
//                 className={`
//                   relative group transition
//                   ${isActive ? "text-[var(--accent)]" : "text-gray-300 hover:text-white"}
//                 `}
//               >
//                 {item.label}

//                 {/* underline */}
//                 <span
//                   className={`
//                     absolute left-0 -bottom-1
//                     h-[1px]
//                     bg-[var(--accent)]
//                     transition-all duration-300
//                     ${isActive ? "w-full" : "w-0 group-hover:w-full"}
//                   `}
//                 />
//               </Link>
//             );
//           })}

//         </div>

//       </div>
//     </nav>
//   );
// }




// new change ->28 july 2026

// "use client";

// import Link from "next/link";
// import Logo from "../ui/Logo";
// import { usePathname, useRouter } from "next/navigation";

// export default function Navbar() {
//   const pathname = usePathname();
//   const router = useRouter();

//   const links = [
//     { href: "/", label: "Home" },
//     { href: "/about", label: "About" },
//     { href: "/experience", label: "Experience" },
//     { href: "/skills", label: "Skills" },
//     { href: "/contact", label: "Contact" },
    
//   ];

//   /* =========================
//      EXPERIENCE NAVIGATION
//   ========================= */

//   const handleExperienceClick = (e) => {
//     e.preventDefault();

//     // Already on homepage → smooth scroll
//     if (pathname === "/") {
//       document.getElementById("experience")?.scrollIntoView({
//         behavior: "smooth",
//         block: "start",
//       });

//       return;
//     }

//     // Any other page → go to homepage experience section
//     router.push("/#experience");
//   };

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
//         <div className="flex items-center gap-4 md:gap-6 text-xs sm:text-sm">

//           {links.map((item) => {

//             const isExperience = item.label === "Experience";
//             const isActive = pathname === item.href;

//             /* =========================
//                EXPERIENCE
//                HOME → SMOOTH SCROLL
//                OTHER PAGES → HOME/#EXPERIENCE
//             ========================= */

//             if (isExperience) {
//               return (
//                 <a
//                   key={item.href}
//                   href="/#experience"
//                   onClick={handleExperienceClick}
//                   className={`
//                     relative group transition
//                     ${
//                       pathname === "/experience"
//                         ? "text-[var(--accent)]"
//                         : "text-gray-300 hover:text-white"
//                     }
//                   `}
//                 >
//                   {item.label}

//                   {/* UNDERLINE */}
//                   <span
//                     className={`
//                       absolute left-0 -bottom-1
//                       h-[1px]
//                       bg-[var(--accent)]
//                       transition-all duration-300
//                       ${
//                         pathname === "/experience"
//                           ? "w-full"
//                           : "w-0 group-hover:w-full"
//                       }
//                     `}
//                   />
//                 </a>
//               );
//             }

//             /* =========================
//                NORMAL NAVIGATION
//             ========================= */

//             return (
//               <Link
//                 key={item.href}
//                 href={item.href}
//                 className={`
//                   relative group transition
//                   ${
//                     isActive
//                       ? "text-[var(--accent)]"
//                       : "text-gray-300 hover:text-white"
//                   }
//                 `}
//               >
//                 {item.label}

//                 {/* UNDERLINE */}
//                 <span
//                   className={`
//                     absolute left-0 -bottom-1
//                     h-[1px]
//                     bg-[var(--accent)]
//                     transition-all duration-300
//                     ${
//                       isActive
//                         ? "w-full"
//                         : "w-0 group-hover:w-full"
//                     }
//                   `}
//                 />
//               </Link>
//             );
//           })}

//         </div>

//       </div>
//     </nav>
//   );
// }


// // exp btn in nav scroll down to the preview

// "use client";

// import Link from "next/link";
// import Logo from "../ui/Logo";
// import { usePathname, useRouter } from "next/navigation";

// export default function Navbar() {
//   const pathname = usePathname();
//   const router = useRouter();

//   const links = [
//     { href: "/", label: "Home" },
//     { href: "/about", label: "About" },
//     { href: "/experience", label: "Experience" },
//     { href: "/skills", label: "Skills" },
//     { href: "/contact", label: "Contact" },
//   ];

//   /* =========================
//      EXPERIENCE NAVIGATION
//   ========================= */

//   const handleExperienceClick = (e) => {
//     e.preventDefault();

//     // Already on homepage → smooth scroll
//     if (pathname === "/") {
//       document.getElementById("experience")?.scrollIntoView({
//         behavior: "smooth",
//         block: "start",
//       });

//       return;
//     }

//     // Any other page → go to homepage experience section
//     router.push("/#experience");
//   };

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
//         <div className="flex items-center gap-4 md:gap-6 text-xs sm:text-sm">

//           {links.map((item) => {
//             const isExperience = item.label === "Experience";
//             const isActive = pathname === item.href;

//             /* =========================
//                EXPERIENCE
//                HOME → SMOOTH SCROLL
//                OTHER PAGES → HOME/#EXPERIENCE
//             ========================= */

//             if (isExperience) {
//               return (
//                 <a
//                   key={item.href}
//                   href="/#experience"
//                   onClick={handleExperienceClick}
//                   className={`
//                     relative group transition
//                     ${
//                       pathname === "/experience"
//                         ? "text-[var(--accent)]"
//                         : "text-gray-300 hover:text-white"
//                     }
//                   `}
//                 >
//                   {item.label}

//                   {/* UNDERLINE */}
//                   <span
//                     className={`
//                       absolute left-0 -bottom-1
//                       h-[1px]
//                       bg-[var(--accent)]
//                       transition-all duration-300
//                       ${
//                         pathname === "/experience"
//                           ? "w-full"
//                           : "w-0 group-hover:w-full"
//                       }
//                     `}
//                   />
//                 </a>
//               );
//             }

//             /* =========================
//                NORMAL NAVIGATION
//             ========================= */

//             return (
//               <Link
//                 key={item.href}
//                 href={item.href}
//                 className={`
//                   relative group transition
//                   ${
//                     isActive
//                       ? "text-[var(--accent)]"
//                       : "text-gray-300 hover:text-white"
//                   }
//                 `}
//               >
//                 {item.label}

//                 {/* UNDERLINE */}
//                 <span
//                   className={`
//                     absolute left-0 -bottom-1
//                     h-[1px]
//                     bg-[var(--accent)]
//                     transition-all duration-300
//                     ${
//                       isActive
//                         ? "w-full"
//                         : "w-0 group-hover:w-full"
//                     }
//                   `}
//                 />
//               </Link>
//             );
//           })}

//           {/* =========================
//              RESUME
//              OPENS PDF IN NEW TAB
//           ========================= */}

//           <a
//             href="/resume/Yuvrajsinh_Chauhan_Resume.pdf"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="relative group transition text-gray-300 hover:text-white"
//           >
//             Resume ↗

//             {/* UNDERLINE */}
//             <span
//               className="
//                 absolute left-0 -bottom-1
//                 h-[1px]
//                 w-0
//                 bg-[var(--accent)]
//                 transition-all duration-300
//                 group-hover:w-full
//               "
//             />
//           </a>

//         </div>
//       </div>
//     </nav>
//   );
// }




// exp btn in nav redirect to exp page 


// "use client";

// import Link from "next/link";
// import Logo from "../ui/Logo";
// import { usePathname } from "next/navigation";

// export default function Navbar() {
//   const pathname = usePathname();

//   const links = [
//     { href: "/", label: "Home" },
//     { href: "/about", label: "About" },
//     { href: "/skills", label: "Skills" },
//     { href: "/contact", label: "Contact" },
//   ];

//   const isHome = pathname === "/";

//   return (
//     <nav className="fixed top-0 w-full bg-black/60 backdrop-blur border-b border-gray-800 z-50">
//       <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">

//         {/* LEFT: LOGO */}
//         <div className="flex items-center gap-3">
//           <Link href="/" aria-label="Go to Home">
//             <Logo />
//           </Link>

//           <Link
//             href="/"
//             className="text-sm text-gray-300 tracking-wide hover:text-white transition"
//           >
//             YC.OS
//           </Link>
//         </div>

//         {/* RIGHT: LINKS */}
//         <div className="flex items-center gap-4 md:gap-6 text-xs sm:text-sm">

//           {/* BACK TO HOME */}
//           {!isHome && (
//             <Link
//               href="/"
//               className="
//                 relative group
//                 text-gray-300
//                 hover:text-white
//                 transition
//                 inline-flex items-center gap-1
//               "
//             >
//               <span>←</span>
//               <span>Back</span>

//               {/* UNDERLINE */}
//               <span
//                 className="
//                   absolute left-0 -bottom-1
//                   h-[1px]
//                   bg-[var(--accent)]
//                   transition-all duration-300
//                   w-0 group-hover:w-full
//                 "
//               />
//             </Link>
//           )}

//           {/* NORMAL NAVIGATION */}
//           {links.map((item) => {
//             const isActive = pathname === item.href;

//             return (
//               <Link
//                 key={item.href}
//                 href={item.href}
//                 className={`
//                   relative group transition
//                   ${
//                     isActive
//                       ? "text-[var(--accent)]"
//                       : "text-gray-300 hover:text-white"
//                   }
//                 `}
//               >
//                 {item.label}

//                 {/* UNDERLINE */}
//                 <span
//                   className={`
//                     absolute left-0 -bottom-1
//                     h-[1px]
//                     bg-[var(--accent)]
//                     transition-all duration-300
//                     ${
//                       isActive
//                         ? "w-full"
//                         : "w-0 group-hover:w-full"
//                     }
//                   `}
//                 />
//               </Link>
//             );
//           })}

//           {/* EXPERIENCE */}
//           <Link
//             href="/experience"
//             className="
//               relative group
//               text-gray-300
//               hover:text-white
//               transition
//             "
//           >
//             Experience

//             {/* UNDERLINE */}
//             <span
//               className="
//                 absolute left-0 -bottom-1
//                 h-[1px]
//                 w-0
//                 bg-[var(--accent)]
//                 transition-all duration-300
//                 group-hover:w-full
//               "
//             />
//           </Link>

//           {/* RESUME */}
//           <a
//             href="/resume/Yuvrajsinh_Chauhan_Resume.pdf"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="
//               relative group
//               text-gray-300
//               hover:text-white
//               transition
//             "
//           >
//             Resume ↗

//             {/* UNDERLINE */}
//             <span
//               className="
//                 absolute left-0 -bottom-1
//                 h-[1px]
//                 w-0
//                 bg-[var(--accent)]
//                 transition-all duration-300
//                 group-hover:w-full
//               "
//             />
//           </a>

//         </div>
//       </div>
//     </nav>
//   );
// }


// "use client";

// import Link from "next/link";
// import Logo from "../ui/Logo";
// import { usePathname } from "next/navigation";

// export default function Navbar() {
//   const pathname = usePathname();

//   const links = [
//     { href: "/", label: "Home" },
//     { href: "/about", label: "About" },
//     { href: "/skills", label: "Skills" },
//     { href: "/contact", label: "Contact" },
//   ];

//   const isHome = pathname === "/";

//   return (
//     <nav className="fixed top-0 w-full bg-black/60 backdrop-blur border-b border-gray-800 z-50">
//       <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">

//         {/* LEFT: LOGO */}
//         <div className="flex items-center gap-3">
//           <Link href="/" aria-label="Go to Home">
//             <Logo />
//           </Link>

//           <Link
//             href="/"
//             className="text-sm text-gray-300 tracking-wide hover:text-white transition"
//           >
//             YC.OS
//           </Link>
//         </div>

//         {/* RIGHT: LINKS */}
//         <div className="flex items-center gap-4 md:gap-6 text-xs sm:text-sm">

//           {/* BACK TO HOME */}
//           {!isHome && (
//             <Link
//               href="/"
//               className="
//                 relative group
//                 text-gray-300
//                 hover:text-white
//                 transition
//                 inline-flex items-center gap-1
//               "
//             >
//               <span>←</span>
//               <span>Back</span>

//               {/* UNDERLINE */}
//               <span
//                 className="
//                   absolute left-0 -bottom-1
//                   h-[1px]
//                   bg-[var(--accent)]
//                   transition-all duration-300
//                   w-0 group-hover:w-full
//                 "
//               />
//             </Link>
//           )}

//           {/* NORMAL NAVIGATION */}
//           {links.map((item) => {
//             const isActive = pathname === item.href;

//             return (
//               <Link
//                 key={item.href}
//                 href={item.href}
//                 className={`
//                   relative group transition
//                   ${
//                     isActive
//                       ? "text-[var(--accent)]"
//                       : "text-gray-300 hover:text-white"
//                   }
//                 `}
//               >
//                 {item.label}

//                 {/* UNDERLINE */}
//                 <span
//                   className={`
//                     absolute left-0 -bottom-1
//                     h-[1px]
//                     bg-[var(--accent)]
//                     transition-all duration-300
//                     ${
//                       isActive
//                         ? "w-full"
//                         : "w-0 group-hover:w-full"
//                     }
//                   `}
//                 />
//               </Link>
//             );
//           })}

//           {/* EXPERIENCE */}
//           <Link
//             href="/experience"
//             className="
//               relative group
//               text-gray-300
//               hover:text-white
//               transition
//             "
//           >
//             Experience

//             {/* UNDERLINE */}
//             <span
//               className="
//                 absolute left-0 -bottom-1
//                 h-[1px]
//                 w-0
//                 bg-[var(--accent)]
//                 transition-all duration-300
//                 group-hover:w-full
//               "
//             />
//           </Link>

//           {/* RESUME */}
//           <a
//             href="/resume/Yuvrajsinh_Chauhan_Resume.pdf"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="
//               relative group
//               text-gray-300
//               hover:text-white
//               transition
//             "
//           >
//             Resume ↗

//             {/* UNDERLINE */}
//             <span
//               className="
//                 absolute left-0 -bottom-1
//                 h-[1px]
//                 w-0
//                 bg-[var(--accent)]
//                 transition-all duration-300
//                 group-hover:w-full
//               "
//             />
//           </a>

//         </div>
//       </div>
//     </nav>
//   );
// }




// safe version redirect to exp page with better btn and responsiveness

// "use client";

// import Link from "next/link";
// import Logo from "../ui/Logo";
// import { usePathname } from "next/navigation";
// import { useState } from "react";

// export default function Navbar() {
//   const pathname = usePathname();
//   const [menuOpen, setMenuOpen] = useState(false);

//   const links = [
//     { href: "/", label: "Home" },
//     { href: "/about", label: "About" },
//     { href: "/skills", label: "Skills" },
//     { href: "/contact", label: "Contact" },
//     { href: "/experience", label: "Experience" },
//   ];

//   const isHome = pathname === "/";

//   const closeMenu = () => {
//     setMenuOpen(false);
//   };

//   return (
//     <nav className="fixed top-0 left-0 w-full bg-black/60 backdrop-blur-xl border-b border-gray-800/80 z-50">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

//         {/* =========================
//             MAIN NAVBAR
//         ========================= */}

//         <div className="h-16 flex items-center justify-between">

//           {/* LEFT: LOGO */}
//           <div className="flex items-center gap-3 min-w-0">
//             <Link
//               href="/"
//               aria-label="Go to Home"
//               onClick={closeMenu}
//               className="shrink-0"
//             >
//               <Logo />
//             </Link>

//             <Link
//               href="/"
//               onClick={closeMenu}
//               className="
//                 text-sm
//                 text-gray-300
//                 tracking-wide
//                 hover:text-white
//                 transition-colors
//                 truncate
//               "
//             >
//               YC.OS
//             </Link>
//           </div>

//           {/* =========================
//               DESKTOP NAVIGATION
//           ========================= */}

//           <div className="hidden lg:flex items-center gap-5 xl:gap-7 text-sm">

//             {/* BACK TO HOME */}
//             {!isHome && (
//               <Link
//                 href="/"
//                 className="
//                   group
//                   inline-flex
//                   items-center
//                   gap-2
//                   px-3
//                   py-1.5
//                   rounded-lg
//                   border
//                   border-cyan-400/10
//                   bg-cyan-400/[0.03]
//                   text-gray-400
//                   hover:text-cyan-400
//                   hover:border-cyan-400/30
//                   hover:bg-cyan-400/[0.06]
//                   transition-all
//                   duration-300
//                 "
//               >
//                 <span
//                   className="
//                     text-cyan-400/70
//                     group-hover:text-cyan-400
//                     group-hover:-translate-x-0.5
//                     transition-transform
//                   "
//                 >
//                   ←
//                 </span>

//                 <span>Back to Home</span>
//               </Link>
//             )}

//             {/* NORMAL NAVIGATION */}
//             {links.map((item) => {
//               const isActive = pathname === item.href;

//               return (
//                 <Link
//                   key={item.href}
//                   href={item.href}
//                   className={`
//                     relative
//                     group
//                     py-2
//                     transition-colors
//                     ${
//                       isActive
//                         ? "text-[var(--accent)]"
//                         : "text-gray-300 hover:text-white"
//                     }
//                   `}
//                 >
//                   {item.label}

//                   <span
//                     className={`
//                       absolute
//                       left-0
//                       -bottom-0.5
//                       h-px
//                       bg-[var(--accent)]
//                       transition-all
//                       duration-300
//                       ${
//                         isActive
//                           ? "w-full"
//                           : "w-0 group-hover:w-full"
//                       }
//                     `}
//                   />
//                 </Link>
//               );
//             })}

//             {/* RESUME */}
//             <a
//               href="/resume/Yuvrajsinh_Chauhan_Resume.pdf"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="
//                 relative
//                 group
//                 py-2
//                 text-gray-300
//                 hover:text-white
//                 transition-colors
//               "
//             >
//               Resume ↗

//               <span
//                 className="
//                   absolute
//                   left-0
//                   -bottom-0.5
//                   h-px
//                   w-0
//                   bg-[var(--accent)]
//                   transition-all
//                   duration-300
//                   group-hover:w-full
//                 "
//               />
//             </a>
//           </div>

//           {/* =========================
//               MOBILE MENU BUTTON
//           ========================= */}

//           <button
//             type="button"
//             onClick={() => setMenuOpen((current) => !current)}
//             aria-label={
//               menuOpen
//                 ? "Close navigation menu"
//                 : "Open navigation menu"
//             }
//             aria-expanded={menuOpen}
//             className="
//               lg:hidden
//               relative
//               flex
//               items-center
//               justify-center
//               w-10
//               h-10
//               rounded-xl
//               border
//               border-cyan-400/20
//               bg-cyan-400/[0.04]
//               text-cyan-400
//               hover:bg-cyan-400/[0.08]
//               hover:border-cyan-400/40
//               transition-all
//               duration-300
//             "
//           >
//             <div className="relative w-5 h-4">

//               <span
//                 className={`
//                   absolute
//                   left-0
//                   w-5
//                   h-px
//                   bg-cyan-400
//                   transition-all
//                   duration-300
//                   ${
//                     menuOpen
//                       ? "top-2 rotate-45"
//                       : "top-0"
//                   }
//                 `}
//               />

//               <span
//                 className={`
//                   absolute
//                   left-0
//                   top-2
//                   w-5
//                   h-px
//                   bg-cyan-400
//                   transition-all
//                   duration-300
//                   ${
//                     menuOpen
//                       ? "opacity-0"
//                       : "opacity-100"
//                   }
//                 `}
//               />

//               <span
//                 className={`
//                   absolute
//                   left-0
//                   w-5
//                   h-px
//                   bg-cyan-400
//                   transition-all
//                   duration-300
//                   ${
//                     menuOpen
//                       ? "top-2 -rotate-45"
//                       : "top-4"
//                   }
//                 `}
//               />

//             </div>
//           </button>
//         </div>

//         {/* =========================
//             MOBILE NAVIGATION
//         ========================= */}

//         <div
//           className={`
//             lg:hidden
//             overflow-hidden
//             transition-all
//             duration-300
//             ease-in-out
//             ${
//               menuOpen
//                 ? "max-h-[600px] opacity-100 pb-5"
//                 : "max-h-0 opacity-0"
//             }
//           `}
//         >
//           <div className="pt-3 border-t border-gray-800/60">

//             {/* MOBILE BACK BUTTON */}
//             {!isHome && (
//               <Link
//                 href="/"
//                 onClick={closeMenu}
//                 className="
//                   mb-3
//                   flex
//                   items-center
//                   justify-between
//                   px-4
//                   py-3
//                   rounded-xl
//                   border
//                   border-cyan-400/15
//                   bg-cyan-400/[0.04]
//                   text-gray-300
//                   hover:text-cyan-400
//                   hover:border-cyan-400/30
//                   transition-all
//                   duration-300
//                 "
//               >
//                 <span className="flex items-center gap-3">

//                   <span
//                     className="
//                       flex
//                       items-center
//                       justify-center
//                       w-7
//                       h-7
//                       rounded-lg
//                       bg-cyan-400/10
//                       border
//                       border-cyan-400/20
//                       text-cyan-400
//                     "
//                   >
//                     ←
//                   </span>

//                   <span className="text-sm">
//                     Back to Home
//                   </span>
//                 </span>

//                 <span className="text-xs text-cyan-400/50">
//                   Home
//                 </span>
//               </Link>
//             )}

//             {/* MOBILE LINKS */}
//             <div className="space-y-1">

//               {links.map((item) => {
//                 const isActive = pathname === item.href;

//                 return (
//                   <Link
//                     key={item.href}
//                     href={item.href}
//                     onClick={closeMenu}
//                     className={`
//                       flex
//                       items-center
//                       justify-between
//                       px-4
//                       py-3
//                       rounded-xl
//                       transition-all
//                       duration-300
//                       ${
//                         isActive
//                           ? "bg-cyan-400/[0.08] text-[var(--accent)] border border-cyan-400/15"
//                           : "text-gray-300 hover:text-white hover:bg-white/[0.03] border border-transparent"
//                       }
//                     `}
//                   >
//                     <span>{item.label}</span>

//                     {isActive && (
//                       <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(0,191,255,0.8)]" />
//                     )}
//                   </Link>
//                 );
//               })}
//             </div>

//             {/* MOBILE RESUME */}
//             <a
//               href="/resume/Yuvrajsinh_Chauhan_Resume.pdf"
//               target="_blank"
//               rel="noopener noreferrer"
//               onClick={closeMenu}
//               className="
//                 mt-3
//                 flex
//                 items-center
//                 justify-between
//                 px-4
//                 py-3
//                 rounded-xl
//                 border
//                 border-gray-800
//                 bg-white/[0.02]
//                 text-gray-300
//                 hover:text-white
//                 hover:border-cyan-400/20
//                 transition-all
//                 duration-300
//               "
//             >
//               <span>Resume</span>

//               <span className="text-cyan-400">
//                 ↗
//               </span>
//             </a>
//           </div>
//         </div>

//       </div>
//     </nav>
//   );
// }


// match with terminal layout version

"use client";

import Link from "next/link";
import Logo from "../ui/Logo";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: "/", label: "Home", command: "~/yc.dev" },
    { href: "/about", label: "About", command: "~/yc.dev/about" },
    { href: "/skills", label: "Skills", command: "~/yc.dev/skills" },
    { href: "/contact", label: "Contact", command: "~/yc.dev/contact" },
    {
      href: "/experience",
      label: "Experience",
      command: "~/yc.dev/experience",
    },
  ];

  const isHome = pathname === "/";

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/60 backdrop-blur-xl border-b border-gray-800/80 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* =========================
            MAIN NAVBAR
        ========================= */}

        <div className="h-16 flex items-center justify-between">

          {/* LEFT: LOGO */}
          <div className="flex items-center gap-3 min-w-0">
            <Link
              href="/"
              aria-label="Go to Home"
              onClick={closeMenu}
              className="shrink-0"
            >
              <Logo />
            </Link>

            <Link
              href="/"
              onClick={closeMenu}
              className="
                font-mono
                text-xs
                tracking-wide
                text-gray-400
                hover:text-cyan-300
                transition-all
                duration-300
                truncate
                group
              "
            >
              <span className="text-gray-700 group-hover:text-cyan-500/70 transition-colors">
                ~/
              </span>
              <span>YC.OS</span>
            </Link>
          </div>

          {/* =========================
              DESKTOP NAVIGATION
          ========================= */}

          <div className="hidden lg:flex items-center gap-4 xl:gap-6">

            {/* BACK TO HOME */}
            {!isHome && (
              <Link
                href="/"
                className="
                  group
                  inline-flex
                  items-center
                  gap-2
                  px-3
                  py-1.5
                  rounded-lg
                  border
                  border-cyan-400/10
                  bg-cyan-400/[0.025]
                  font-mono
                  text-[10px]
                  text-gray-500
                  hover:text-cyan-300
                  hover:border-cyan-400/30
                  hover:bg-cyan-400/[0.06]
                  transition-all
                  duration-300
                "
              >
                <span
                  className="
                    text-cyan-400/60
                    group-hover:text-cyan-300
                    group-hover:-translate-x-1
                    transition-all
                    duration-300
                  "
                >
                  ←
                </span>

                <span>
                  ~/yc.dev
                </span>
              </Link>
            )}

            {/* NORMAL NAVIGATION */}
            {links.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`
                    relative
                    group
                    flex
                    items-center
                    gap-1
                    py-2
                    font-mono
                    text-[10px]
                    tracking-wide
                    transition-all
                    duration-300
                    ${
                      isActive
                        ? "text-cyan-300"
                        : "text-gray-500 hover:text-gray-200"
                    }
                  `}
                >
                  <span
                    className={`
                      transition-all
                      duration-300
                      ${
                        isActive
                          ? "text-cyan-400/80"
                          : "text-gray-700 group-hover:text-cyan-500/70"
                      }
                    `}
                  >
                    ~/
                  </span>

                  <span>{item.label}</span>

                  {/* ACTIVE / HOVER TERMINAL CURSOR */}
                  <span
                    className={`
                      ml-0.5
                      inline-block
                      h-2.5
                      w-[3px]
                      translate-y-[1px]
                      bg-cyan-400
                      transition-all
                      duration-300
                      ${
                        isActive
                          ? "opacity-100 shadow-[0_0_7px_rgba(0,191,255,0.7)]"
                          : "opacity-0 group-hover:opacity-70"
                      }
                    `}
                  />

                  {/* UNDERLINE */}
                  <span
                    className={`
                      absolute
                      left-0
                      -bottom-0.5
                      h-px
                      bg-gradient-to-r
                      from-cyan-400
                      to-transparent
                      transition-all
                      duration-300
                      ${
                        isActive
                          ? "w-full"
                          : "w-0 group-hover:w-full"
                      }
                    `}
                  />
                </Link>
              );
            })}

            {/* RESUME */}
            <a
              href="/resume/Yuvrajsinh_Chauhan_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                relative
                inline-flex
                items-center
                gap-1
                px-2.5
                py-1.5
                rounded-md
                border
                border-gray-800
                bg-white/[0.015]
                font-mono
                text-[10px]
                text-gray-500
                hover:text-cyan-300
                hover:border-cyan-400/25
                hover:bg-cyan-400/[0.04]
                transition-all
                duration-300
              "
            >
              <span className="text-gray-700 group-hover:text-cyan-500/70 transition-colors">
                ~/
              </span>

              <span>resume</span>

              <span
                className="
                  text-cyan-400/60
                  group-hover:text-cyan-300
                  group-hover:translate-x-0.5
                  group-hover:-translate-y-0.5
                  transition-all
                  duration-300
                "
              >
                ↗
              </span>
            </a>
          </div>

          {/* =========================
              MOBILE MENU BUTTON
          ========================= */}

          <button
            type="button"
            onClick={() => setMenuOpen((current) => !current)}
            aria-label={
              menuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            className="
              lg:hidden
              relative
              flex
              items-center
              justify-center
              w-10
              h-10
              rounded-xl
              border
              border-cyan-400/20
              bg-cyan-400/[0.04]
              text-cyan-400
              hover:bg-cyan-400/[0.08]
              hover:border-cyan-400/40
              transition-all
              duration-300
            "
          >
            <div className="relative w-5 h-4">

              <span
                className={`
                  absolute
                  left-0
                  w-5
                  h-px
                  bg-cyan-400
                  transition-all
                  duration-300
                  ${
                    menuOpen
                      ? "top-2 rotate-45"
                      : "top-0"
                  }
                `}
              />

              <span
                className={`
                  absolute
                  left-0
                  top-2
                  w-5
                  h-px
                  bg-cyan-400
                  transition-all
                  duration-300
                  ${
                    menuOpen
                      ? "opacity-0"
                      : "opacity-100"
                  }
                `}
              />

              <span
                className={`
                  absolute
                  left-0
                  w-5
                  h-px
                  bg-cyan-400
                  transition-all
                  duration-300
                  ${
                    menuOpen
                      ? "top-2 -rotate-45"
                      : "top-4"
                  }
                `}
              />

            </div>
          </button>
        </div>

        {/* =========================
            MOBILE NAVIGATION
        ========================= */}

        <div
          className={`
            lg:hidden
            overflow-hidden
            transition-all
            duration-300
            ease-in-out
            ${
              menuOpen
                ? "max-h-[600px] opacity-100 pb-5"
                : "max-h-0 opacity-0"
            }
          `}
        >
          <div className="pt-3 border-t border-gray-800/60">

            {/* MOBILE BACK BUTTON */}
            {!isHome && (
              <Link
                href="/"
                onClick={closeMenu}
                className="
                  group
                  mb-3
                  flex
                  items-center
                  justify-between
                  px-4
                  py-3
                  rounded-xl
                  border
                  border-cyan-400/15
                  bg-cyan-400/[0.04]
                  font-mono
                  text-gray-400
                  hover:text-cyan-300
                  hover:border-cyan-400/30
                  hover:bg-cyan-400/[0.06]
                  transition-all
                  duration-300
                "
              >
                <span className="flex items-center gap-3">

                  <span
                    className="
                      flex
                      items-center
                      justify-center
                      w-7
                      h-7
                      rounded-lg
                      bg-cyan-400/10
                      border
                      border-cyan-400/20
                      text-cyan-400
                      group-hover:-translate-x-0.5
                      transition-transform
                      duration-300
                    "
                  >
                    ←
                  </span>

                  <span className="text-xs">
                    ~/yc.dev
                  </span>
                </span>

                <span className="text-[9px] text-cyan-400/40">
                  home
                </span>
              </Link>
            )}

            {/* MOBILE LINKS */}
            <div className="space-y-1">

              {links.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    className={`
                      group
                      flex
                      items-center
                      justify-between
                      px-4
                      py-3
                      rounded-xl
                      border
                      font-mono
                      transition-all
                      duration-300
                      ${
                        isActive
                          ? "bg-cyan-400/[0.08] text-cyan-300 border-cyan-400/15"
                          : "text-gray-400 hover:text-gray-200 hover:bg-white/[0.03] border-transparent"
                      }
                    `}
                  >
                    <span className="flex items-center gap-1.5">

                      <span
                        className={`
                          transition-colors
                          duration-300
                          ${
                            isActive
                              ? "text-cyan-400/80"
                              : "text-gray-700 group-hover:text-cyan-500/70"
                          }
                        `}
                      >
                        ~/
                      </span>

                      <span className="text-xs">
                        {item.label}
                      </span>
                    </span>

                    {isActive ? (
                      <span
                        className="
                          w-1.5
                          h-1.5
                          rounded-full
                          bg-cyan-400
                          shadow-[0_0_8px_rgba(0,191,255,0.8)]
                          animate-pulse
                        "
                      />
                    ) : (
                      <span
                        className="
                          text-[10px]
                          text-gray-700
                          opacity-0
                          group-hover:opacity-100
                          group-hover:text-cyan-400/60
                          group-hover:translate-x-0.5
                          transition-all
                          duration-300
                        "
                      >
                        →
                      </span>
                    )}
                  </Link>
                );
              })}
            </div>

            {/* MOBILE RESUME */}
            <a
              href="/resume/Yuvrajsinh_Chauhan_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="
                group
                mt-3
                flex
                items-center
                justify-between
                px-4
                py-3
                rounded-xl
                border
                border-gray-800
                bg-white/[0.02]
                font-mono
                text-gray-400
                hover:text-cyan-300
                hover:border-cyan-400/20
                hover:bg-cyan-400/[0.03]
                transition-all
                duration-300
              "
            >
              <span className="flex items-center gap-1.5">
                <span className="text-gray-700 group-hover:text-cyan-500/70 transition-colors">
                  ~/
                </span>

                <span className="text-xs">
                  resume
                </span>
              </span>

              <span
                className="
                  text-cyan-400/70
                  group-hover:text-cyan-300
                  group-hover:translate-x-0.5
                  group-hover:-translate-y-0.5
                  transition-all
                  duration-300
                "
              >
                ↗
              </span>
            </a>
          </div>
        </div>

      </div>
    </nav>
  );
}