"use client";
import { Check, ChevronRight, Loader2 } from "lucide-react";
import React from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/ace-input";
import { Textarea } from "./ui/ace-textarea";
import { cn } from "@/lib/utils";
import { useToast } from "./ui/use-toast";
import { Button } from "./ui/button";
import { FaWhatsapp, FaTelegram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useRouter } from "next/navigation";
import { config } from "@/data/config";

const ContactForm = () => {
  const [fullName, setFullName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const { toast } = useToast();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName,
          email,
          message,
        }),
      });
      const data = await res.json();
      if (data.error) throw new Error(data.error);
      toast({
        title: "Thank you!",
        description: "I'll get back to you as soon as possible.",
        variant: "default",
        className: cn("top-0 mx-auto flex fixed md:top-4 md:right-4"),
      });
      setLoading(false);
      setFullName("");
      setEmail("");
      setMessage("");
      const timer = setTimeout(() => {
        router.push("/");
        clearTimeout(timer);
      }, 1000);
    } catch (err) {
      toast({
        title: "Error",
        description: "Something went wrong! Please check the fields.",
        className: cn(
          "top-0 w-full flex justify-center fixed md:max-w-7xl md:top-4 md:right-4"
        ),
        variant: "destructive",
      });
    }
    setLoading(false);
  };
  return (
    <form className="max-w-7xl mx-auto sm:mt-4 px-4 sm:px-0" onSubmit={handleSubmit}>
      <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-1">
      
      </div>
      <div className="grid w-full gap-1.5 mb-4">
        <Label htmlFor="content"></Label>
        <a
                    href="https://wa.me/60168932327"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      relative group/btn w-full
                      rounded-2xl p-6
                      bg-gradient-to-br from-black to-neutral-600
                      dark:from-zinc-900 dark:to-zinc-900
                      text-white
                      shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset]
                      dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]
                      transition-all duration-300
                      hover:-translate-y-1 hover:scale-[1.02]
                      overflow-hidden
                    "
                  >
                    {/* Gradient hover outline */}
                    <span className="
                      absolute inset-0 rounded-2xl opacity-0 group-hover/btn:opacity-100
                      bg-gradient-to-br from-green-500 to-emerald-400
                      pointer-events-none
                    " />
        
                    <div className="relative flex items-center gap-4">
                      <div className="p-3 rounded-full bg-white/10 backdrop-blur border border-white/20">
                        <FaWhatsapp className="text-3xl text-green-400" />
                      </div>
        
                      <div className="flex flex-col">
                        <span className="text-lg font-bold text-white dark:text-white">WhatsApp</span>
                        <span className="text-sm text-white/70 dark:text-white/70">Chat instantly</span>
                      </div>
                    </div>
        
                    <BottomGradient />
                  </a>
        
        
                  <a
                    href="https://t.me/NeoV55"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      relative group/btn w-full
                      rounded-2xl p-6
                      bg-gradient-to-br from-black to-neutral-600
                      dark:from-zinc-900 dark:to-zinc-900
                      text-white
                      shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset]
                      dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]
                      transition-all duration-300
                      hover:-translate-y-1 hover:scale-[1.02]
                      overflow-hidden
                    "
                  >
                    <span className="
                      absolute inset-0 rounded-2xl opacity-0 group-hover/btn:opacity-100
                      bg-gradient-to-br from-sky-500 to-cyan-400
                      pointer-events-none
                    " />
        
                    <div className="relative flex items-center gap-4">
                      <div className="p-3 rounded-full bg-white/10 backdrop-blur border border-white/20">
                        <FaTelegram className="text-3xl text-sky-400" />
                      </div>
        
                      <div className="flex flex-col">
                        <span className="text-lg font-bold text-white dark:text-white">Telegram</span>
                        <span className="text-sm text-white/70 dark:text-white/70">Direct message</span>
                      </div>
                    </div>
        
                    <BottomGradient />
                  </a>
        
        
                  <a
                    href={`mailto:${config.email}`}
                    className="
                      relative group/btn w-full
                      rounded-2xl p-6
                      bg-gradient-to-br from-black to-neutral-600
                      dark:from-zinc-900 dark:to-zinc-900
                      text-white dark:text-white
                      shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset]
                      dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]
                      transition-all duration-300
                      hover:-translate-y-1 hover:scale-[1.02]
                      overflow-hidden
                    "
                  >
                    <span className="
                      absolute inset-0 rounded-2xl opacity-0 group-hover/btn:opacity-100
                      bg-gradient-to-br from-white-100 to-white-500
                      pointer-events-none
                    " />
        
                    <div className="relative flex items-center gap-4">
                      <div className="p-3 rounded-full bg-white/10 backdrop-blur border border-white/20">
                        <MdEmail className="text-3xl text-indigo-400" />
                      </div>
        
                      <div className="flex flex-col">
                        <span className="text-lg font-bold text-white dark:text-white">Email</span>
                        <span className="text-sm text-white/70 dark:text-white/70">{config.email}</span>
                      </div>
                    </div>
        
                    <BottomGradient />
                  </a>
        <p className="text-sm text-muted-foreground">
        </p>
      </div>
    </form>
  );
};

export default ContactForm;

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
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
