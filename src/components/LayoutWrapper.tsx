"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

export default function LayoutWrapper({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    // Check if we are in the ICT AI Tutor portal
    const isPortal = pathname?.startsWith("/n-code");

    return (
        <>
            {!isPortal && <Header />}
            {children}
            {!isPortal && <Footer />}
        </>
    );
}
