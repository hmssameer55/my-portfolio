import React from 'react'
import SectionTitle from './SectionTitle'
import ExperienceCard from './ExperienceCard'
import { Experience } from '@typings'

type Props = {
    experience: Experience[]
}

export default function WorkExperience({ experience }: Props) {


    return (
        <section className='snap-center' id="experience">
            <div className='flex-col-center relative h-screen overflow-hidden text-left max-w-full px-5 md:px-10 justify-evenly mx-auto'>
                <SectionTitle text='Experience' />
                <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory mt-20 h-[85vh]
                 scrollbar-thin scrollbar-thumb-[#F7AB0A] scrollbar-track-gray-100 scrollbar-thumb-rounded-full scrollbar-track-rounded-full
                '>
                    {
                        experience.map((exp, index) => (
                            <ExperienceCard key={index} experience={exp} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}