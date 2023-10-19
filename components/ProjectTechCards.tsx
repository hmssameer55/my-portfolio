"use client"

import React from 'react'
import { Skill } from '@typings'
import { motion } from 'framer-motion'
import { urlFor } from '@sanity/helper'

type Props = {
    technology: Skill
}

export default function ProjectTechCards({ technology }: Props) {
    return (
        <motion.img
            initial={{ opacity: 0, y: -300 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            src={urlFor(technology.icon).url()}
            className='w-10 h-10 object-cover rounded-full mx-2'
        />
    )
}

