"use client";

import React from "react";
import { GraduationCap, HelpCircle, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PortalHeaderProps {
    onMenuClick?: () => void;
}

export const PortalHeader = ({ onMenuClick }: PortalHeaderProps) => {
    return (
        <header className="h-16 bg-white border-b border-slate-200 fixed top-0 right-0 left-0 z-40 flex items-center justify-between px-4 md:px-6 lg:ml-64 transition-all duration-300">

            <div className="flex items-center gap-3">
                <button
                    onClick={onMenuClick}
                    className="lg:hidden p-2 -ml-2 text-slate-500 hover:bg-slate-100 rounded-md"
                >
                    <Menu size={24} />
                </button>
                <h2 className="text-slate-700 font-semibold text-lg md:block">
                    Dashboard
                </h2>
            </div>

            <div className="flex items-center gap-3 md:gap-4 ml-auto">
                <Button variant="ghost" size="icon" className="text-slate-400 hover:text-slate-600 hidden sm:flex">
                    <HelpCircle size={20} />
                </Button>

                <div className="h-8 w-[1px] bg-slate-200 mx-1 hidden sm:block"></div>

                <div className="flex items-center gap-3">
                    <div className="text-right hidden md:block">
                        <p className="text-sm font-medium text-slate-700">Parent / Guardian</p>
                        <p className="text-xs text-slate-400">Guest Access</p>
                    </div>
                    <div className="h-8 w-8 md:h-9 md:w-9 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 border border-blue-200">
                        <User size={18} />
                    </div>
                </div>
            </div>
        </header>
    );
};
