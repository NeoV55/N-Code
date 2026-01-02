"use client";
import Image from "next/image";
import React from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
  useModal,
} from "../ui/animated-modal";
import { FloatingDock } from "../ui/floating-dock";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

import SmoothScroll from "../smooth-scroll";
import projects, { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

const ProjectsSection = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [activeProject, setActiveProject] = React.useState<Project | null>(null);

  // --- AUTO ADVANCE ---
  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % projects.length);
    }, 10000); // 10 seconds
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <section id="projects" className="max-w-7xl mx-auto py-24 px-4">
      <Link href="#projects">
        <h2
          className={cn(
            "bg-clip-text text-4xl text-center text-transparent md:text-7xl",
            "bg-gradient-to-b from-black/80 to-black/50",
            "dark:bg-gradient-to-b dark:from-white/80 dark:to-white/20 mb-16"
          )}
        >
          Projects
        </h2>
      </Link>

      {/* ---------------- LOGO NAVIGATION ---------------- */}
      <div className="relative mb-8">
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 pb-4">
          {projects.map((project, index) => (
            <div
              key={project.title}
              onMouseEnter={() => setActiveIndex(index)}
              className="relative cursor-pointer px-8 py-4 flex items-center justify-center"
            >
              {/* Active Background Indicator */}
              {activeIndex === index && (
              <motion.div
                layoutId="active-bg"
                className="absolute inset-0 bg-neutral-100 dark:bg-neutral-800 rounded-lg border border-neutral-200 dark:border-neutral-700 z-0"
                initial={false}
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
              )}

              <Image
              src={project.src}
              alt={project.title}
              width={240}
              height={80}
              className={cn(
                "relative z-10 object-contain transition-all duration-300 h-16 md:h-24 w-auto",
                activeIndex === index
                ? "grayscale-0 opacity-100"
                : "grayscale opacity-40 hover:opacity-60"
              )}
              />
            </div>
          ))}
        </div>

        {/* Horizontal Line with Active Indicator */}
        <div className="relative h-px bg-neutral-200 dark:bg-neutral-800 w-full mt-4">
          <motion.div
            className="absolute h-[3px] bg-neutral-400 dark:bg-neutral-600 top-[-1px]"
            initial={false}
            animate={{
              left: `${(activeIndex / (projects.length - 1)) * 90}%`,
              width: "10%"
            }}
            transition={{ type: "spring", bounce: 0, duration: 0.5 }}
          />
        </div>
      </div>

      {/* ---------------- MAIN CONTENT AREA ---------------- */}
      <div className="mt-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col items-center justify-center"
          >

            {/* Right Side: Quote/Content */}
            <div className="max-w-xl mx-auto text-center">
              <Modal>
                <p className="text-xl md:text-3xl text-cyan-400/90 dark:text-cyan-400/80 font-medium leading-relaxed mb-6 italic">
                  “{projects[activeIndex].quote || projects[activeIndex].description || "Building the future of digital experiences with cutting-edge technology and innovative design."}”
                </p>

                <p className="text-neutral-600 dark:text-neutral-400 font-medium mb-8">
                  — {projects[activeIndex].author || "CEO & Founder, " + projects[activeIndex].title}
                </p>

                <ModalTrigger
                  onClick={() => {
                    setActiveProject(projects[activeIndex]);
                    // console.log("Opening modal for:", projects[activeIndex].title);
                  }}
                  className="group p-0 bg-transparent text-blue-500 hover:text-blue-400 transition-colors font-medium flex items-center justify-center gap-2 mx-auto"
                >
                  Read the case study
                  <span className="text-lg transition-transform group-hover:translate-x-1">›</span>
                </ModalTrigger>

                <ModalBody className="max-w-4xl max-h-[90vh] overflow-auto">
                  <SmoothScroll isInsideModal>
                    <ModalContent>
                      <ProjectContents project={projects[activeIndex]} />
                    </ModalContent>
                  </SmoothScroll>
                  <ModalFooter className="gap-4">
                    <Link href={projects[activeIndex].live} target="_blank">
                      <button className="bg-black text-white dark:bg-white dark:text-black text-sm px-4 py-2 rounded-md border">
                        Visit Website
                      </button>
                    </Link>
                  </ModalFooter>
                </ModalBody>
              </Modal>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProjectsSection;



/// ================= MODAL CONTENT =================

const ProjectContents = ({ project }: { project: Project }) => {
  return (
    <>
      <h4 className="text-lg md:text-2xl font-bold text-center mb-8">
        {project.title}
      </h4>

      <div className="flex flex-col md:flex-row md:justify-evenly mb-8">
        {project.skills.frontend?.length > 0 && (
          <div className="flex flex-col items-center gap-2">
            <p className="text-sm text-neutral-500">Frontend</p>
            <FloatingDock items={project.skills.frontend} />
          </div>
        )}

        {project.skills.backend?.length > 0 && (
          <div className="flex flex-col items-center gap-2">
            <p className="text-sm text-neutral-500">Backend</p>
            <FloatingDock items={project.skills.backend} />
          </div>
        )}
      </div>

      {project.content}
    </>
  );
};
