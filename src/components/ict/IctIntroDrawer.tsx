"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap } from "lucide-react";

export const IctIntroDrawer = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        // Keep the drawer visible for a short moment, then slide it up
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 2000); // 2 seconds delay before sliding up

        return () => clearTimeout(timer);
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
                        className="text-center space-y-4"
                    >
                        <div className="bg-white/20 p-6 rounded-full inline-flex mb-4 backdrop-blur-sm">
                            <GraduationCap size={64} className="text-white" />
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                            Welcome to <span className="text-blue-200">ICT AI Tutor</span>
                        </h1>
                        <p className="text-lg md:text-xl text-blue-100 max-w-md mx-auto">
                            Empowering the next generation with future-ready skills.
                        </p>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
