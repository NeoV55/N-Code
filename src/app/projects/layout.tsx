import type { Metadata } from "next";
import { config } from "@/data/config";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Browse Navinder's portfolio of projects spanning DeFi security, AI automation, GPU compute infrastructure, and full-stack Web3 systems.",
  openGraph: {
    title: "Projects | Navinder — Web3 Security & AI Engineer",
    description:
      "Browse Navinder's portfolio of projects spanning DeFi security, AI automation, GPU compute infrastructure, and full-stack Web3 systems.",
    url: `${config.site}/projects`,
    images: [
      {
        url: "/assets/image.png",
        width: 1200,
        height: 630,
        alt: "Navinder's Projects",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | Navinder — Web3 Security & AI Engineer",
    description:
      "Browse Navinder's portfolio of projects spanning DeFi security, AI automation, GPU compute infrastructure, and full-stack Web3 systems.",
    images: ["/assets/image.png"],
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
