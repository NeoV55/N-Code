"use client";

import React, { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

import cpteImage from "@/app/hieraci/badges/cpte.png";
import cpte1Image from "@/app/hieraci/badges/cpte1.png";
import ciseImage from "@/app/hieraci/badges/cise.png";
import mcpImage from "@/app/hieraci/badges/mcp.png";
import ciscoImage from "@/app/hieraci/badges/cisco-1.png";
import mcaImage from "@/app/hieraci/badges/mca.png";
import mcsaImage from "@/app/hieraci/badges/MCSA.png";
import ccnaImage from "@/app/hieraci/badges/ccna.png";
import basedImage from "@/app/hieraci/badges/base.png";
import scrollImage from "@/app/hieraci/badges/scroll.png";
import jpkImage from "@/app/hieraci/badges/jpk.png";

const BADGES = [
  {
    id: "CPTE",
    name: "Certified Penetration Testing Engineer (Mile2)",
    description:
      "NIST, NICE, DoD 8140/8570, FBI, ISO/IEC 17024. Advanced training for professionals to master the cybersecurity landscape, ethical hacking techniques, and vulnerability assessment.",
    image: cpteImage.src,
  },
  {
    id: "CPTE",
    name: "Certified Penetration Testing Engineer (Mile2)",
    description:
      "NIST, NICE, DoD 8140/8570, FBI, ISO/IEC 17024.",
    image: cpte1Image.src,
  },
  {
    id: "CISE",
    name: "Certified Information Security Expert (InnoBuzz)",
    description:
      "ISO/IEC 27001, OWASP, IT ACT, Industry Best Practices. Expertise in both defensive and offensive security strategies to protect critical digital infrastructure and information assets.",
    image: ciseImage.src,
  },
  {
    id: "MCP",
    name: "Microsoft Certified Professional",
    description:
      "ISO/IEC 27017/27018, Microsoft Product Standards. Validates technical expertise and professional skills through industry-recognized evaluations of Microsoft technologies and solutions.",
    image: mcpImage.src,
  },
  {
    id: "CISCO",
    name: "Cisco Certified Specialist",
    description:
      "IEEE, IETF RFCs, ANSI/ISO/IEC 17024. Focuses on specific technology focus areas, validating deep technical knowledge in specialized Cisco networking domains.",
    image: ciscoImage.src,
  },
  {
    id: "MCA",
    name: "Microsoft Certified Associate",
    description:
      "ISO/IEC 27017/27018, NIST SP 800-53, Microsoft Product Standards. Demonstrates the core technical skills required to build, manage, and optimize modern digital environments and cloud services.",
    image: mcaImage.src,
  },
  {
    id: "MCSA",
    name: "Microsoft Certified Solutions Associate: Windows Server 2012",
    description:
      "ISO/IEC 27017/27018, DoD 8140/8570, NIST SP 800-53, Microsoft Product Standards. Mastery in server administration, infrastructure configuration, and the management of enterprise-level Windows Server environments.",
    image: mcsaImage.src,
  },
  {
    id: "CCNA",
    name: "Cisco Certified Network Associate",
    description:
      "IEEE, IETF RFCs, ANSI/ISO/IEC 17024. The industry standard for foundational networking, covering routing, switching, wireless access, and security fundamentals.",
    image: ccnaImage.src,
  },
  {
    id: "BASED",
    name: "Builder at Based SEA - Base Around The World SouthEast Asia",
    description:
      "Recognition for developing decentralized applications and contributing to the Base ecosystem within the Southeast Asian Web3 community.",
    image: basedImage.src,
  },
  {
    id: "SCROLL",
    name: "ETHKL2024 Scroll Hacker",
    description:
      "Acknowledgment for technical innovation and building scalable solutions on the Scroll zkEVM Layer 2 network during the ETHKL hackathon.",
    image: scrollImage.src,
  },
  {
    id: "JPK",
    name: "Jabatan Pembangunan Kemahiran (JPK) - Malaysia",
    description:
      "NOSS (Malaysia), MQF Level 2/3. SKM (Level 2) Pembantu Juruteknik Komputer II and SKM (Level 3) Juruteknik Komputer III. Professional vocational qualification recognizing technical competency in computer systems and maintenance under the Malaysian National Occupational Skills Standards.",
    image: jpkImage.src,
  },
];

// Badge card — styled to match Services cards
const BadgeItem = ({
  badge,
  onClick,
}: {
  badge: typeof BADGES[0];
  onClick: (badge: typeof BADGES[0]) => void;
}) => (
  <div
    onClick={() => onClick(badge)}
    className="
      w-24 h-24 md:w-32 md:h-32
      flex-shrink-0
      cursor-pointer
      rounded-2xl
      bg-white/70 dark:bg-black/70
      backdrop-blur-md
      border border-black/5 dark:border-white/10
      shadow-xl
      flex items-center justify-center
      transition-transform duration-700
      hover:scale-105
    "
  >
    {badge.image ? (
      <img
        src={badge.image}
        alt={badge.name}
        className="
          w-full h-full object-contain p-4
          grayscale-[0.15]
          hover:grayscale-0
          transition-all duration-700
        "
      />
    ) : (
      <span className="text-xs font-medium text-zinc-500 tracking-wide">
        {badge.id}
      </span>
    )}
  </div>
);

// Carousel (logic unchanged, visual smoothing only)
const BadgeCarousel = () => {
  const [selectedBadge, setSelectedBadge] =
    useState<typeof BADGES[0] | null>(null);

  const topRowBadges = BADGES.filter((_, i) => i % 2 === 0);
  const bottomRowBadges = BADGES.filter((_, i) => i % 2 !== 0);

  const topScrollBadges = [...topRowBadges, ...topRowBadges];
  const bottomScrollBadges = [...bottomRowBadges, ...bottomRowBadges];

  return (
    <div className="overflow-hidden w-full py-6 relative">
      <div className="flex animate-scroll-left space-x-6 hover:pause-scroll will-change-transform">
        {topScrollBadges.map((badge, index) => (
          <BadgeItem
            key={`top-${index}`}
            badge={badge}
            onClick={setSelectedBadge}
          />
        ))}
      </div>

      <div className="flex animate-scroll-right space-x-6 mt-6 hover:pause-scroll will-change-transform">
        {bottomScrollBadges.map((badge, index) => (
          <BadgeItem
            key={`bottom-${index}`}
            badge={badge}
            onClick={setSelectedBadge}
          />
        ))}
      </div>

      {selectedBadge && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="bg-white dark:bg-zinc-900 rounded-2xl p-6 max-w-sm w-full relative shadow-xl">
            <button
              className="absolute top-3 right-3 text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white text-xl font-bold"
              onClick={() => setSelectedBadge(null)}
            >
              &times;
            </button>

            <div className="w-full h-40 bg-zinc-50 dark:bg-zinc-800/50 rounded-xl mb-4 flex items-center justify-center">
              <img
                src={selectedBadge.image}
                alt={selectedBadge.name}
                className="max-h-full max-w-full object-contain p-6"
              />
            </div>

            <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
              {selectedBadge.name}
            </h3>

            <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-400">
              {selectedBadge.description}
            </p>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes scroll-right {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(50%);
          }
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

// Main About section
const ProfileSummary: React.FC = () => {
  return (
    <section id="about" className="min-h-screen max-w-7xl mx-auto px-4">
      <Link href="#about">
        <h2
          className={cn(
            "bg-clip-text text-4xl text-center text-transparent md:text-7xl pt-16 mb-12",
            "bg-gradient-to-b from-black/80 to-black/50",
            "dark:bg-gradient-to-b dark:from-white/80 dark:to-white/20"
          )}
        >
          ABOUT
        </h2>
      </Link>

      <div className="max-w-4xl mx-auto space-y-10 text-center md:text-left">
        <h3 className="text-2xl md:text-3xl font-semibold text-zinc-900 dark:text-zinc-100 leading-snug">
          Cross-Domain Technologist and Systems Engineer dedicated to architecting
          and securing the future of decentralized infrastructure
        </h3>

        <div className="font-normal">
          <p className="font-sans font-normal text-base md:text-xl text-zinc-1000 dark:text-zinc-400">
            My work exists at the intersection of Cybersecurity, Blockchain
            Architecture, and Artificial Intelligence, where I bridge the gap
            between physical hardware optimization and high-level software
            intelligence. With over a decade of experience ranging from managing
            global enterprise IT operations to engineering autonomous Web3
            protocols. I have developed a unique perspective on building resilient,
            high-performance systems from the ground up.
          </p>
  
          <BadgeCarousel />

          {/* Centered caption added here */}
          <div className="text-center mt-2 mb-8">
            <p className="text-sm md:text-base font-normal text-zinc-500 dark:text-zinc-500 italic">
              "Professional Certifications and Credential Social Proof"
            </p>
          </div>
  
          <p className="font-sans font-normal text-base md:text-xl text-zinc-1000 dark:text-zinc-400">
            Driven by a security-first philosophy, I specialize in navigating the
            complexities of modern engineering, whether that involves auditing
            smart contracts, optimizing high compute hardware farms, or deploying
            machine learning models to solve intricate problems. My approach
            combines the technical rigor of a penetration tester with the strategic
            vision of a systems architect, ensuring that innovation never comes at
            the expense of integrity. I thrive on solving deep-domain challenges
            and remain committed to the continuous pursuit of technical excellence
            in an ever-evolving digital landscape.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProfileSummary;
