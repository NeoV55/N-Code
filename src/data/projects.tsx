import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import defisyncImg from "@/data/Folderwlogo/Gemini_Generated_Image_5ys34l5ys34l5ys3.png";
import ticketbaseImg from "@/data/Folderwlogo/ticketbase1.png";
import compliancelinkImg from "@/data/Folderwlogo/Gemini_Generated_Image_6zmro26zmro26zmr.png";
import auditwarpImg from "@/data/Folderwlogo/Gemini_Generated_Image_f636u4f636u4f636.png";
import cybervaultImg from "@/data/Folderwlogo/cybervault-logo.png";
import suisendImg from "@/data/Folderwlogo/Gemini_Generated_Image_fvpb0kfvpb0kfvpb.png";
import racecraftImg from "@/data/Folderwlogo/RaceCraftAI-GR.png";
import basenftImg from "@/data/Folderwlogo/Gemini_Generated_Image_jh733pjh733pjh73.png";
import ethklImg from "@/data/Folderwlogo/Gemini_Generated_Image_wwtns0wwtns0wwtn.png";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
  SiSolidity,
  SiRust,
  SiFastapi,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
  solidity: {
    title: "Solidity",
    bg: "black",
    fg: "white",
    icon: <SiSolidity />,
  },
  rust: {
    title: "Rust",
    bg: "black",
    fg: "white",
    icon: <SiRust />,
  },
  fastapi: {
    title: "FastAPI",
    bg: "black",
    fg: "white",
    icon: <SiFastapi />,
  },
  sui: {
    title: "Sui",
    bg: "black",
    fg: "white",
    icon: "💧", // Using emoji as placeholder if icon unavailable
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
  quote?: string;
  author?: string;
  description?: string;
};
const projects: Project[] = [
  {
    id: "defisync",
    category: "DeFi",
    title: "DeFiSync",
    src: defisyncImg.src,
    screenshots: ["landing.png"],
    skills: {
      frontend: [PROJECT_SKILLS.next, PROJECT_SKILLS.js, PROJECT_SKILLS.tailwind],
      backend: [PROJECT_SKILLS.solidity, PROJECT_SKILLS.python],
    },
    live: "https://defisync.io",
    github: "https://github.com/DEEPML1818/Cross-chain-Liquidity-Pool-Aggregator-with-AI-Optimization",
    quote: "DeFiSync has transformed how we manage liquidity across multiple chains, making it truly seamless.",
    author: "Alex Rivers, Lead Architect at DeFiChain",
    description: "A cutting-edge DeFi synchronization platform that enables seamless cross-chain asset management and real-time portfolio tracking across multiple blockchain networks.",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            {this.title}
          </TypographyP>
          <TypographyP className="font-mono ">
            A cutting-edge DeFi synchronization platform that enables seamless cross-chain asset management and real-time portfolio tracking across multiple blockchain networks.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
        </div>
      );
    },
  },
  {
    id: "ticketbase",
    category: "Ticketing",
    title: "TicketBase",
    src: ticketbaseImg.src,
    screenshots: ["landing.png"],
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.js, PROJECT_SKILLS.tailwind],
      backend: [PROJECT_SKILLS.solidity],
    },
    live: "https://ticketbase.io",
    github: "https://github.com/NeoV55/ticketbase",
    quote: "The most secure and transparent ticketing system we've ever used. Scalping is finally a thing of the past.",
    author: "Sarah Jenkins, Event Director",
    description: "Revolutionary blockchain-based ticketing platform that eliminates fraud and scalping while providing transparent, secure event access management.",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            {this.title}
          </TypographyP>
          <TypographyP className="font-mono ">
            Revolutionary blockchain-based ticketing platform that eliminates fraud and scalping while providing transparent, secure event access management.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
        </div>
      );
    },
  },
  {
    id: "compliancelink",
    category: "Compliance",
    title: "Compliance Link",
    src: compliancelinkImg.src,
    screenshots: ["landing.png"],
    skills: {
      frontend: [PROJECT_SKILLS.ts, PROJECT_SKILLS.react, PROJECT_SKILLS.tailwind],
      backend: [PROJECT_SKILLS.node, PROJECT_SKILLS.express, PROJECT_SKILLS.solidity, PROJECT_SKILLS.rust, PROJECT_SKILLS.postgres, PROJECT_SKILLS.mongo],
    },
    live: "https://compliancelink.io",
    github: "https://github.com/DEEPML1818/ComplianceLink",
    quote: "Compliance Link has cut our regulatory audit time by 70%. It's an indispensable tool for our compliance team.",
    author: "Michael Chen, Head of Regulatory Affairs",
    description: "Enterprise-grade compliance management solution that streamlines regulatory workflows and ensures seamless adherence to global standards.",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            {this.title}
          </TypographyP>
          <TypographyP className="font-mono ">
            Enterprise-grade compliance management solution that streamlines regulatory workflows and ensures seamless adherence to global standards.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
        </div>
      );
    },
  },
  {
    id: "auditwarp",
    category: "Security",
    title: "AuditWarp",
    src: auditwarpImg.src,
    screenshots: ["landing.png"],
    skills: {
      frontend: [PROJECT_SKILLS.js, PROJECT_SKILLS.next, PROJECT_SKILLS.tailwind],
      backend: [PROJECT_SKILLS.sui],
    },
    live: "https://auditwarp.io",
    github: "https://github.com/NeoV55/AuditWarp",
    quote: "AuditWarp's AI identified vulnerabilities that three human audits missed. Truly peerless security.",
    author: "David Miller, Security Researcher",
    description: "Advanced smart contract auditing platform powered by AI that identifies vulnerabilities and ensures blockchain security at scale.",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            {this.title}
          </TypographyP>
          <TypographyP className="font-mono ">
            Advanced smart contract auditing platform powered by AI that identifies vulnerabilities and ensures blockchain security at scale.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
        </div>
      );
    },
  },
  {
    id: "cybervault",
    category: "Security",
    title: "CyberVault",
    src: cybervaultImg.src,
    screenshots: ["landing.png"],
    skills: {
      frontend: [PROJECT_SKILLS.ts],
      backend: [PROJECT_SKILLS.rust],
    },
    live: "https://cybervault.io",
    github: "https://github.com/NeoV55/CyberVault",
    quote: "At last, a decentralized storage solution that doesn't compromise on speed or user experience.",
    author: "Jessica Wu, CTO of DataGuard",
    description: "Next-generation encrypted storage solution combining zero-knowledge proofs with decentralized infrastructure for ultimate data security.",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            {this.title}
          </TypographyP>
          <TypographyP className="font-mono ">
            Next-generation encrypted storage solution combining zero-knowledge proofs with decentralized infrastructure for ultimate data security.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
        </div>
      );
    },
  },
  {
    id: "suisend",
    category: "Payments",
    title: "SuiSend",
    src: suisendImg.src,
    screenshots: ["landing.png"],
    skills: {
      frontend: [PROJECT_SKILLS.ts, PROJECT_SKILLS.react, PROJECT_SKILLS.tailwind],
      backend: [PROJECT_SKILLS.sui],
    },
    live: "https://suisend.io",
    github: "https://github.com/NeoV55/SuiSend",
    quote: "Sending payments across the globe is now as fast and cheap as sending a text. A game changer.",
    author: "Robert Frost, Global Operations Manager",
    description: "Lightning-fast payment protocol built on Sui blockchain, enabling instant cross-border transactions with minimal fees.",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            {this.title}
          </TypographyP>
          <TypographyP className="font-mono ">
            Lightning-fast payment protocol built on Sui blockchain, enabling instant cross-border transactions with minimal fees.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
        </div>
      );
    },
  },
  {
    id: "racecraft",
    category: "Gaming",
    title: "RaceCraft",
    src: racecraftImg.src,
    screenshots: ["landing.png"],
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.spline, PROJECT_SKILLS.gsap],
      backend: [PROJECT_SKILLS.python, PROJECT_SKILLS.fastapi],
    },
    live: "https://racecraft.io",
    github: "https://github.com/NeoV55/RaceCraft-AI",
    quote: "The realism is breathtaking. RaceCraft has set a new gold standard for racing simulations.",
    author: "Formula 1 Enthusiast",
    description: "Immersive racing simulation platform with real-time telemetry, competitive leaderboards, and blockchain-verified achievements.",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            {this.title}
          </TypographyP>
          <TypographyP className="font-mono ">
            Immersive racing simulation platform with real-time telemetry, competitive leaderboards, and blockchain-verified achievements.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
        </div>
      );
    },
  },
  {
    id: "basenft",
    category: "NFT",
    title: "BaseNFT",
    src: basenftImg.src,
    screenshots: ["landing.png"],
    skills: {
      frontend: [PROJECT_SKILLS.next, PROJECT_SKILLS.ts, PROJECT_SKILLS.tailwind],
      backend: [PROJECT_SKILLS.node],
    },
    live: "https://basenft.io",
    quote: "The best NFT platform on Base. Period. Low fees and a great community.",
    author: "Artist & Collector",
    description: "Premier NFT marketplace on Base L2, featuring gas-optimized minting, curated collections, and creator royalty protection.",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            {this.title}
          </TypographyP>
          <TypographyP className="font-mono ">
            Premier NFT marketplace on Base L2, featuring gas-optimized minting, curated collections, and creator royalty protection.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
        </div>
      );
    },
  },
  {
    id: "ethklscroll",
    category: "Infrastructure",
    title: "ETHKL Scroll",
    src: ethklImg.src,
    screenshots: ["landing.png"],
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.ts, PROJECT_SKILLS.chakra],
      backend: [PROJECT_SKILLS.node, PROJECT_SKILLS.postgres],
    },
    live: "https://ethkl-scroll.io",
    quote: "Connecting the local Ethereum community to the world. A vital piece of infrastructure.",
    author: "Dev Relations Lead",
    description: "Ethereum Kuala Lumpur's official Scroll L2 integration hub, providing developer tools and community resources for zkEVM development.",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            {this.title}
          </TypographyP>
          <TypographyP className="font-mono ">
            Ethereum Kuala Lumpur's official Scroll L2 integration hub, providing developer tools and community resources for zkEVM development.
          </TypographyP>
          <ProjectsLinks live={this.live} />
        </div>
      );
    },
  },
];
export default projects;
