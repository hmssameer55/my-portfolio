"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Project } from '@typings'
import { urlFor } from '@sanity/helper'
import ProjectTechCards from './ProjectTechCards'

type Props = {
    project: Project
}

export default function ProjectCard({ project }: Props) {

    const { name, summary, image, technologies } = project


    const handleTruncate = (str: string, n: number) => {
        return str.length > n ? str.substring(0, n - 1) + '...' : str;
    }


    return (
        <div className='w-screen flex-shrink-0 snap-center flex-col-center 
        h-[95vh] space-y-5 p-10 md:p-44'>
            <motion.img
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.5 }}
                viewport={{ once: true }}
                src={urlFor(image).width(180).height(180).url()}
                alt={name}
                className='object-cover rounded-full h-28 w-28 md:h-auto md:w-auto'
            />
            <div className='space-y-6 px-0 md:px-10 max-w-6xl'>
                <h4 className='text-3xl font-semibold text-center capitalize'>
                    {name}
                </h4>
                <div className='flex-center flex-wrap gap-2'>
                    {
                        technologies.map((technology, index) => (
                            <ProjectTechCards key={index} technology={technology} />
                        ))
                    }
                    <p className='text-lg text-center md:text-left pt-2 max-h-[280px] overflow-y-auto pe-2'>
                        {summary}
                    </p>
                </div>
            </div>
        </div>
    )

}