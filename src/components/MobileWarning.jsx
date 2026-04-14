// "use client";

// import { useState, useEffect } from "react";

// export default function DesktopNotice() {
//   const [visible, setVisible] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setVisible(false);
//     }, 7000);

//     return () => clearTimeout(timer);
//   }, []);

//   if (!visible) return null;

//   return (
//     <div
//       className="
//         md:hidden
//         fixed bottom-6 left-1/2 -translate-x-1/2
//         z-[9999]
//         px-5 py-3
//         bg-black/90 backdrop-blur
//         border border-cyan-500
//         text-xs text-gray-300
//         rounded-lg shadow-lg
//       "
//     >
//       ⚡ Desktop recommended for full experience

//       <button
//         onClick={() => setVisible(false)}
//         className="ml-3 text-cyan-400"
//       >
//         ✕
//       </button>
//     </div>
//   );
// }



// "use client";

// import { useState, useEffect } from "react";

// export default function DesktopNotice() {
//   const [visible, setVisible] = useState(true);

//   // ✅ auto disappear
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setVisible(false);
//     }, 7000);

//     return () => clearTimeout(timer);
//   }, []);

//   if (!visible) return null;

//   return (
//     <div
//       className="
//         md:hidden
//         fixed bottom-6 left-1/2 -translate-x-1/2
//         z-[9999]
//         w-[90%] max-w-sm
//         bg-black/95 backdrop-blur-md
//         border border-cyan-500/40
//         rounded-xl
//         shadow-lg shadow-cyan-500/10
//         px-4 py-3
//         flex items-center justify-between
//         animate-[fadeIn_0.4s_ease]
//       "
//     >
//       {/* TEXT */}
//       <p className="text-xs text-gray-300 pr-3 leading-relaxed">
//         ⚡ Best experienced on desktop for full system interface.
//       </p>

//       {/* CLOSE BUTTON */}
//       <button
//         onClick={() => setVisible(false)}
//         className="
//           flex items-center justify-center
//           w-7 h-7
//           rounded-md
//           bg-gray-800 hover:bg-gray-700
//           text-gray-300 hover:text-white
//           transition
//           active:scale-95
//         "
//         aria-label="Close notice"
//       >
//         ✕
//       </button>
//     </div>
//   );
// }






// "use client";

// import { useState, useEffect } from "react";

// export default function DesktopNotice() {
//   const [visible, setVisible] = useState(true);

//   // ✅ auto disappear
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setVisible(false);
//     }, 7000);

//     return () => clearTimeout(timer);
//   }, []);

//   if (!visible) return null;

//   return (
//     <div
//       className="
//         md:hidden
//         fixed bottom-6 left-1/2 -translate-x-1/2
//         z-[9999]
//         w-[90%] max-w-sm
//         bg-black/95 backdrop-blur-md
//         border border-cyan-500/40
//         rounded-xl
//         shadow-lg shadow-cyan-500/10
//         px-4 py-3
//         flex items-center justify-between
//         animate-[fadeIn_0.4s_ease]
//       "
//     >
//       {/* TEXT */}
//       <p className="text-xs text-gray-300 pr-3 leading-relaxed">
//         ⚡ Best experienced on desktop for full system interface.
//       </p>

//       {/* CLOSE BUTTON */}
//       <button
//         onClick={() => setVisible(false)}
//         className="
//           flex items-center justify-center
//           w-7 h-7
//           rounded-md
//           bg-gray-800 hover:bg-gray-700
//           text-gray-300 hover:text-white
//           transition
//           active:scale-95
//         "
//         aria-label="Close notice"
//       >
//         ✕
//       </button>
//     </div>
//   );
// // }

// "use client";

// import { useState, useEffect } from "react";

// export default function MobileWarning() {
//   const [visible, setVisible] = useState(true);

//   // auto hide after 7s
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setVisible(false);
//     }, 7000);

//     return () => clearTimeout(timer);
//   }, []);

//   if (!visible) return null;

//   return (
//     <div
//       className="
//         md:hidden
//         fixed top-20 left-1/2 -translate-x-1/2
//         z-[9999]
//         w-[92%] max-w-sm
//         bg-black/95 backdrop-blur-md
//         border border-cyan-500/40
//         rounded-xl
//         shadow-lg shadow-cyan-500/20
//         px-4 py-3
//         flex items-center justify-between
//       "
//     >
//       <p className="text-xs text-gray-300 pr-3 leading-relaxed">
//       This portfolio is optimized for desktop viewing to experience the full system interface.
//       </p>
//     </div>
//   );
// }


