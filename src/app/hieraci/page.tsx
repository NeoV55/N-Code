"use client";

import React, { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const BADGES = [
  {
    id: "CPTE",
    name: "Certified Penetration Testing Engineer",
    description: "Advanced training for professionals to master the cybersecurity landscape and ethical hacking techniques.",
    image: "/api/artifacts/cpte_badge_mockup_1766064831187.png",
  },
  {
    id: "CISE",
    name: "Certified Information Security Expert",
    description: "Expertise in both defensive and offensive security strategies to protect critical infrastructure.",
    image: "/api/artifacts/cise_badge_mockup_1766064860032.png",
  },
  {
    id: "MCP",
    name: "Microsoft Certified Professional",
    description: "Validates technical expertise through industry-recognized Microsoft technology evaluations.",
    image: "/api/artifacts/mcp_badge_mockup_1766064881633.png",
  },
  {
    id: "CCNA-S",
    name: "CCNA Security",
    description: "Cisco Certification validating the skills required to secure Cisco networks and mitigate threats.",
    image: "/api/artifacts/ccnas_badge_mockup_1766064899900.png",
  },
  {
    id: "CISCO",
    name: "Cisco Certified Specialist",
    description: "Recognized industry standard for professional-level networking and infrastructure management.",
    image: "/api/artifacts/cisco_specialist_badge_mockup_1766064915942.png",
  },
  {
    id: "MCA",
    name: "Microsoft Certified Associate",
    description: "Demonstrates core technical skills required to build and manage modern digital environments.",
    image: "/api/artifacts/mca_badge_mockup_1766064933231.png",
  },
  { id: "MCSA", name: "MCSA: Windows Server 2012", description: "Mastery in server administration, configuration, and infrastructure management." },
  { id: "CCNA", name: "CCNA", description: "Cisco Certified Network Associate: The gold standard for networking foundations and routing." },
  { id: "CPTE-M", name: "CPTE (Mile2)", description: "Specialized Penetration Testing certification focusing on advanced exploitation and vulnerability assessment." },
];

// Badge card component
const BadgeItem = ({
  badge,
  onClick,
}: {
  badge: typeof BADGES[0];
  onClick: (badge: typeof BADGES[0]) => void;
}) => (
  <div
    className="w-24 h-24 md:w-32 md:h-32 relative overflow-hidden rounded-2xl shadow-2xl flex-shrink-0 transition-transform duration-700 hover:scale-105 cursor-pointer"
    onClick={() => onClick(badge)}
  >
    {badge.image ? (
      <img
        src={badge.image}
        alt={badge.name}
        className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
      />
    ) : (
      <div className="w-full h-full bg-transparent rounded-lg flex items-center justify-center uppercase border border-zinc-800/10 dark:border-zinc-200/10">
        <span className="text-[10px] font-mono font-medium text-zinc-500/80 tracking-[0.3em]">
          {badge.id}
        </span>
      </div>
    )}
  </div>
);

// Two-row opposite scroll carousel with clickable badges & hover pause
const BadgeCarousel = () => {
  const [selectedBadge, setSelectedBadge] = useState<typeof BADGES[0] | null>(null);

  // Split badges into two rows
  const topRowBadges = BADGES.filter((_, i) => i % 2 === 0);
  const bottomRowBadges = BADGES.filter((_, i) => i % 2 !== 0);

  // Duplicate arrays for seamless scroll
  const topScrollBadges = [...topRowBadges, ...topRowBadges];
  const bottomScrollBadges = [...bottomRowBadges, ...bottomRowBadges];

  return (
    <div className="overflow-hidden w-full py-4 relative">
      {/* Top row */}
      <div className="flex animate-scroll-left space-x-4 hover:pause-scroll">
        {topScrollBadges.map((badge, index) => (
          <BadgeItem key={`top-${index}`} badge={badge} onClick={setSelectedBadge} />
        ))}
      </div>

      {/* Bottom row */}
      <div className="flex animate-scroll-right space-x-4 mt-4 hover:pause-scroll">
        {bottomScrollBadges.map((badge, index) => (
          <BadgeItem key={`bottom-${index}`} badge={badge} onClick={setSelectedBadge} />
        ))}
      </div>

      {/* Badge modal */}
      {selectedBadge && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="bg-white dark:bg-zinc-900 rounded-2xl p-6 max-w-sm w-full relative">
            <button
              className="absolute top-3 right-3 text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white text-xl font-bold"
              onClick={() => setSelectedBadge(null)}
            >
              &times;
            </button>
            {selectedBadge.image && (
              <img
                src={selectedBadge.image}
                alt={selectedBadge.name}
                className="w-full h-40 object-cover rounded-xl mb-4"
              />
            )}
            <h3 className="text-lg md:text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
              {selectedBadge.name}
            </h3>
            <p className="text-zinc-500 dark:text-zinc-400 text-sm md:text-base">
              {selectedBadge.description}
            </p>
          </div>
        </div>
      )}

      {/* CSS for continuous scroll + hover pause */}
      <style jsx>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(0); }
          100% { transform: translateX(50%); }
        }
        .animate-scroll-left {
          animation: scroll-left 30s linear infinite;
        }
        .animate-scroll-right {
          animation: scroll-right 30s linear infinite;
        }
        .hover\\:pause-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

