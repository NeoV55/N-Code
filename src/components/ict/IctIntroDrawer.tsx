"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap } from "lucide-react";

export const IctIntroDrawer = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Animate the loading bar from 0 to 100
        const duration = 5000; // 5 seconds
        const interval = 20; // Update every 20ms
        const increment = 100 / (duration / interval);

        const progressTimer = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(progressTimer);
                    return 100;
                }
                return prev + increment;
            });
        }, interval);

        // Keep the drawer visible for the duration of the loading, then slide it up
        const visibilityTimer = setTimeout(() => {
            setIsVisible(false);
        }, duration + 500); // Slight delay after reach 100%

        return () => {
            clearInterval(progressTimer);
            clearTimeout(visibilityTimer);
        };
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 0 }}
                    exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
                    className="fixed inset-0 z-50 bg-[#0078D7] flex flex-col items-center justify-center text-white"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="text-center space-y-6 w-full max-w-lg px-6"
                    >
                        <div className="bg-white/20 p-6 rounded-full inline-flex mb-2 backdrop-blur-sm">
                            <GraduationCap size={64} className="text-white" />
                        </div>

                        <div className="space-y-2">
                            <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
                                Welcome to <span className="text-blue-200">Ict AI Tutor Edu Portal</span>
                            </h1>
                            <p className="text-large md:text-md text-blue-100/80 font-large">
                                by N-Code-labs
                            </p>
                        </div>

                        <p className="text-lg text-blue-100 max-w-md mx-auto">
                            Empowering the next generation with future-ready skills.
                        </p>

                        {/* Game-style loading bar */}
                        <div className="w-full space-y-2 pt-4">
                            <div className="flex justify-between items-end mb-1">
                                <span className="text-xs font-mono uppercase tracking-widest text-blue-200">Systems Initialization</span>
                                <span className="text-xs font-mono text-blue-200">{Math.round(progress)}%</span>
                            </div>
                            <div className="w-full h-4 bg-blue-900/30 rounded-full border border-blue-400/30 p-1 backdrop-blur-sm overflow-hidden shadow-inner">
                                <motion.div
                                    className="h-full bg-gradient-to-r from-blue-400 to-cyan-300 rounded-full relative"
                                    style={{ width: `${progress}%` }}
                                    transition={{ type: "spring", bounce: 0, duration: 0.2 }}
                                >
                                    {/* Scanning effect */}
                                    <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
                                    <div className="absolute top-0 bottom-0 right-0 w-8 bg-white/40 blur-sm"></div>
                                </motion.div>
                            </div>
                            <div className="flex justify-center">
                                <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-blue-300/60 animate-pulse">
                                    Loading Educational Assets...
                                </span>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
