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
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const SERVICES_DATA = [
  {
    title: "Cybersecurity Services",
    icon: FaShieldAlt,
    color: "red",
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
    color: "purple",
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
    color: "blue",
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
    color: "indigo",
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
    color: "teal",
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
    color: "green",
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

const COLOR_MAP = [
  {
    iconBg: "bg-red-500/10",
    iconText: "text-red-600 dark:text-red-400",
    title: "text-red-700 dark:text-red-400",
  },
  {
    iconBg: "bg-purple-500/10",
    iconText: "text-purple-600 dark:text-purple-400",
    title: "text-purple-700 dark:text-purple-400",
  },
  {
    iconBg: "bg-blue-500/10",
    iconText: "text-blue-600 dark:text-blue-400",
    title: "text-blue-700 dark:text-blue-400",
  },
  {
    iconBg: "bg-indigo-500/10",
    iconText: "text-indigo-600 dark:text-indigo-400",
    title: "text-indigo-700 dark:text-indigo-400",
  },
  {
    iconBg: "bg-teal-500/10",
    iconText: "text-teal-600 dark:text-teal-400",
    title: "text-teal-700 dark:text-teal-400",
  },
  {
    iconBg: "bg-green-500/10",
    iconText: "text-green-600 dark:text-green-400",
    title: "text-green-700 dark:text-green-400",
  },
];

const BULLET_COLORS = [
  "bg-red-500",
  "bg-orange-500",
  "bg-yellow-500",
  "bg-green-500",
  "bg-blue-500",
  "bg-purple-500",
];

const Services: React.FC = () => {
  return (
    <section id="services" className="min-h-screen max-w-7xl mx-auto px-4">
      <Link href="#services">
        <h2
          className={cn(
            "bg-clip-text text-4xl text-center text-transparent md:text-7xl pt-16 mb-12",
            "bg-gradient-to-b from-black/80 to-black/50",
            "dark:bg-gradient-to-b dark:from-white/80 dark:to-white/20"
          )}
        >
          BESPOKE <br />
          SERVICES
        </h2>
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:mt-20">
        {SERVICES_DATA.map((service, index) => {
          const Icon = service.icon;
          const colors = COLOR_MAP[index % COLOR_MAP.length];

          return (
            <Card key={index} className="bg-white/70 dark:bg-black/70 backdrop-blur-md rounded-2xl border-0 shadow-xl">
              <CardHeader className="flex flex-row gap-4 items-start">
                <div className={cn("flex h-14 w-14 items-center justify-center rounded-xl", colors.iconBg)}>
                  <Icon className={cn("text-2xl", colors.iconText)} />
                </div>

                <div className="flex-1">
                  <CardTitle className={cn("text-2xl font-semibold", colors.title)}>
                    {service.title}
                  </CardTitle>

                  <CardDescription className="text-gray-800 dark:text-gray-300 text-base mt-1">
                    {service.description}
                  </CardDescription>
                </div>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-700 dark:text-gray-300 text-sm">
                      <span className={cn("mt-2 h-1.5 w-1.5 rounded-full", BULLET_COLORS[idx % BULLET_COLORS.length])} />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
