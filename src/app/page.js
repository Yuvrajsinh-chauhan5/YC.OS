// "use client";

// import { useEffect, useState } from "react";
// import TerminalBoot from "@/components/boot/TerminalBoot";

// import HeroSection from "@/components/home/HeroSection";
// import FlowNavigator from "@/components/home/FlowNavigator";
// import ProjectsPreview from "@/components/home/ProjectsPreview";
// import AchievementOrbit from "@/components/home/AchievementOrbit";
// import SkillsPreview from "@/components/home/SkillsPreview";

// export default function Home() {
//   const [booted, setBooted] = useState(false);
//   const [ready, setReady] = useState(false);

//   useEffect(() => {
//     const done = sessionStorage.getItem("booted");
//     if (done === "true") setBooted(true);
//     setReady(true);
//   }, []);

//   const handleBoot = () => {
//     sessionStorage.setItem("booted", "true");
//     setBooted(true);
//   };

//   if (!ready) return null;

//   if (!booted) {
//     return <TerminalBoot onComplete={handleBoot} />;
//   }

//  return (
//   <div className="space-y-24 md:space-y-32">

//     <section id="home">
//       <HeroSection />
//     </section>

//     <FlowNavigator />

//     <section id="skills">
//       <SkillsPreview />
//     </section>

//     <section id="featured-systems">
//       <ProjectsPreview />
//     </section>

//     <section id="achievements">
//       <AchievementOrbit />
//     </section>

//   </div>
// );
// }


"use client";

import { useEffect, useState } from "react";
import TerminalBoot from "@/components/boot/TerminalBoot";

import HeroSection from "@/components/home/HeroSection";
import FlowNavigator from "@/components/home/FlowNavigator";
import ProjectsPreview from "@/components/home/ProjectsPreview";
import AchievementOrbit from "@/components/home/AchievementOrbit";
import SkillsPreview from "@/components/home/SkillsPreview";





export default function Home() {
  const [booted, setBooted] = useState(false);
  const [showBoot, setShowBoot] = useState(false);

  // useEffect(() => {
  //   const alreadyBooted = localStorage.getItem("booted");

  //   if (!alreadyBooted) {
  //     setShowBoot(true);
  //   } else {
  //     setBooted(true);
  //   }
  // }, []);



  // useEffect(() => {
  //   const bootTime = localStorage.getItem("bootedAt");
  
  //   const TEN_MIN = 10 * 60 * 1000;
  
  //   if (!bootTime) {
  //     setShowBoot(true);
  //     return;
  //   }
  
  //   const diff = Date.now() - Number(bootTime);
  
  //   if (diff > TEN_MIN) {
  //     // expired → show boot again
  //     localStorage.removeItem("bootedAt");
  //     setShowBoot(true);
  //   } else {
  //     setBooted(true);
  //   }
  // }, []);



  useEffect(() => {
    const bootTime = localStorage.getItem("bootedAt");
  
    // const TEN_MIN = 10 * 60 * 1000;
    const THIRTY_MIN = 30 * 60 * 1000;
  
    if (!bootTime) {
      setShowBoot(true);
  
      // ✅ MOBILE FAILSAFE
      setTimeout(() => {
        setShowBoot(false);
        setBooted(true);
      }, 9000); // force exit boot
  
      return;
    }
  
    const diff = Date.now() - Number(bootTime);
  
    // if (diff > TEN_MIN)
    if (diff > THIRTY_MIN)  {
      localStorage.removeItem("bootedAt");
      setShowBoot(true);
  
      setTimeout(() => {
        setShowBoot(false);
        setBooted(true);
      }, 9000);
    } else {
      setBooted(true);
    }
  }, []);

  const handleBoot = () => {
    // localStorage.setItem("booted", "true");
    localStorage.setItem("bootedAt", Date.now());
    setBooted(true);

    setTimeout(() => {
      setShowBoot(false);
    }, 500);
  };

  return (
    <>
    
      {showBoot && <TerminalBoot onComplete={handleBoot} />}
      
      <div className="space-y-24 md:space-y-32">
     
        <section id="home">
          <HeroSection />
        </section>

        <FlowNavigator />

        <section id="skills">
          <SkillsPreview />
        </section>

        <section id="featured-systems">
          <ProjectsPreview />
        </section>

        <section id="achievements">
          <AchievementOrbit />
        </section>
      </div>
    </>
  );
}














// "use client";

// import { useEffect, useState } from "react";

// import TerminalBoot from "@/components/boot/TerminalBoot";
// import HeroSection from "@/components/home/HeroSection";
// import FlowNavigator from "@/components/home/FlowNavigator";
// import ProjectsPreview from "@/components/home/ProjectsPreview";
// import AchievementOrbit from "@/components/home/AchievementOrbit";
// import SkillsPreview from "@/components/home/SkillsPreview";

// export default function Home() {
//   const [booted, setBooted] = useState(false);
//   const [checking, setChecking] = useState(true);

//   useEffect(() => {
//     const done = sessionStorage.getItem("booted");

//     if (done === "true") {
//       setBooted(true);
//     }

//     setChecking(false);
//   }, []);

//   const handleBoot = () => {
//     sessionStorage.setItem("booted", "true");
//     setBooted(true);
//   };

//   // 🔥 IMPORTANT: block rendering until storage is read
//   if (checking) return null;

//   if (!booted) {
//     return <TerminalBoot onComplete={handleBoot} />;
//   }

//   return (
//     <div className="space-y-24 md:space-y-32">
//       <section id="home">
//         <HeroSection />
//       </section>

//       <FlowNavigator />

//       <section id="skills">
//         <SkillsPreview />
//       </section>

