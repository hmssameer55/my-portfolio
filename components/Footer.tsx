"use client"

import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import SLogo from '../public/images/s.jpg'
import Script from 'next/script'

type Props = {}

export default function Footer({ }: Props) {
    return (
        <footer className="sticky bottom-5 w-14 mx-auto z-20">
            <div className='flex-center'>
                <Link href="#hero">
                    <Image src={
                        SLogo
                    } alt="logo" className="h-8 w-8 rounded-full filter grayscale hover:grayscale-0 cursor-pointer" />
                </Link>
            </div>

     
        <Script id="1">
          {`window.project_id="GJzobNQjUZoQZJih0YGs";
            window.frame_type="widget";
            `}
        </Script>
        <Script
          id="2"
          src="https://app.getodin.ai/loader.min.js"
          project_id="GJzobNQjUZoQZJih0YGs"
          frame_type="widget"
          defer></Script>
      
        </footer>
    )
}