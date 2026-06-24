import type { Metadata } from "next";
import { config } from "@/data/config";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Read technical articles and deep-dives by Navinder on blockchain security, AI research, smart contract auditing, and systems engineering.",
  openGraph: {
    title: "Blog | Navinder — Web3 Security & AI Research",
    description:
      "Read technical articles and deep-dives by Navinder on blockchain security, AI research, smart contract auditing, and systems engineering.",
    url: `${config.site}/blogs`,
    images: [
      {
        url: "/assets/image.png",
        width: 1200,
        height: 630,
        alt: "Navinder's Blog",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Navinder — Web3 Security & AI Research",
    description:
      "Read technical articles and deep-dives by Navinder on blockchain security, AI research, smart contract auditing, and systems engineering.",
    images: ["/assets/image.png"],
  },
};

export default function BlogsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
