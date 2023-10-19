"use client"

import React from 'react'
import SectionTitle from './SectionTitle'
import ProjectCard from './ProjectCard'
import { motion } from 'framer-motion'
import { Project } from '@typings'

type Props = {
    projects: Project[]
}

export default function Projects({ projects }: Props) {

    return (
        <section className='snap-start' id="projects">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className='flex-col-center relative 
            h-screen overflow-hidden text-left 
             max-w-full px-10 justify-evenly mx-auto'>
                <SectionTitle text='Projects' />


                <div className='relative w-screen p-10 flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-10
                 scrollbar-thin scrollbar-thumb-[#F7AB0A] scrollbar-track-gray-100 scrollbar-thumb-rounded-full scrollbar-track-rounded-full
                '>
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            project={project}
                        />
                    ))
                    }
                </div>
                <div className='absolute top-[30%] left-0 w-full h-[450px] bg-[#F7AB0A]/10 -skew-y-12 z-0' />
            </motion.div>
        </section>
    )
}