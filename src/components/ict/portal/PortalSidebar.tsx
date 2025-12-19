"use client";

import React from "react";
import { GraduationCap, LayoutDashboard, BookOpen, FileText, ShieldAlert, LogOut, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
    { label: "Dashboard", href: "/n-code", icon: LayoutDashboard },
    { label: "Available Programs", href: "/n-code#programs", icon: BookOpen },
    { label: "Parent Resources", href: "/n-code/student-parent-consent", icon: FileText },
    { label: "Policies & Consent", href: "/n-code/student-terms-and-conditions", icon: ShieldAlert },
];

interface PortalSidebarProps {
    isOpen?: boolean;
    onClose?: () => void;
}

export const PortalSidebar = ({ isOpen, onClose }: PortalSidebarProps) => {
    const pathname = usePathname();

    return (
        <>
            {/* Mobile Overlay */}
            <div
                className={cn(
                    "fixed inset-0 bg-slate-900/50 z-40 transition-opacity lg:hidden",
                    isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                )}
                onClick={onClose}
            />

            <aside className={cn(
                "w-64 bg-slate-900 h-screen fixed left-0 top-0 z-50 flex flex-col text-white transition-transform duration-300 lg:translate-x-0",
                isOpen ? "translate-x-0" : "-translate-x-full"
            )}>
                {/* Logo Area */}
                <div className="h-16 flex items-center justify-between px-6 border-b border-slate-800">
                    <div className="flex items-center gap-3">
                        <div className="bg-blue-600 p-1.5 rounded-lg">
                            <GraduationCap size={20} className="text-white" />
                        </div>
                        <span className="font-bold text-lg tracking-wide">ICT AI Tutor</span>
                    </div>
                    {/* Close Button Mobile */}
                    <button onClick={onClose} className="lg:hidden text-slate-400 hover:text-white">
                        <X size={20} />
                    </button>
                </div>

                {/* Navigation */}
                <nav className="flex-1 py-6 px-3 space-y-1">
                    {NAV_ITEMS.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.label}
                                href={item.href}
                                onClick={onClose} // Auto close on mobile nav
                                className={cn(
                                    "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                                    isActive
                                        ? "bg-blue-600 text-white shadow-md shadow-blue-900/20"
                                        : "text-slate-400 hover:bg-slate-800 hover:text-white"
                                )}
                            >
                                <item.icon size={18} />
                                {item.label}
                            </Link>
                        );
                    })}
                </nav>

                {/* Footer / Logout */}
                <div className="p-4 border-t border-slate-800">
                    <Link
                        href="/"
                        className="flex items-center gap-3 w-full px-4 py-3 rounded-lg text-sm font-medium text-slate-400 hover:bg-slate-800 hover:text-white transition-colors"
                    >
                        <LogOut size={18} />
                        <span>Return to Home</span>
                    </Link>
                </div>
            </aside>
        </>
    );
};