//       <section id="featured-systems">
//         <ProjectsPreview />
//       </section>

//       <section id="achievements">
//         <AchievementOrbit />
//       </section>
//     </div>
//   );
// }






// "use client";

// import { useEffect, useState } from "react";

// import TerminalBoot from "@/components/boot/TerminalBoot";
// import HeroSection from "@/components/home/HeroSection";
// import FlowNavigator from "@/components/home/FlowNavigator";
// import ProjectsPreview from "@/components/home/ProjectsPreview";
// import AchievementOrbit from "@/components/home/AchievementOrbit";
// import SkillsPreview from "@/components/home/SkillsPreview";

// export default function Home() {
//   const [mounted, setMounted] = useState(false);
//   const [booted, setBooted] = useState(false);

//   useEffect(() => {
//     setMounted(true);

//     const done = typeof window !== "undefined"
//       ? sessionStorage.getItem("booted")
//       : null;

//     if (done === "true") {
//       setBooted(true);
//     }
//   }, []);

//   const handleBoot = () => {
//     sessionStorage.setItem("booted", "true");
//     setBooted(true);
//   };

//   // 🚨 CRITICAL: block SSR mismatch completely
//   if (!mounted) return null;

//   if (!booted) {
//     return <TerminalBoot onComplete={handleBoot} />;
//   }

//   return (
//     <div className="space-y-24 md:space-y-32">
//       <section id="home">
//         <HeroSection />
//       </section>

//       <FlowNavigator />

//       <section id="skills">
//         <SkillsPreview />
//       </section>

//       <section id="featured-systems">
//         <ProjectsPreview />
//       </section>

//       <section id="achievements">
//         <AchievementOrbit />
//       </section>
//     </div>
//   );
// }













// "use client";

// import { useEffect, useState } from "react";

// import TerminalBoot from "@/components/boot/TerminalBoot";
// import HeroSection from "@/components/home/HeroSection";
// import FlowNavigator from "@/components/home/FlowNavigator";
// import ProjectsPreview from "@/components/home/ProjectsPreview";
// import AchievementOrbit from "@/components/home/AchievementOrbit";
// import SkillsPreview from "@/components/home/SkillsPreview";

// export default function Home() {
//   const [booted, setBooted] = useState(false);

//   useEffect(() => {
//     const done = sessionStorage.getItem("booted");
//     if (done === "true") setBooted(true);
//   }, []);

//   const handleBoot = () => {
//     sessionStorage.setItem("booted", "true");
//     setBooted(true);
//   };

//   if (typeof window === "undefined") return null;

//   if (!booted) {
//     return <TerminalBoot onComplete={handleBoot} />;
//   }

//   return (
//     <div className="space-y-24 md:space-y-32">
//       <section id="home">
//         <HeroSection />
//       </section>

//       <FlowNavigator />

//       <section id="skills">
//         <SkillsPreview />
//       </section>

//       <section id="featured-systems">
//         <ProjectsPreview />
//       </section>

//       <section id="achievements">
//         <AchievementOrbit />
//       </section>
//     </div>
//   );
// }













// "use client";

// import { useEffect, useState } from "react";

// import TerminalBoot from "@/components/boot/TerminalBoot";
// import HeroSection from "@/components/home/HeroSection";
// import FlowNavigator from "@/components/home/FlowNavigator";
// import ProjectsPreview from "@/components/home/ProjectsPreview";
// import AchievementOrbit from "@/components/home/AchievementOrbit";
// import SkillsPreview from "@/components/home/SkillsPreview";

// export default function Home() {
//   const [mounted, setMounted] = useState(false);
//   const [showBoot, setShowBoot] = useState(true);

//   useEffect(() => {
//     setMounted(true);

//     // safe read AFTER mount only (important for mobile Safari)
//     const done = sessionStorage.getItem("booted");

//     if (done === "true") {
//       setShowBoot(false);
//     }
//   }, []);

//   const handleBoot = () => {
//     sessionStorage.setItem("booted", "true");
//     setShowBoot(false);
//   };

//   // IMPORTANT: prevent hydration issues
//   if (!mounted) return null;

//   return (
//     <>
//       {showBoot && <TerminalBoot onComplete={handleBoot} />}

//       {/* APP ALWAYS RENDERS */}
//       <div className="space-y-24 md:space-y-32">
//         <section id="home">
//           <HeroSection />
//         </section>

//         <FlowNavigator />

//         <section id="skills">
//           <SkillsPreview />
//         </section>

//         <section id="featured-systems">
//           <ProjectsPreview />
//         </section>

//         <section id="achievements">
//           <AchievementOrbit />
//         </section>
//       </div>
//     </>
//   );
// }




























// "use client";

// import { useState } from "react";

// import TerminalBoot from "@/components/boot/TerminalBoot";
// import HeroSection from "@/components/home/HeroSection";
// import FlowNavigator from "@/components/home/FlowNavigator";
// import ProjectsPreview from "@/components/home/ProjectsPreview";
// import AchievementOrbit from "@/components/home/AchievementOrbit";
// import SkillsPreview from "@/components/home/SkillsPreview";

// export default function Home() {
//   const [bootDone, setBootDone] = useState(false);

//   if (!bootDone) {
//     return <TerminalBoot onComplete={() => setBootDone(true)} />;
//   }

//   return (
//     <div className="space-y-24 md:space-y-32">
//       <section id="home">
//         <HeroSection />
//       </section>

//       <FlowNavigator />

//       <section id="skills">
//         <SkillsPreview />
//       </section>

//       <section id="featured-systems">
//         <ProjectsPreview />
//       </section>

//       <section id="achievements">
//         <AchievementOrbit />
//       </section>
//     </div>
//   );
// }
