"use client"

import React from 'react'
import SectionTitle from './SectionTitle'
import { PhoneIcon, MapIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from "react-hook-form"
import { PageInfo } from '@typings'


type Props = {
    pageInfo: PageInfo
}

type Inputs = {
    name: string,
    email: string,
    subject: string,
    message: string
}

export default function Contact({ pageInfo }: Props) {

    const { register, handleSubmit } = useForm<Inputs>();

    const { email, address, phone } = pageInfo

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        window.location.href = `mailto:hmssameer55@gmail.com?subject=${data.subject}&body= Hi My name is ${data.name} and I am contacting you regarding ${data.message}`
    };

    return (
        <section className='snap-start' id="contact">
            <div className='flex-col-center relative h-screen overflow-hidden text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto pb-5 md:pb-0'>
                <SectionTitle text='Contact me' />

                <div className='flex-col-center space-y-8 md:space-y-10 mt-24'>
                    <h4 className='text-2xl md:text-3xl font-bold text-center'>
                        I have got just what you need.
                        <span className='underline decoration-[#F7AB0A]/50'> Let&apos;s talk.</span>
                    </h4>
                    <div className='flex-col-center space-y-3'>
                        <div className='flex-center gap-2'>
                            <PhoneIcon className='h-6 w-6 text-[#F7AB0A]' />
                            <p className='text-xl'>
                                {phone}
                            </p>
                        </div>
                        <div className='flex-center gap-2'>
                            <EnvelopeIcon className='h-6 w-6 text-[#F7AB0A]' />
                            <p className='text-xl'>
                                {email}
                            </p>
                        </div>
                        <div className='flex-center gap-2'>
                            <MapIcon className='h-6 w-6 text-[#F7AB0A]' />
                            <p className='text-xl'>
                                {address}
                            </p>
                        </div>
                    </div>
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className='flex flex-col space-y-3 w-fit mx-auto px-5'>
                        <div className='flex flex-wrap md:flex-nowrap md:space-x-2 md:space-y-0 space-y-3 w-full'>
                            <input
                                {...register("name", { required: true })}
                                type="text" placeholder='Name' className='contact-input w-full' />
                            <input
                                {...register("email", { required: true })}
                                type="email" placeholder='Email' className='contact-input w-full' />
                        </div>
                        <input
                            {...register("subject", { required: true })}
                            type="text" placeholder='Subject' className='contact-input w-full' />
                        <textarea
                            {...register("message", { required: true })}
                            rows={3}
                            placeholder='Message' className='contact-input w-full' />
                        <button
                            type='submit'
                            className='bg-[#F7AB0A] text-black p-3 rounded-md w-full font-semibold'>Send</button>
                    </form>
                </div>
            </div>
        </section>
    )
}