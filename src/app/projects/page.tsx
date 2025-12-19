"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePreloader } from "@/components/preloader";

const PROJECTS = [
  {
    id: 1,
    name: "DeFiSync",
    description: "A cutting-edge DeFi synchronization platform that enables seamless cross-chain asset management and real-time portfolio tracking across multiple blockchain networks.",
    link: "https://defisync.io",
  },
  {
    id: 2,
    name: "TicketBase",
    description: "Revolutionary blockchain-based ticketing platform that eliminates fraud and scalping while providing transparent, secure event access management.",
    link: "https://ticketbase.io",
  },
  {
    id: 3,
    name: "Compliance Link",
    description: "Enterprise-grade compliance management solution that streamlines regulatory workflows and ensures seamless adherence to global standards.",
    link: "https://compliancelink.io",
  },
  {
    id: 4,
    name: "AuditWarp",
    description: "Advanced smart contract auditing platform powered by AI that identifies vulnerabilities and ensures blockchain security at scale.",
    link: "https://auditwarp.io",
  },
  {
    id: 5,
    name: "CyberVault",
    description: "Next-generation encrypted storage solution combining zero-knowledge proofs with decentralized infrastructure for ultimate data security.",
    link: "https://cybervault.io",
  },
  {
    id: 6,
    name: "SuiSend",
    description: "Lightning-fast payment protocol built on Sui blockchain, enabling instant cross-border transactions with minimal fees.",
    link: "https://suisend.io",
  },
  {
    id: 7,
    name: "RaceCraft",
    description: "Immersive racing simulation platform with real-time telemetry, competitive leaderboards, and blockchain-verified achievements.",
    link: "https://racecraft.io",
  },
  {
    id: 8,
    name: "BaseNFT",
    description: "Premier NFT marketplace on Base L2, featuring gas-optimized minting, curated collections, and creator royalty protection.",
    link: "https://basenft.io",
  },
  {
    id: 9,
    name: "ETHKL Scroll",
    description: "Ethereum Kuala Lumpur's official Scroll L2 integration hub, providing developer tools and community resources for zkEVM development.",
    link: "https://ethkl-scroll.io",
  },
];

function ProjectModal({ project, onClose }: { project: typeof PROJECTS[0]; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-lg shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-8 border-b border-gray-200 dark:border-zinc-800">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-200">
            {project.name}
          </h2>
        </div>

        {/* Content */}
        <div className="p-8">
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
            {project.description}
          </p>

          {/* Action buttons */}
          <div className="flex gap-4">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-900 px-6 py-3 rounded-lg font-semibold text-center hover:bg-gray-700 dark:hover:bg-gray-300 transition-colors duration-200"
            >
              Visit Project →
            </a>
            <button
              onClick={onClose}
              className="px-6 py-3 border border-gray-300 dark:border-zinc-700 text-gray-700 dark:text-gray-300 rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors duration-200"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Page() {
  const [selectedProject, setSelectedProject] = useState<typeof PROJECTS[0] | null>(null);
  const { bypassLoading } = usePreloader();

  useEffect(() => {
    bypassLoading();
  }, [bypassLoading]);

  return (
    <>
      <section id="projects" className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <Link href={"#projects"}>
          <h2
            className={cn(
              "bg-clip-text text-4xl text-center text-transparent md:text-7xl pt-16 mb-16",
              "bg-gradient-to-b from-black/80 to-black/50",
              "dark:bg-gradient-to-b dark:from-white/80 dark:to-white/20 dark:bg-opacity-50"
            )}
          >
            PROJECTS
          </h2>
        </Link>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="cursor-pointer p-6 border border-gray-200 dark:border-zinc-800 rounded-lg hover:border-gray-400 dark:hover:border-zinc-600 transition-colors duration-200 bg-white/50 dark:bg-transparent"
              >
                <h3 className="text-xl md:text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-3">
                  {project.name}
                </h3>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 line-clamp-3">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}

export default Page;
