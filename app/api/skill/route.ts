import { groq } from 'next-sanity'
import SantiyClient from '@sanity/helper'
import { Skill } from '../../../typings'

const query = groq`
    *[_type == "skill"]
`

export const GET = async () => {
    try {
        const data: Skill[] = await SantiyClient.fetch(query)
        return new Response(JSON.stringify(data), {
            status: 200,
        })
    } catch (error) {
        return new Response(JSON.stringify(error), {
            status: 500,
        })
    }
}