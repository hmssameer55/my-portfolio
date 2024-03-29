"use client";

import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import { Social } from "@typings";

type Props = {
  socials: Social[];
};

export default function Header({ socials }: Props) {
  return (
    <header className="header">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          type: "spring",
          stiffness: 440,
          damping: 80,
        }}
        className="flex-center"
      >
        {socials.map((social: Social) => (
          <SocialIcon
            key={social._id}
            fgColor="gray"
            bgColor="transparent"
            url={social.url}
            target="_blank"
          />
        ))}
      </motion.div>
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 25,
        }}
        className="flex-center text-gray-500"
      >
        <SocialIcon
          network="email"
          fgColor="gray"
          bgColor="transparent"
          className="cursor-pointer"
          href="#contact"
        />
        <Link href="#contact" className="hidden md:inline-flex">
          Get in touch
        </Link>
      </motion.div>
    </header>
  );
}
