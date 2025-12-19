"use client";

import React, { useState } from "react";
import { PortalHeader } from "./PortalHeader";
import { PortalSidebar } from "./PortalSidebar";

export const PortalLayout = ({ children }: { children: React.ReactNode }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="bg-slate-50 min-h-screen">
            <PortalSidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
            <PortalHeader onMenuClick={() => setIsSidebarOpen(true)} />

            {/* Main Content Area */}
            <main className="lg:ml-64 pt-16 min-h-screen p-6 md:p-8 lg:p-10 transition-all duration-300">
                {children}
            </main>
        </div>
    );
};
