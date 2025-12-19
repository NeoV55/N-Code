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
        <div className="lg:col-span-2 flex justify-center">
          <Card className="bg-white/70 dark:bg-black/70 backdrop-blur-md rounded-2xl border-0 shadow-xl max-w-2xl w-full">
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
        </div>

        

            <BottomGradient />
          

          </div>
    </section>

  );
};    

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-brand to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent orange-400 to-transparent" />
    </>
  );
};


export default ContactSection;
