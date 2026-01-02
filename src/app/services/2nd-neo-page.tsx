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
    <section
      id="services"
      className="min-h-screen max-w-7xl mx-auto px-4"
    >
      <Link href="#services">
        <h2
          className={cn(
            "bg-clip-text text-4xl text-center text-transparent md:text-7xl pt-16 mb-12",
            "bg-gradient-to-b from-black/80 to-black/50",
            "dark:bg-gradient-to-b dark:from-white/80 dark:to-white/20 dark:bg-opacity-50"
          )}
        >
          BESPOKE <br />
          SERVICES
        </h2>
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:mt-20">
        {SERVICES_DATA.map((service, index) => (
          <Card
            key={index}
            className="
              bg-white/70 dark:bg-black/70
              backdrop-blur-md
              rounded-2xl
              border-0
              shadow-xl
              w-full
            "
          >
            <CardHeader className="flex flex-row gap-4 items-start">
              <div
                className="
                  flex h-14 w-14 items-center justify-center
                  rounded-xl
                  bg-black/5 dark:bg-white/10
                "
              >
                <service.icon className="text-2xl text-gray-800 dark:text-white" />
              </div>

              <div className="flex-1">
                <CardTitle className="text-2xl text-gray-800 dark:text-white">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300 text-base mt-1">
                  {service.description}
                </CardDescription>
              </div>
            </CardHeader>

            <CardContent>
              <ul className="space-y-3">
                {service.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-gray-700 dark:text-gray-300 text-sm"
                  >
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gray-500 dark:bg-gray-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Services;
