"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ContactForm from "../ContactForm";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { config } from "@/data/config";
import { FaWhatsapp, FaTelegram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const ContactSection = () => {
  return (
    <section id="contact" className="min-h-screen max-w-7xl mx-auto px-4">
      <Link href={"#contact"}>
        <h2
          className={cn(
            "bg-clip-text text-4xl text-center text-transparent md:text-7xl pt-16 mb-12",
            "bg-gradient-to-b from-black/80 to-black/50",
            "dark:bg-gradient-to-b dark:from-white/80 dark:to-white/20 dark:bg-opacity-50"
          )}
        >
          LET&apos;S WORK <br />
          TOGETHER
        </h2>
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 z-[9999] md:mt-20">
        {/* Contact Form Column */}
        <Card className="bg-white/70 dark:bg-black/70 backdrop-blur-md rounded-2xl border-0 shadow-xl">
          <CardHeader>
            <CardTitle className="text-4xl text-gray-800 dark:text-white">Contact Form</CardTitle>
            <CardDescription className="text-gray-600 dark:text-gray-300 text-lg">
              Fill out the form below or use the quick buttons to get in touch directly.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ContactForm />
          </CardContent>
        </Card>

        {/* Quick Connect Buttons Column */}
        <div className="flex flex-col justify-center gap-6 p-4">
          <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-4 text-center lg:text-left">
            Quick Connect
          </h3>

          <a
            href="https://wa.me/YOUR_NUMBER"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 w-full p-6 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-2xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg"
          >
            <div className="p-3 bg-white/20 rounded-full">
              <FaWhatsapp className="text-3xl" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold">WhatsApp</span>
              <span className="text-sm opacity-90">Chat instantly</span>
            </div>
          </a>

          <a
            href="https://t.me/YOUR_USERNAME"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 w-full p-6 bg-[#0088cc] hover:bg-[#0077b5] text-white rounded-2xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg"
          >
            <div className="p-3 bg-white/20 rounded-full">
              <FaTelegram className="text-3xl" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold">Telegram</span>
              <span className="text-sm opacity-90">Direct message</span>
            </div>
          </a>

          <a
            href={`mailto:${config.email}`}
            className="group flex items-center gap-4 w-full p-6 bg-gray-800 hover:bg-gray-700 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-white rounded-2xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg"
          >
            <div className="p-3 bg-white/20 rounded-full">
              <MdEmail className="text-3xl" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold">Email</span>
              <span className="text-sm opacity-90">{config.email}</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
