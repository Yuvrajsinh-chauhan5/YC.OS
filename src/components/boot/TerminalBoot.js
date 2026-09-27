// "use client";

// import { useEffect, useState } from "react";

// const logs = [
//   "[SYSTEM] Boot sequence initiated...",
//   "[KERNEL] Loading core runtime modules...",
//   "[MEMORY] Initializing execution environment...",
//   "[NETWORK] Establishing secure connection...",
//   "[SECURITY] Applying authentication layer (JWT / session control)...",
//   "[SERVICE] Starting application services...",
//   "[DATABASE] Connecting to data layer...",
//   "[BUILD] Compiling project modules...",
//   "[INDEX] Mapping system architecture...",
//   "[STATUS] System integrity verified",
//   "[ACCESS GRANTED] System ready for execution — Welcome, Engineer."
// ];

// export default function TerminalBoot({ onComplete }) {
//   const [lines, setLines] = useState([]);

//   useEffect(() => {
//     let i = 0;
//     let mounted = true;

//     function pushLine() {
//       if (!mounted) return;

//       setLines((prev) => [...prev, logs[i]]);
//       i++;

//       if (i < logs.length) {
//         setTimeout(pushLine, 350 + Math.random() * 500);
//       } else {
//         setTimeout(() => {
//           onComplete?.();
//         }, 1200);
//       }
//     }

//     pushLine();

//     return () => {
//       mounted = false;
//     };
//   }, [onComplete]);

//   return (
//     <div className="fixed inset-0 bg-black text-green-400 font-mono p-8 flex flex-col">

//       {/* SYSTEM HEADER */}
//       <p className="text-gray-500 text-xs tracking-widest mb-4">
//         YC.OS SYSTEM v3.1.0 :: BOOT SEQUENCE
//       </p>

//       <p className="text-gray-400 text-sm">
//         yuvrajsinh@portfolio:~$ boot --init
//       </p>

//       {/* LOG OUTPUT */}
//       <div className="mt-4 space-y-1 text-sm leading-relaxed">
//         {lines.map((line, index) => (
//           <p key={index} className="opacity-90">
//             {line}
//           </p>
//         ))}
//       </div>

//       {/* CURSOR */}
//       <p className="mt-3 animate-pulse text-green-300">█</p>

//       {/* COMPLETION STATE FEEL */}
//       {lines.length === logs.length && (
//         <p className="mt-4 text-cyan-400 text-sm animate-pulse">
//           SYSTEM READY █
//         </p>
//       )}

//     </div>
//   );
// }



// enhanced version 

// "use client";

// import { useEffect, useState } from "react";

// const logs = [
//   "[SYSTEM] Boot sequence initiated...",
//   "[KERNEL] Loading core runtime modules...",
//   "[MEMORY] Initializing execution environment...",
//   "[NETWORK] Establishing secure connection...",
//   "[SECURITY] Applying authentication layer (JWT / session control)...",
//   "[SERVICE] Starting application services...",
//   "[DATABASE] Connecting to data layer...",
//   "[BUILD] Compiling project modules...",
//   "[INDEX] Mapping system architecture...",
//   "[STATUS] System integrity verified",
//   "[ACCESS GRANTED] System ready for execution — Welcome, Engineer."
// ];


// /* =========================================================
//    TERMINAL DISPLAY
//    VISUAL LAYER ONLY
// ========================================================= */

// function TerminalDisplay({ lines }) {
//   const [visibleLines, setVisibleLines] = useState([]);
//   const [currentText, setCurrentText] = useState("");
//   const [lineIndex, setLineIndex] = useState(0);
//   const [charIndex, setCharIndex] = useState(0);

//   const currentLine = lines[lineIndex];

//   useEffect(() => {
//     if (!currentLine) return;

//     /*
//      * TYPE CURRENT LINE
//      *
//      * Fast enough to keep up with the original
//      * boot sequence while still visibly typing.
//      */

//     if (charIndex < currentLine.length) {
//       const timer = setTimeout(() => {
//         const nextCharIndex = charIndex + 1;

//         setCurrentText(
//           currentLine.slice(0, nextCharIndex)
//         );

//         setCharIndex(nextCharIndex);
//       }, 14);

