import React from 'react'

type Props = {
    text: string
}

export default function SectionTitle({ text }: Props) {
    return (
        <h3 className='absolute top-20 md:top-16 uppercase tracking-[16px] md:tracking-[20px] text-gray-500 text-2xl'>
            {text}
        </h3>
    )
}