import type { Metadata } from "next";
import { config } from "@/data/config";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Navinder — a cross-domain engineer specializing in Web3 security, blockchain architecture, AI systems, and GPU infrastructure.",
  openGraph: {
    title: "About Navinder | Web3 Security Architect & AI Engineer",
    description:
      "Learn about Navinder — a cross-domain engineer specializing in Web3 security, blockchain architecture, AI systems, and GPU infrastructure.",
    url: `${config.site}/about`,
    images: [
      {
        url: "/assets/image.png",
        width: 1200,
        height: 630,
        alt: "About Navinder",
      },
    ],
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Navinder | Web3 Security Architect & AI Engineer",
    description:
      "Learn about Navinder — a cross-domain engineer specializing in Web3 security, blockchain architecture, AI systems, and GPU infrastructure.",
    images: ["/assets/image.png"],
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