//       return () => clearTimeout(timer);
//     }

//     /*
//      * CURRENT LINE FINISHED
//      *
//      * Move completed line into the terminal history.
//      */

//     const timer = setTimeout(() => {
//       setVisibleLines((prev) => [
//         ...prev,
//         currentLine,
//       ]);

//       setCurrentText("");
//       setCharIndex(0);
//       setLineIndex((prev) => prev + 1);
//     }, 80);

//     return () => clearTimeout(timer);
//   }, [currentLine, charIndex]);


//   return (
//     <div
//     className="
//       relative
//       w-full
//       overflow-hidden
//       rounded-2xl
//       border border-gray-800/90
//       bg-black/70
//       backdrop-blur-sm
//     "
//       style={{
//         boxShadow:
//           "0 0 35px rgba(0,191,255,0.045), inset 0 0 25px rgba(255,255,255,0.012)",
//       }}
//     >

//       {/* =====================================================
//           TOP GLOW
//       ===================================================== */}

//       <div
//         className="
//           absolute
//           inset-x-6
//           top-0
//           h-px
//           bg-gradient-to-r
//           from-transparent
//           via-cyan-400/45
//           to-transparent
//         "
//       />


//       {/* =====================================================
//           TERMINAL HEADER
//       ===================================================== */}

//       <div
//         className="
//           flex
//           items-center
//           justify-between
//           border-b
//           border-gray-800/70
//           px-5
//           py-3.5
//         "
//       >

//         <div className="flex items-center gap-2">

//           <span className="h-2 w-2 rounded-full bg-red-400/60" />

//           <span className="h-2 w-2 rounded-full bg-yellow-400/50" />

//           <span className="h-2 w-2 rounded-full bg-green-400/60" />

//         </div>


//         <span
//           className="
//             font-mono
//             text-[8px]
//             uppercase
//             tracking-[0.18em]
//             text-gray-600
//           "
//         >
//           boot.shell
//         </span>


//         <span
//           className="
//             font-mono
//             text-[8px]
//             text-gray-700
//           "
//         >
//           YC.OS
//         </span>

//       </div>


//       {/* =====================================================
//           TERMINAL BODY
//       ===================================================== */}

// <div
//   className="
//     min-h-[520px]
//     px-5
//     py-5
//     sm:px-6
//   "
// >

//         {/* PATH */}

//         <div
//           className="
//             mb-5
//             font-mono
//             text-[9px]
//             text-gray-700
//           "
//         >
//           ~/yc.dev/system $
//         </div>


//         <div
//           className="
//             space-y-2
//             font-mono
//             text-[10px]
//             leading-5
//             sm:text-[11px]
//           "
//         >

//           {/* =================================================
//               BOOT COMMAND
//           ================================================= */}

//           <div className="mb-3 flex gap-2">

//             <span className="text-gray-500">
//               &gt;
//             </span>

//             <span className="text-cyan-300/90">
//               boot --init
//             </span>

//           </div>


//           {/* =================================================
//               COMPLETED LINES
//           ================================================= */}

//           {visibleLines.map((line, index) => (

//             <div
//               key={`${index}-${line}`}
//               className="flex gap-2"
//             >

//               <span className="text-cyan-400/80">
//                 →
//               </span>

//               <span
//                 className={
//                   line === logs[logs.length - 1]
//                     ? "text-cyan-300"
//                     : "text-gray-400"
//                 }
//               >
//                 {line}
//               </span>

//             </div>

//           ))}


//           {/* =================================================
//               CURRENTLY TYPING LINE
//           ================================================= */}

//           {currentLine && (

//             <div className="flex gap-2">

//               <span className="text-cyan-400/80">
//                 →
//               </span>

//               <span className="text-cyan-300/90">

//                 {currentText}

//                 <span
//                   className="
//                     ml-1
//                     inline-block
//                     h-3.5
//                     w-[5px]
//                     translate-y-[2px]
//                     animate-pulse
//                     bg-cyan-400/80
//                   "
//                 />

//               </span>

//             </div>

//           )}


//           {/* =================================================
//               FINAL PROMPT
//           ================================================= */}

//           {lineIndex >= logs.length && (

//             <div className="mt-3 text-cyan-400">

