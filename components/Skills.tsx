"use client";

import React from "react";
import SectionTitle from "./SectionTitle";
import SkillGrid from "./SkillGrid";
import { Skill } from "@typings";

type Props = {
  skills: Skill[];
};

export default function Skills({ skills }: Props) {
  return (
    <section className="snap-start" id="skills">
      <div className="flex-col-center relative h-screen overflow-hidden text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto">
        <SectionTitle text="Skills" />
        <h3 className="absolute top-32 text-sm text-gray-500 tracking-[3px] uppercase text-center">
          hover over a skill to see my proficiency
        </h3>

        <div className="grid grid-cols-4 gap-5 mt-28">
          {skills.map((skill, index) => (
            <SkillGrid
              key={index}
              skill={skill}
              directionLeft={index < 8 ? true : false}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
