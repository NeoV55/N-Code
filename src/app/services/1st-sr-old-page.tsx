"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  FaShieldAlt,
  FaBrain,
  FaCloud,
  FaLaptopCode,
  FaNetworkWired,
  FaGraduationCap,
} from "react-icons/fa";

const SERVICES_DATA = [
  {
    title: "Cybersecurity Services",
    icon: FaShieldAlt,
    description:
      "Protection for your digital assets with enterprise-grade security protocols.",
    items: [
      "Endpoint Security",
      "Penetration Testing & Ethical Hacking",
      "Network Security Audits",
      "Blockchain Security",
    ],
  },
  {
    title: "Data Science & AI Solutions",
    icon: FaBrain,
    description:
      "Unlock actionable insights with advanced machine learning and analytics.",
    items: [
      "Data Lakes, Warehouses & Pipelines",
      "Machine Learning Solutions",
      "AI-Driven Blockchain Solutions",
    ],
  },
  {
    title: "Cloud & Virtualization Solutions",
    icon: FaCloud,
    description:
      "Scalable infrastructure designed for resilience and performance.",
    items: [
      "Cloud Infrastructure Management",
      "Virtualization Solutions",
      "Disaster Recovery & Backup",
    ],
  },
  {
    title: "Software, Blockchain and AI Developments",
    icon: FaLaptopCode,
    description:
      "Bespoke software tailored to your unique business requirements.",
    items: [
      "Custom Application Development",
      "Smart Contract Development",
      "DevOps & CI/CD Implementation",
      "Machine Learning Model Development",
      "Web and Mobile App Developments",
    ],
  },
  {
    title: "ICT Services, Ops and Management",
    icon: FaNetworkWired,
    description:
      "Strategic IT operations to optimize efficiency and reliable growth.",
    items: [
      "ITSM Optimization",
      "Project Management",
      "Managed Services Provider",
      "Business Solutions",
      "Consulting",
    ],
  },
  {
    title: "Education and Publications",
    icon: FaGraduationCap,
    description:
      "Empowering minds through comprehensive ICT and cybersecurity education.",
    items: [
      "Cybersecurity Training",
      "ICT Trainings",
      "Technical Writings",
      "CS Engineering Writings",
      "Coding Classes",
    ],
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="relative w-full py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <Link href="#services" className="block">
          <h2 className="mb-16 text-center text-4xl md:text-6xl font-black tracking-tight">
            <span className="bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
              BESPOKE
            </span>
            <br className="md:hidden" />
            <span className="text-white/40"> SERVICES</span>
          </h2>
        </Link>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES_DATA.map((service, index) => (
            <div key={index} className="group relative">
              {/* Hover Outline: Orange, very light initially, visible on hover */}
              <div
                className="
                  absolute inset-0 rounded-[28px]
                  border-2 border-orange-500/0
                  group-hover:border-orange-500/40
                  transition-colors duration-500
                  pointer-events-none z-20
                "
              />

              {/* Glass card */}
              <div
                className="
                  relative h-full flex flex-col rounded-[26px] p-8
                  bg-zinc-900/20 backdrop-blur-xl
                  border border-white/5
                  transition-all duration-500
                  group-hover:bg-zinc-900/30
                  group-hover:shadow-2xl
                  group-hover:shadow-orange-900/10
                "
              >
                {/* Inner Glow */}
                <div
                  className="
                    pointer-events-none absolute inset-0 rounded-[26px]
                    bg-gradient-to-b from-white/5 to-transparent
                    opacity-50
                  "
                />

                {/* Icon */}
                <div
                  className="
                    relative mb-6 flex h-14 w-14 items-center justify-center
                    rounded-2xl
                    bg-white/5 backdrop-blur-md
                    border border-white/10
                    shadow-inner
                    transition-transform duration-500
                    group-hover:scale-105
                    group-hover:border-orange-500/20
                  "
                >
                  <service.icon className="text-2xl text-white/90 group-hover:text-orange-400 transition-colors duration-300" />
                </div>

                {/* Content */}
                <div className="relative z-10 flex h-full flex-col">
                  <h3 className="mb-3 text-2xl font-bold text-white tracking-wide group-hover:text-orange-100 transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="mb-6 text-sm leading-relaxed text-zinc-400">
                    {service.description}
                  </p>

                  <ul className="mt-auto space-y-3">
                    {service.items.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-sm text-zinc-300 font-medium"
                      >
                        <span
                          className="
                            mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full
                            bg-orange-500/70 group-hover:bg-orange-400
                            transition-colors duration-300
                          "
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