//               <span className="text-gray-600">
//                 ~/yc.dev/system $
//               </span>

//               {" "}

//               <span className="animate-pulse">
//                 █
//               </span>

//             </div>

//           )}

//         </div>
//       </div>


//       {/* =====================================================
//           TERMINAL FOOTER
//       ===================================================== */}

//       <div
//         className="
//           flex
//           items-center
//           justify-between
//           border-t
//           border-gray-800/70
//           px-5
//           py-3.5
//           sm:px-6
//         "
//       >

//         <span
//           className="
//             font-mono
//             text-[8px]
//             uppercase
//             tracking-[0.15em]
//             text-gray-700
//           "
//         >
//           system boot sequence
//         </span>


//         <span
//           className="
//             flex
//             items-center
//             gap-2
//             font-mono
//             text-[8px]
//             uppercase
//             tracking-[0.12em]
//             text-gray-600
//           "
//         >

//           <span
//             className="h-1.5 w-1.5 rounded-full bg-cyan-400"
//             style={{
//               boxShadow:
//                 "0 0 7px rgba(0,191,255,0.65)",
//             }}
//           />

//           {lineIndex >= logs.length
//             ? "ready"
//             : "booting"}

//         </span>

//       </div>

//     </div>
//   );
// }


// /* =========================================================
//    MAIN TERMINAL BOOT
// ========================================================= */

// export default function TerminalBoot({ onComplete }) {
//   const [lines, setLines] = useState([]);

//   /*
//    * ========================================================
//    * ORIGINAL WORKING BOOT LOGIC
//    *
//    * DO NOT CHANGE.
//    * ========================================================
//    */

//   useEffect(() => {
//     let i = 0;
//     let mounted = true;

//     function pushLine() {
//       if (!mounted) return;

//       setLines((prev) => [...prev, logs[i]]);
//       i++;

//       if (i < logs.length) {
//         setTimeout(pushLine, 350 + Math.random() * 500);
//       } else {
//         setTimeout(() => {
//           onComplete?.();
//         }, 1200);
//       }
//     }

//     pushLine();

//     return () => {
//       mounted = false;
//     };
//   }, [onComplete]);


//   return (
//     <div
//       className="
//         fixed
//         inset-0
//         flex
//         flex-col
//         bg-black
//         px-5
//         py-8
//         font-mono
//         text-green-400
//         sm:px-8
//       "
//     >

//       {/* SYSTEM HEADER */}

//       <p
//         className="
//           mb-4
//           text-xs
//           tracking-widest
//           text-gray-500
//         "
//       >
//         YC.OS SYSTEM v3.1.0 :: BOOT SEQUENCE
//       </p>


//       {/* SKILLS-STYLE TERMINAL */}

//       <TerminalDisplay lines={lines} />

//     </div>
//   );
// }


"use client";

import { useEffect, useState } from "react";

const logs = [
  "[SYSTEM] Boot sequence initiated...",
  "[KERNEL] Loading core runtime modules...",
  "[MEMORY] Initializing execution environment...",
  "[NETWORK] Establishing secure connection...",
  "[SECURITY] Applying authentication layer (JWT / session control)...",
  "[SERVICE] Starting application services...",
  "[DATABASE] Connecting to data layer...",
  "[BUILD] Compiling project modules...",
  "[INDEX] Mapping system architecture...",
  "[STATUS] System integrity verified",
  "[ACCESS GRANTED] System ready for execution — Welcome, Engineer.",
];


/* =========================================================
   TERMINAL DISPLAY
   VISUAL LAYER
========================================================= */

