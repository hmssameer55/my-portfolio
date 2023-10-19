"use client"

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { urlFor } from '@sanity/helper';
import { Experience } from '@typings';
import Image from 'next/image';

type Props = {
    experience: Experience;
};

export default function ExperienceCard({ experience }: Props) {
    const { jobTitle, company, startDate, isCurrent, endDate, points, companyLogo } = experience;

    const [expanded, setExpanded] = useState(false);

    return (
        <article className="flex flex-col items-center justify-start space-y-4 md:space-y-7 flex-shrink-0 w-[350px] md:w-[600px] xl:w-[700px] snap-start md:snap-center bg-[#292929] p-5 md:p-10 opacity-40 transition-opacity duration-500 hover:opacity-100">
            <motion.div
                initial={{
                    opacity: 0,
                }}
                whileInView={{
                    opacity: 1,
                }}
                viewport={{ once: true }}
                transition={{
                    duration: 1.5,
                }}
            >
                <Image
                    src={urlFor(companyLogo).url()}
                    alt={company}
                    width={100}
                    height={100}
                    className="w-24 h-24 mt-8 md:mt-0 flex-shrink-0 rounded-full object-cover"
                />
            </motion.div>
            <div className="px-0 space-y-1.5">
                <h2 className="text-2xl">{jobTitle}</h2>
                <p className="text-xl font-semibold">{company}</p>
                <p className="text-base text-gray-300">
                    {new Date(startDate).toDateString()} -{' '}
                    {isCurrent ? 'Present' : new Date(endDate).toDateString()}
                </p>
                <ul className="list-disc space-y-2.5 ml-5 text-md overflow-y-auto max-h-[30vh] md:max-h-[22vh]
                 scrollbar-thin scrollbar-thumb-[#F7AB0A]/50 scrollbar-track-gray-100 scrollbar-thumb-rounded-full scrollbar-track-rounded-full
                ">
                    {points.slice(0, expanded ? points.length : 3).map((point, index) => (
                        <li key={index} className="text-gray-300 text-sm list-inside pe-2">
                            {point}
                        </li>
                    ))}
                </ul>
                {points.length > 3 && (
                    <button
                        className="text-gray-600 text-sm hover:text-gray-100"
                        onClick={() => setExpanded(!expanded)}
                    >
                        {expanded ? 'View Less' : 'View More'}
                    </button>
                )}
            </div>
        </article>
    );
}
