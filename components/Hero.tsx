"use client"

import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import Circles from './Circles'
import Image from 'next/image'
import Link from 'next/link'
import { PageInfo } from '@typings'
import { urlFor } from '@sanity/helper'

type Props = {
    pageInfo: PageInfo
}

export default function Hero({ pageInfo }: Props) {

    const [text_1] = useTypewriter({
        words: [
            'Hey there, Iam Sameer',
            'Full Stack Developer 💻',
            'Love Turning lines of code into art 🎨'],
        loop: 0,
        delaySpeed: 500
    })

    return (
        <section id='hero' className='h-screen flex-col-center overflow-hidden text-center space-y-6 snap-start'>
            <Circles />
            <Image
                src={urlFor(pageInfo.heroImage).url()}
                height={500}
                width={500}
                alt='Sameer' className='relative rounded-full h-32 w-32 mx-auto object-cover' />
            <div className='z-20'>
                <h2 className='text-sm uppercase text-gray-500 font-semibold tracking-[15px] pb-2' >
                    {pageInfo.role}
                </h2>
                <h1 className='text-3xl font-semibold md:text-5xl px-10 min-h-[75px] md:min-h-fit'>
                    <span>{text_1}</span>
                    <Cursor cursorColor='#F7AB0A' />
                </h1>
                <div className='pt-5'>
                    <Link href="#about">
                        <button className='btn_hero'>
                            About
                        </button>
                    </Link>
                    <Link href="#experience">
                        <button className='btn_hero'>
                            Experience
                        </button>
                    </Link>

                    <Link href="#skills">
                        <button className='btn_hero'>
                            Skills
                        </button>
                    </Link>
                    <Link href="#projects">
                        <button className='btn_hero'>
                            Projects
                        </button>
                    </Link>
                </div>
            </div>
        </section >
    )
}