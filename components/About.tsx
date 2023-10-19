"use client"

import React from 'react'
import { motion } from 'framer-motion'
import SectionTitle from './SectionTitle'
import { PageInfo } from '@typings'
import { urlFor } from '@sanity/helper'

type Props = {
    pageInfo: PageInfo
}

export default function About({ pageInfo }: Props) {
    return (
        <section className='snap-center' id="about">
            <motion.div
                initial={{
                    opacity: 0
                }}
                whileInView={{
                    opacity: 1
                }}
                transition={{
                    duration: 1.5
                }}
                className='flex flex-col relative h-screen pb-10 md:pb-0 md:pt-14 text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
                <SectionTitle text='About' />
                <motion.img
                    src={urlFor(pageInfo?.profilePic).url()}
                    alt='Sameer'
                    initial={{
                        x: -200,
                        opacity: 0
                    }}
                    whileInView={{
                        x: 0,
                        opacity: 1
                    }}
                    transition={{
                        duration: 1.2,
                        delay: 0.2
                    }}
                    viewport={{ once: true }}
                    className='w-48 h-48 mt-24 md:mt-0 flex-shrink-0 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 lg:w-[400px] lg:h-[400px] xl:w-[450px] xl:h-[450px]'
                />
                <div className='space-y-8 px-0 md:px-20 md:mb-10'>
                    <h4 className='text-3xl md:text-4xl font-semibold'>
                        Here is a <span className='underline decoration-[#F7AB0A]/50'>little</span> background
                    </h4>
                    <p className='text-base'>
                        {pageInfo?.backgroundInfo}
                    </p>
                </div>
            </motion.div>
        </section>
    )
}