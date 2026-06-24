import type { Metadata, Viewport } from "next";
import { Inter, Archivo_Black } from "next/font/google";
import "./globals.css";
import ElasticCursor from "@/components/ui/ElasticCursor";
import Particles from "@/components/Particles";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header/header";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Footer from "@/components/footer/footer";
import LayoutWrapper from "@/components/LayoutWrapper";
import Script from "next/script";
import Preloader from "@/components/preloader";
import EasterEggs from "@/components/easter-eggs";
import { config } from "@/data/config";
import SocketContextProvider from "@/contexts/socketio";
import RemoteCursors from "@/components/realtime/remote-cursors";
import { Archivo } from "next/font/google";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  metadataBase: new URL(config.site),
  // Using a template helps Google understand the relationship between pages
  title: {
    default: "Navinder | Web3 Security Architect",
    template: `%s | Navinder`,
  },
  description: config.description.long,
  keywords: config.keywords,
  authors: [{ name: config.author }],
  openGraph: {
    title: "Navinder | Web3 Security Architect",
    description: config.description.short,
    url: config.site,
    siteName: "Navinder",
    images: [
      {
        url: "/assets/image.png",
        width: 1200,
        height: 630,
        alt: "Navinder | Web3 Security Architect, AI Researcher & Systems Engineer",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Navinder | Web3 Security Architect",
    description: config.description.short,
    site: "@Navinder_05",
    creator: "@Navinder_05",
    images: ["/assets/image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  weight: "400", // Archivo Black only supports 400 (which is actually weight 900)
  variable: "--font-display",
});

const archivoRegular = Archivo({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // JSON-LD is the most important part for fixing the circled area in your image
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Navinder",
 // "alternateName": ["Navinder", "Navinder Tech Portfolio"],
    "url": "https://navinder.tech",
  };

  return (
    <html 
      lang="en" 
      className={[inter.variable, archivoBlack.variable, "font-display"].join(" ")} 
      suppressHydrationWarning
    >
      <head>
        <Script
          defer
          src={process.env.UMAMI_DOMAIN}
          data-website-id={process.env.UMAMI_SITE_ID}
        />
        {/* Schema.org script for Google Site Name */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange
        >
          <Particles
            className="fixed inset-0 -z-10 animate-fade-in"
            quantity={100}
          />
          <Preloader>
            <SocketContextProvider>
              <RemoteCursors />
              <TooltipProvider>
                <LayoutWrapper>
                  {children}
                </LayoutWrapper>
              </TooltipProvider>
            </SocketContextProvider>
            <Toaster />
            <EasterEggs />
            <ElasticCursor />
          </Preloader>
        </ThemeProvider>
      </body>
    </html>
  );
}
