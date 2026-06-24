import type { Metadata } from "next";
import { config } from "@/data/config";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Navinder for Web3 security audits, AI research collaborations, smart contract consulting, or freelance engineering projects.",
  openGraph: {
    title: "Contact Navinder | Web3 Security & AI Consulting",
    description:
      "Get in touch with Navinder for Web3 security audits, AI research collaborations, smart contract consulting, or freelance engineering projects.",
    url: `${config.site}/contact`,
    images: [
      {
        url: "/assets/image.png",
        width: 1200,
        height: 630,
        alt: "Contact Navinder",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Navinder | Web3 Security & AI Consulting",
    description:
      "Get in touch with Navinder for Web3 security audits, AI research collaborations, smart contract consulting, or freelance engineering projects.",
    images: ["/assets/image.png"],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
