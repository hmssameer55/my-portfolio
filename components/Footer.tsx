"use client"

import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import SLogo from '../public/images/s.jpg'
import Script from 'next/script'

type Props = {}

export default function Footer({ }: Props) {
    return (
        <footer className="h-screen  mx-auto z-20 snap-center">
            {/* <div className='flex-center'>
                <Link href="#hero">
                    <Image src={
                        SLogo
                    } alt="logo" className="h-8 w-8 rounded-full filter grayscale hover:grayscale-0 cursor-pointer" />
                </Link>
            </div> */}


      
                {/* <Script>
            {`window.embeddedChatbotConfig = {
            chatbotId: "GPACtlTwnFIHYWhUeQRvn",
            domain: "www.chatbase.co"
            }`}
            </Script>
            <Script
            src="https://www.chatbase.co/embed.min.js"
            chatbotId="GPACtlTwnFIHYWhUeQRvn"
            domain="www.chatbase.co"
            defer>
            </Script> */}

                 
<div id="odin-chatbot">        </div>
        <Script id="1">
          {`window.project_id="nQJ1GSps8CRQ1nViNXIo";
            window.frame_type="window";
            `}
        </Script>
        <Script
          id="2"
          src="https://dev.getodin.ai/loader.min.js"
          project_id="nQJ1GSps8CRQ1nViNXIo"
          frame_type="window"
          defer></Script>
  
        </footer>
    )
}