// "use client";

// import { useState, useEffect } from "react";

// export default function MobileWarning() {
//   const [visible, setVisible] = useState(true);

//   // auto hide after 7s
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setVisible(false);
//     }, 7000);

//     return () => clearTimeout(timer);
//   }, []);

//   if (!visible) return null;

//   return (
//     // <div className="md:hidden fixed top-24 left-1/2 -translate-x-1/2 z-[9999] w-[92%] max-w-sm">

//     <div className="md:hidden relative z-50 w-[92%] max-w-sm mx-auto mt-20">

//       {/* FLOATING NOTICE */}
//       <div
//         className="
//           relative
//           bg-black/95 backdrop-blur-lg
//           border border-cyan-400/40
//           rounded-2xl
//           shadow-[0_0_25px_rgba(0,191,255,0.25)]
//           px-5 py-4
//           animate-[fadeIn_0.5s_ease]
//         "
//       >
//         {/* NOTICE BADGE */}
//         <span
//           className="
//             absolute -top-3 left-4
//             text-[10px]
//             bg-cyan-500
//             text-black
//             font-semibold
//             px-2 py-1
//             rounded-md
//             tracking-wide
//           "
//         >
//           SYSTEM NOTICE
//         </span>

//         {/* MESSAGE */}
//         <p className="text-xs text-gray-300 leading-relaxed mt-1">
//           ⚡ This portfolio is optimized for desktop viewing to experience the full system interface.
//         </p>
//       </div>
//     </div>
//   );
// }




// "use client";

// import { useState, useEffect } from "react";

// export default function MobileWarning() {
//   const [visible, setVisible] = useState(true);

//   // Auto hide after 7 seconds
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setVisible(false);
//     }, 7000);

//     return () => clearTimeout(timer);
//   }, []);

//   if (!visible) return null;

//   return (
//     <div className="md:hidden relative z-50 w-[92%] max-w-sm mx-auto mt-20">

//       {/* SYSTEM NOTICE */}
//       <div
//         className="
//           relative
//           bg-[#020617]/95
//           backdrop-blur-lg
//           border border-cyan-400/40
//           rounded-2xl
//           shadow-[0_0_25px_rgba(0,191,255,0.25)]
//           px-5 py-4
//           animate-[fadeIn_0.5s_ease]
//         "
//       >
//         {/* NOTICE BADGE */}
//         {/* WARNING STICKER */}
//         <span
//           className="
//             absolute -top-3 left-4
//             text-[10px]
//             bg-yellow-400
//             text-black
//             font-semibold
//             px-2 py-1
//             rounded-md
//             tracking-wide
//           "
//         >
//           ⚠️  SYSTEM NOTICE
//         </span>

//         {/* MESSAGE */}
//         <p className="text-xs text-gray-300 leading-relaxed mt-1">
//           ⚡ This portfolio is optimized for desktop viewing to experience the complete system interface.
//         </p>
//       </div>

//     </div>
//   );
// }



"use client";

import { useState, useEffect } from "react";

export default function MobileWarning() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 7000);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="md:hidden relative z-50 w-[92%] max-w-sm mx-auto mt-20">

      <div
        className="
          relative
          bg-[#020617]/95
          backdrop-blur-lg
          border border-yellow-400/40
          rounded-2xl
          // shadow-[0_0_25px_rgba(250,204,21,0.25)]
          shadow-[0_0_25px_rgba(250,204,21,0.25),0_0_8px_rgba(250,204,21,0.4)]
          px-5 py-4
          animate-[fadeIn_0.5s_ease]
        "
      >
        {/* WARNING STICKER */}
        <span
          className="
            absolute -top-3 left-4
            text-[10px]
            bg-yellow-400
            text-black
            font-semibold
            px-2 py-1
            rounded-md
            tracking-wide
          "
        >
          ⚠️ SYSTEM NOTICE
        </span>

        {/* <p className="text-xs text-gray-300 leading-relaxed mt-1"> */}
        <p className="text-[12px] text-gray-300 leading-snug mt-1">
        Desktop viewing recommended to access the complete system interface.
        </p>
      </div>

    </div>
  );
}