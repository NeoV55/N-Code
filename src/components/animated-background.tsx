"use client";
import React, { Suspense, useEffect, useRef, useState } from "react";
import { Application, SPEObject, SplineEvent } from "@splinetool/runtime";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const Spline = React.lazy(() => import("@splinetool/react-spline"));
import { Skill, SkillNames, SKILLS } from "@/data/constants";
import { sleep } from "@/lib/utils";
import { useMediaQuery } from "@/hooks/use-media-query";
import { usePreloader } from "./preloader";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import { Section, getKeyboardState } from "./animated-background-config";

gsap.registerPlugin(ScrollTrigger);

interface AnimatedBackgroundProps {
  showKeyboard?: boolean;
}

const AnimatedBackground = ({ showKeyboard = true }: AnimatedBackgroundProps) => {
  const { isLoading, bypassLoading } = usePreloader();
  const { theme } = useTheme();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const splineContainer = useRef<HTMLDivElement>(null);
  const [splineApp, setSplineApp] = useState<Application>();

  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const [activeSection, setActiveSection] = useState<Section>("hero");

  const bongoAnimationRef = useRef<{ start: () => void; stop: () => void }>();
  const keycapAnimationsRef = useRef<{ start: () => void; stop: () => void }>();
  const [keyboardRevealed, setKeyboardRevealed] = useState(false);
  const keyboardKilledRef = useRef(false); // 🔧 FIX: lock for killed keyboard
  const router = useRouter();

  // --- Event Handlers ---
  const handleMouseHover = (e: SplineEvent) => {
    if (!splineApp || keyboardKilledRef.current) return; // 🔧 FIX
    if (selectedSkill?.name === e.target.name) return;

    if (e.target.name === "body" || e.target.name === "platform") {
      setSelectedSkill(null);
      splineApp.setVariable("heading", "");
      splineApp.setVariable("desc", "");
    } else {
      const skill = SKILLS[e.target.name as SkillNames];
      if (skill) setSelectedSkill(skill);
    }
  };

  const handleSplineInteractions = () => {
    if (!splineApp || keyboardKilledRef.current) return; // 🔧 FIX

    splineApp.addEventListener("keyUp", () => {
      if (keyboardKilledRef.current) return;
      splineApp.setVariable("heading", "");
      splineApp.setVariable("desc", "");
    });

    splineApp.addEventListener("keyDown", (e) => {
      if (keyboardKilledRef.current) return;
      const skill = SKILLS[e.target.name as SkillNames];
      if (!skill) return;
      setSelectedSkill(skill);
      splineApp.setVariable("heading", skill.label);
      splineApp.setVariable("desc", skill.shortDescription);
    });

    splineApp.addEventListener("mouseHover", handleMouseHover);
  };

  // --- Animation Helpers ---
  const createSectionTimeline = (
    triggerId: string,
    targetSection: Section,
    prevSection: Section,
    start: string = "top 50%",
    end: string = "bottom bottom"
  ) => {
    if (!splineApp || keyboardKilledRef.current) return;
    const kbd = splineApp.findObjectByName("keyboard");
    if (!kbd) return;

    gsap.timeline({
      scrollTrigger: {
        trigger: triggerId,
        start,
        end,
        scrub: true,
        onEnter: () => {
          if (keyboardKilledRef.current) return;
          setActiveSection(targetSection);
          const state = getKeyboardState({ section: targetSection, isMobile });
          gsap.to(kbd.scale, { ...state.scale, duration: 1 });
          gsap.to(kbd.position, { ...state.position, duration: 1 });
          gsap.to(kbd.rotation, { ...state.rotation, duration: 1 });
        },
        onLeaveBack: () => {
          if (keyboardKilledRef.current) return;
          setActiveSection(prevSection);
          const state = getKeyboardState({ section: prevSection, isMobile });
          gsap.to(kbd.scale, { ...state.scale, duration: 1 });
          gsap.to(kbd.position, { ...state.position, duration: 1 });
          gsap.to(kbd.rotation, { ...state.rotation, duration: 1 });
        },
      },
    });
  };

  const setupScrollAnimations = () => {
    if (!splineApp || !splineContainer.current || keyboardKilledRef.current) return;
    const kbd = splineApp.findObjectByName("keyboard");
    if (!kbd) return;

    const heroState = getKeyboardState({ section: "hero", isMobile });
    gsap.set(kbd.scale, heroState.scale);
    gsap.set(kbd.position, heroState.position);

    // Only create scroll trigger for skills section
    // Keyboard will be hidden on about, projects, and contact pages
    createSectionTimeline("#skills", "skills", "hero");

    // Set up scroll triggers to detect when entering about/projects/contact sections
    // This will hide the keyboard when scrolling away from skills
    gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        start: "top 50%",
        end: "bottom bottom",
        scrub: true,
        onEnter: () => {
          if (keyboardKilledRef.current) return;
          setActiveSection("about");
        },
        onLeaveBack: () => {
          if (keyboardKilledRef.current) return;
          setActiveSection("skills");
        },
      },
    });

    gsap.timeline({
      scrollTrigger: {
        trigger: "#projects",
        start: "top 50%",
        end: "bottom bottom",
        scrub: true,
        onEnter: () => {
          if (keyboardKilledRef.current) return;
          setActiveSection("projects");
        },
        onLeaveBack: () => {
          if (keyboardKilledRef.current) return;
          setActiveSection("about");
        },
      },
    });

    gsap.timeline({
      scrollTrigger: {
        trigger: "#contact",
        start: "top 50%",
        end: "bottom bottom",
        scrub: true,
        onEnter: () => {
          if (keyboardKilledRef.current) return;
          setActiveSection("contact");
        },
        onLeaveBack: () => {
          if (keyboardKilledRef.current) return;
          setActiveSection("projects");
        },
      },
    });
  };

  const getBongoAnimation = () => {
    if (!splineApp) return { start: () => { }, stop: () => { } };
    const framesParent = splineApp.findObjectByName("bongo-cat");
    const frame1 = splineApp.findObjectByName("frame-1");
    const frame2 = splineApp.findObjectByName("frame-2");
    if (!frame1 || !frame2 || !framesParent) return { start: () => { }, stop: () => { } };

    let interval: NodeJS.Timeout;
    return {
      start: () => {
        if (keyboardKilledRef.current) return;
        let i = 0;
        framesParent.visible = true;
        interval = setInterval(() => {
          frame1.visible = i % 2 === 0;
          frame2.visible = i % 2 !== 0;
          i++;
        }, 100);
      },
      stop: () => {
        clearInterval(interval);
        framesParent.visible = false;
        frame1.visible = false;
        frame2.visible = false;
      },
    };
  };

  const getKeycapsAnimation = () => {
    if (!splineApp) return { start: () => { }, stop: () => { } };

    let tweens: gsap.core.Tween[] = [];
    const removePrevTweens = () => tweens.forEach((t) => t.kill());

    const start = () => {
      removePrevTweens();
      Object.values(SKILLS)
        .sort(() => Math.random() - 0.5)
        .forEach((skill, idx) => {
          const keycap = splineApp.findObjectByName(skill.name);
          if (!keycap) return;
          const t = gsap.to(keycap.position, {
            y: Math.random() * 200 + 200,
            duration: Math.random() * 2 + 2,
            delay: idx * 0.6,
            repeat: -1,
            yoyo: true,
            yoyoEase: "none",
            ease: "elastic.out(1,0.3)",
          });
          tweens.push(t);
        });
    };

    const stop = () => {
      removePrevTweens();
      Object.values(SKILLS).forEach((skill) => {
        const keycap = splineApp.findObjectByName(skill.name);
        if (!keycap) return;
        const t = gsap.to(keycap.position, {
          y: 0,
          duration: 4,
          repeat: 1,
          ease: "elastic.out(1,0.7)",
        });
        tweens.push(t);
      });
      setTimeout(removePrevTweens, 1000);
    };

    return { start, stop };
  };

  const updateKeyboardTransform = async () => {
    if (!splineApp) return;
    const kbd = splineApp.findObjectByName("keyboard");
    if (!kbd) return;

    // If showKeyboard is false, hide keyboard and return
    if (!showKeyboard) {
      kbd.visible = false;
      return;
    }

    // Prevent keyboard reveal on non-keyboard sections
    if (activeSection === "about" || activeSection === "projects" || activeSection === "contact") {
      kbd.visible = false;
      setKeyboardRevealed(true); // preventing it from running again
      return;
    }

    kbd.visible = false;
    await sleep(400);
    kbd.visible = true;
    setKeyboardRevealed(true);

    const currentState = getKeyboardState({ section: activeSection, isMobile });
    gsap.fromTo(
      kbd.scale,
      { x: 0.01, y: 0.01, z: 0.01 },
      {
        ...currentState.scale,
        duration: 1.5,
        ease: "elastic.out(1, 0.6)",
      }
    );

    const allObjects = splineApp.getAllObjects();
    const keycaps = allObjects.filter((obj) => obj.name === "keycap");

    await sleep(900);

    if (isMobile) {
      const mobileKeyCaps = allObjects.filter((obj) => obj.name === "keycap-mobile");
      mobileKeyCaps.forEach((keycap) => { keycap.visible = true; });
    } else {
      const desktopKeyCaps = allObjects.filter((obj) => obj.name === "keycap-desktop");
      desktopKeyCaps.forEach(async (keycap, idx) => {
        await sleep(idx * 70);
        keycap.visible = true;
      });
    }

    keycaps.forEach(async (keycap, idx) => {
      keycap.visible = false;
      await sleep(idx * 70);
      keycap.visible = true;
      gsap.fromTo(
        keycap.position,
        { y: 200 },
        { y: 50, duration: 0.5, delay: 0.1, ease: "bounce.out" }
      );
    });
  };

  // --- Kill Keyboard ---
  const killKeyboard = () => {
    if (!splineApp) return;

    const kbd = splineApp.findObjectByName("keyboard");
    if (!kbd) return;

    // Kill all GSAP animations affecting keyboard
    gsap.killTweensOf(kbd.position);
    gsap.killTweensOf(kbd.rotation);
    gsap.killTweensOf(kbd.scale);

    // 🔧 FIX: kill scroll triggers touching keyboard
    ScrollTrigger.getAll().forEach(t => t.kill());

    // Hide keyboard completely
    kbd.visible = false;

    // Stop child animations (keycaps, bongo, etc.)
    bongoAnimationRef.current?.stop();
    keycapAnimationsRef.current?.stop();

    // Clear text
    splineApp.setVariable("heading", "");
    splineApp.setVariable("desc", "");
  };

  // --- Effects ---
  useEffect(() => {
    if (!splineApp) return;
    handleSplineInteractions();
    setupScrollAnimations();
    bongoAnimationRef.current = getBongoAnimation();
    keycapAnimationsRef.current = getKeycapsAnimation();
    return () => {
      bongoAnimationRef.current?.stop();
      keycapAnimationsRef.current?.stop();
    };
  }, [splineApp, isMobile]);

  // URL hash detection for keyboard visibility
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');

      // Update activeSection based on URL hash
      if (hash === 'about' || hash === 'projects' || hash === 'contact') {
        setActiveSection(hash as Section);
      } else if (hash === 'skills') {
        setActiveSection('skills');
      } else if (hash === '' || hash === 'hero') {
        setActiveSection('hero');
      }
    };

    // Check hash on mount
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [splineApp]); // Run when splineApp loads to ensure keyboard can be controlled



  // Handle keyboard text visibility based on theme and section
  useEffect(() => {
    if (!splineApp) return;
    const textDesktopDark = splineApp.findObjectByName("text-desktop-dark");
    const textDesktopLight = splineApp.findObjectByName("text-desktop");
    const textMobileDark = splineApp.findObjectByName("text-mobile-dark");
    const textMobileLight = splineApp.findObjectByName("text-mobile");

    if (!textDesktopDark || !textDesktopLight || !textMobileDark || !textMobileLight) return;

    const setVisibility = (
      dDark: boolean,
      dLight: boolean,
      mDark: boolean,
      mLight: boolean
    ) => {
      textDesktopDark.visible = dDark;
      textDesktopLight.visible = dLight;
      textMobileDark.visible = mDark;
      textMobileLight.visible = mLight;
    };

    if (activeSection !== "skills") {
      setVisibility(false, false, false, false);
    } else if (theme === "dark") {
      isMobile
        ? setVisibility(false, false, false, true)
        : setVisibility(false, true, false, false);
    } else {
      isMobile
        ? setVisibility(false, false, true, false)
        : setVisibility(true, false, false, false);
    }
  }, [theme, splineApp, isMobile, activeSection]);

  // Handle keyboard press interaction
  useEffect(() => {
    if (!selectedSkill || !splineApp) return;
    splineApp.setVariable("heading", selectedSkill.label);
    splineApp.setVariable("desc", selectedSkill.shortDescription);
  }, [selectedSkill]);

  // Handle rotation and teardown animations based on active section
  useEffect(() => {
    if (!splineApp) return;

    let rotateKeyboard: gsap.core.Tween | undefined;

    const kbd = splineApp.findObjectByName("keyboard");

    if (kbd && showKeyboard) {
      rotateKeyboard = gsap.to(kbd.rotation, {
        y: Math.PI * 2 + kbd.rotation.y,
        duration: 10,
        repeat: -1,
        yoyo: true,
        yoyoEase: true,
        ease: "back.inOut",
        delay: 2.5,
        paused: true, // Start paused
      });
    }

    const manageAnimations = async () => {
      if (!kbd || !showKeyboard) return;

      // Reset text if not in skills
      if (activeSection !== "skills") {
        splineApp.setVariable("heading", "");
        splineApp.setVariable("desc", "");
      }

      // Handle keyboard visibility and animations based on section
      if (activeSection === "hero" || activeSection === "skills") {
        // ENTER ANIMATION
        // If keyboard was hidden or scaled down, animate it in
        if (!kbd.visible || kbd.scale.x < 0.1) {
          kbd.visible = true;
          // Kill any exit animations
          gsap.killTweensOf(kbd.rotation);
          gsap.killTweensOf(kbd.scale);

          // Spin and scale in
          gsap.fromTo(
            kbd.scale,
            { x: 0, y: 0, z: 0 },
            { x: 1, y: 1, z: 1, duration: 1, ease: "back.out(1.7)", overwrite: true }
          );
          gsap.fromTo(
            kbd.rotation,
            { y: kbd.rotation.y - Math.PI },
            {
              y: kbd.rotation.y, duration: 1, ease: "power2.out", overwrite: true, onComplete: () => {
                if (activeSection === "hero") rotateKeyboard?.restart();
              }
            }
          );
        } else {
          if (activeSection === "hero") rotateKeyboard?.restart();
        }

        if (activeSection === "skills") {
          rotateKeyboard?.pause();
        }

        bongoAnimationRef.current?.stop();
        keycapAnimationsRef.current?.stop();

      } else if (activeSection === "about" || activeSection === "projects" || activeSection === "contact") {
        // EXIT ANIMATION
        // Only if it's currently visible
        if (kbd.visible) {
          rotateKeyboard?.kill();

          // Spin and scale out
          gsap.to(kbd.rotation, {
            y: kbd.rotation.y + Math.PI,
            duration: 0.8,
            ease: "power2.in",
            overwrite: true
          });

          gsap.to(kbd.scale, {
            x: 0, y: 0, z: 0,
            duration: 0.8,
            ease: "back.in(1.7)",
            overwrite: true,
            onComplete: () => {
              kbd.visible = false;
            }
          });
        }

        // Stop child animations
        bongoAnimationRef.current?.stop();
        keycapAnimationsRef.current?.stop();

        setKeyboardRevealed(false);
      }
      // Handle Bongo Cat for projects section


    };

    manageAnimations();

    return () => {
      rotateKeyboard?.kill();
    };
  }, [activeSection, splineApp]);

  // Reveal keyboard on load/route change
  useEffect(() => {
    // Don't use router.push here as it conflicts with hash-based navigation
    // The hash is already managed by the hashchange listener above
    // const hash = activeSection === "hero" ? "#" : `#${activeSection}`;
    // router.push("/" + hash, { scroll: false });

    if (!splineApp || isLoading || keyboardRevealed) return;
    updateKeyboardTransform();
  }, [splineApp, isLoading, activeSection]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Spline
        ref={splineContainer}
        onLoad={(app: Application) => {
          setSplineApp(app);
          bypassLoading();
        }}
        scene="/assets/skills-keyboard.spline"
      />
    </Suspense>
  );
};

export default AnimatedBackground;