function TerminalDisplay({ lines, onVisualComplete }) {
  const [visibleLines, setVisibleLines] = useState([]);
  const [currentText, setCurrentText] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  const currentLine = lines[lineIndex];

  /*
   * ========================================================
   * TYPE CURRENT LINE
   *
   * The parent controls when logs become available.
   * This component controls how those logs are displayed.
   * ========================================================
   */

  useEffect(() => {
    if (!currentLine) return;

    /*
     * --------------------------------------------------------
     * STILL TYPING CURRENT LINE
     * --------------------------------------------------------
     */

    if (charIndex < currentLine.length) {
      const timer = setTimeout(() => {
        const nextCharIndex = charIndex + 1;

        setCurrentText(
          currentLine.slice(0, nextCharIndex)
        );

        setCharIndex(nextCharIndex);
      }, 14);

      return () => {
        clearTimeout(timer);
      };
    }


    /*
     * --------------------------------------------------------
     * CURRENT LINE IS COMPLETELY TYPED
     * --------------------------------------------------------
     *
     * Move the completed line into terminal history.
     */

    const timer = setTimeout(() => {
      const isLastLine =
        lineIndex === logs.length - 1;

      setVisibleLines((prev) => {
        /*
         * Safety guard against duplicate insertion.
         */
        if (prev.length > lineIndex) {
          return prev;
        }

        return [...prev, currentLine];
      });

      setCurrentText("");
      setCharIndex(0);
      setLineIndex((prev) => prev + 1);


      /*
       * ======================================================
       * FINAL VISUAL COMPLETION
       * ======================================================
       *
       * IMPORTANT:
       *
       * Do NOT call onComplete immediately here.
       *
       * React still has to render the final state:
       *
       * visibleLines = all logs
       * lineIndex = logs.length
       *
       * Therefore wait until the next animation frame before
       * starting the final 1200ms hold.
       *
       * This guarantees the final log has actually reached
       * the rendered terminal before the boot transition.
       * ======================================================
       */

      if (isLastLine) {
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            onVisualComplete?.();
          });
        });
      }
    }, 80);

    return () => {
      clearTimeout(timer);
    };
  }, [currentLine, charIndex, lineIndex]);


  return (
    <div
      className="
        relative
        w-full
        overflow-hidden
        rounded-2xl
        border border-gray-800/90
        bg-black/70
        backdrop-blur-sm
      "
      style={{
        boxShadow:
          "0 0 35px rgba(0,191,255,0.045), inset 0 0 25px rgba(255,255,255,0.012)",
      }}
    >

      {/* =====================================================
          TOP GLOW
      ===================================================== */}

      <div
        className="
          absolute
          inset-x-6
          top-0
          h-px
          bg-gradient-to-r
          from-transparent
          via-cyan-400/45
          to-transparent
        "
      />


      {/* =====================================================
          TERMINAL HEADER
      ===================================================== */}

      <div
        className="
          flex
          items-center
          justify-between
          border-b
          border-gray-800/70
          px-5
          py-3.5
        "
      >

        <div className="flex items-center gap-2">

          <span className="h-2 w-2 rounded-full bg-red-400/60" />

          <span className="h-2 w-2 rounded-full bg-yellow-400/50" />

          <span className="h-2 w-2 rounded-full bg-green-400/60" />

        </div>


        <span
          className="
            font-mono
            text-[8px]
            uppercase
            tracking-[0.18em]
            text-gray-600
          "
        >
          boot.shell
        </span>


        <span
          className="
            font-mono
            text-[8px]
            text-gray-700
          "
        >
          YC.OS
        </span>

      </div>


      {/* =====================================================
          TERMINAL BODY
      ===================================================== */}

      <div
        className="
          min-h-[520px]
          px-5
          py-5
          sm:px-6
        "
      >

        {/* PATH */}

        <div
          className="
            mb-5
            font-mono
            text-[9px]
            text-gray-700
          "
        >
          ~/yc.dev/system $
        </div>


        <div
          className="
            space-y-2
            font-mono
            text-[10px]
            leading-5
            sm:text-[11px]
          "
        >

          {/* =================================================
              BOOT COMMAND
          ================================================= */}

          <div className="mb-3 flex gap-2">

            <span className="text-gray-500">
              &gt;
            </span>

            <span className="text-cyan-300/90">
              boot --init
            </span>

          </div>


          {/* =================================================
              COMPLETED LINES
          ================================================= */}

          {visibleLines.map((line, index) => (

            <div
              key={`${index}-${line}`}
              className="flex gap-2"
            >

              <span className="text-cyan-400/80">
                →
              </span>

              <span
  className={
    line === logs[logs.length - 1]
      ? "text-cyan-300"
      : "text-gray-400"
  }
>
  <span className="text-gray-600">
    ~/yc.dev/system $
  </span>{" "}
  {line}
</span>

            </div>

          ))}


          {/* =================================================
              CURRENTLY TYPING LINE
          ================================================= */}

          {currentLine && (

            <div className="flex gap-2">

              <span className="text-cyan-400/80">
                →
              </span>

              <span className="text-cyan-300/90">

<span className="text-gray-600">
  ~/yc.dev/system $
</span>{" "}

{currentText}

<span
  className="
    ml-1
    inline-block
    h-3.5
    w-[5px]
    translate-y-[2px]
    animate-pulse
    bg-cyan-400/80
  "
/>

</span>

            </div>

          )}


          {/* =================================================
              FINAL PROMPT
          ================================================= */}

          {lineIndex >= logs.length && (

            <div className="mt-3 text-cyan-400">

              <span className="text-gray-600">
                ~/yc.dev/system $
              </span>

              {" "}

              <span className="animate-pulse">
                █
              </span>

            </div>

          )}

        </div>
      </div>


      {/* =====================================================
          TERMINAL FOOTER
      ===================================================== */}

      <div
        className="
          flex
          items-center
          justify-between
          border-t
          border-gray-800/70
          px-5
          py-3.5
          sm:px-6
        "
      >

        <span
          className="
            font-mono
            text-[8px]
            uppercase
            tracking-[0.15em]
            text-gray-700
          "
        >
          system boot sequence
        </span>


        <span
          className="
            flex
            items-center
            gap-2
            font-mono
            text-[8px]
            uppercase
            tracking-[0.12em]
            text-gray-600
          "
        >

          <span
            className="h-1.5 w-1.5 rounded-full bg-cyan-400"
            style={{
              boxShadow:
                "0 0 7px rgba(0,191,255,0.65)",
            }}
          />

          {lineIndex >= logs.length
            ? "ready"
            : "booting"}

        </span>

      </div>

    </div>
  );
}