// Main Profile section
const ProfileSummary: React.FC = () => {
  return (
    <section id="about" className="max-w-7xl mx-auto px-4 md:px-8 py-16">
      <Link href={"#about"}>
        <h2
          className={cn(
            "bg-clip-text text-4xl text-center text-transparent md:text-7xl pt-16 mb-16",
            "bg-gradient-to-b from-black/80 to-black/50",
            "dark:bg-gradient-to-b dark:from-white/80 dark:to-white/20 dark:bg-opacity-50"
          )}
        >
          ABOUT
        </h2>
      </Link>

      <div className="max-w-4xl mx-auto space-y-10 text-center md:text-left text-zinc-300">
        {/* Main Heading */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-zinc-800 dark:text-zinc-200 mb-6">
            21 Years of Experience and Collective Knowledge in Information and Computer Science
          </h3>
        </div>

        {/* Expertise */}
        <div>
          <h4 className="text-xl md:text-2xl font-semibold text-zinc-700 dark:text-zinc-300 mb-4">
            Expertise
          </h4>
          <p className="text-base md:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Experienced in ICT, AI, AGI, IoT, and IT systems, specializing in embedded systems,
            data science (Python, R), machine learning, blockchain, and fintech development.
            Expert in cybersecurity, high-level programming, and project management.
          </p>
        </div>

        {/* Badge Carousel */}
        <div className="pt-4">
          <h4 className="text-sm leading-tight tracking-[0.2em] uppercase text-zinc-500 dark:text-zinc-400 mb-6 text-center lg:text-left">
            Achievements & Milestones
          </h4>
          <BadgeCarousel />
        </div>

        {/* Clientele */}
        <div className="pt-6">
          <h4 className="text-xl md:text-2xl font-semibold text-zinc-700 dark:text-zinc-300 mb-4">
            Clientele
          </h4>
          <p className="text-base md:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
            I prioritize clear communication and regular updates to foster collaboration.
            By understanding their unique needs and providing tailored solutions,
            I aim to exceed expectations and build lasting partnerships.
          </p>
        </div>

        {/* Project Engagement */}
        <div>
          <h4 className="text-xl md:text-2xl font-semibold text-zinc-700 dark:text-zinc-300 mb-4">
            Project Engagement
          </h4>
          <p className="text-base md:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
            I approach each project with meticulous planning and execution.
            Utilizing industry-standard methodologies, I ensure efficient development cycles
            while adapting to evolving requirements for optimal outcomes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProfileSummary;
