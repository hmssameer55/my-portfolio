"use client";

import React from "react";
import { motion } from "framer-motion";
import { Skill } from "@typings";
import { urlFor } from "@sanity/helper";

type Props = {
  directionLeft?: boolean;
  skill: Skill;
};

export default function SkillGrid({ directionLeft, skill }: Props) {
  return (
    <div className="group relative flex-center cursor-pointer">
      <motion.img
        initial={{
          opacity: 0,
          x: directionLeft ? -100 : 100,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 1.5,
          type: "spring",
          bounce: 0.5,
        }}
        viewport={{ once: true }}
        src={urlFor(skill.icon).url()}
        className="w-16 h-16 rounded-full object-cover border-2
                 border-gray-500
                 md:h-20 md:w-20 lg:h-22 lg:w-22
                 filter
                 group-hover:grayscale
                 transition duration-500 ease-in-out"
        alt="skill"
      />
      <div
        className="absolute opacity-0 group-hover:opacity-80 transition duration-300
             ease-in-out group-hover:bg-white h-16 w-16 z-0 rounded-full flex-center
                md:h-20 md:w-20 lg:h-22 lg:w-22
            "
      >
        <div className="flex-center h-full">
          <p className="text-xl font-bold text-black opacity-100">
            {skill.progress} %
          </p>
        </div>
      </div>
    </div>
  );
}
