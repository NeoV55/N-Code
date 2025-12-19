"use client";

import { useInView } from "framer-motion";
import React, { useRef } from "react";
import { Button } from "../ui/button";
import { SiGithub, SiInstagram, SiLinkedin, SiX , SiFacebook , SiMedium , SiSubstack ,SiDevdotto } from "react-icons/si";
import { config } from "@/data/config";
import Link from "next/link";

const BUTTONS = [
  {
    name: "Github",
    href: config.social.github,
    icon: <SiGithub size={"24"} color={"#fff"} />,
  },
  {
    name: "Twitter",
    href: config.social.twitter,
    icon: <SiX size={"24"} color={"#fff"} />,
  },
  {
    name: "Facebook",
    href: config.social.facebook,
    icon: <SiFacebook size={"24"} color={"#fff"} />,
  },
  {
    name: "Medium",
    href: config.social.medium,
    icon: <SiMedium size={"24"} color={"#fff"} />,
  },
  {
    name: "Substack",
    href: config.social.substack,
    icon: <SiSubstack size={"24"} color={"#fff"} />,
  },
  {
    name: "Dev.to",
    href: config.social.devdotto,
    icon: <SiDevdotto size={"24"} color={"#fff"} />,
  },
];

const SocialMediaButtons = () => {
  const ref = useRef<HTMLDivElement>(null);
  const show = useInView(ref, { once: true });
  return (
    <div ref={ref} className="z-10">
      {show &&
        BUTTONS.map((button) => (
          <Link href={button.href} key={button.name} target="_blank">
            <Button variant={"ghost"}>{button.icon}</Button>
          </Link>
        ))}
    </div>
  );
};

export default SocialMediaButtons;