/* =========================================================
   MAIN TERMINAL BOOT
========================================================= */

export default function TerminalBoot({ onComplete }) {
  const [lines, setLines] = useState([]);

  /*
   * ========================================================
   * ORIGINAL PRODUCTION BOOT SCHEDULER
   *
   * This is intentionally based on the bugless version.
   *
   * - First line immediately
   * - Following lines every 350–850ms
   *
   * There is NO completion timer here because the enhanced
   * terminal needs to finish visually first.
   * ========================================================
   */

  useEffect(() => {
    let i = 0;
    let mounted = true;
    let timer = null;

    function pushLine() {
      if (!mounted) return;

      setLines((prev) => [
        ...prev,
        logs[i],
      ]);

      i++;

      if (i < logs.length) {
        timer = setTimeout(
          pushLine,
          350 + Math.random() * 500
        );
      }
    }

    pushLine();

    return () => {
      mounted = false;

      if (timer) {
        clearTimeout(timer);
      }
    };
  }, []);


  /*
   * ========================================================
   * FINAL BOOT HANDOFF
   *
   * TerminalDisplay calls this ONLY after the final line has
   * been completely typed and rendered.
   *
   * Then we preserve the original production 1200ms hold.
   *
   * FINAL LINE RENDERED
   *        ↓
   *     1200ms
   *        ↓
   *    onComplete()
   *        ↓
   *    Home.handleBoot()
   *        ↓
   *    showBoot = false
   *        ↓
   *    HOME CONTENT
   * ========================================================
   */

  const handleVisualComplete = () => {
    const timer = setTimeout(() => {
      onComplete?.();
    }, 2200);

    /*
     * The parent remains mounted during this period because
     * Home has not received onComplete yet.
     *
     * The timer intentionally represents the original
     * production completion delay.
     */
    return timer;
  };


  return (
    <div
      className="
        fixed
        inset-0
        flex
        flex-col
        bg-black
        px-5
        py-8
        font-mono
        text-green-400
        sm:px-8
      "
    >

      {/* SYSTEM HEADER */}

      <p
        className="
          mb-4
          text-xs
          tracking-widest
          text-gray-500
        "
      >
        YC.OS SYSTEM v3.1.0 :: BOOT SEQUENCE
      </p>


      {/* ENHANCED TERMINAL */}

      <TerminalDisplay
        lines={lines}
        onVisualComplete={handleVisualComplete}
      />

    </div>
  );
}