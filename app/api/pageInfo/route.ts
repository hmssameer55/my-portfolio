import { groq } from 'next-sanity'
import SantiyClient from '@sanity/helper'
import { PageInfo } from '../../../typings'

const query = groq`
    *[_type == "pageInfo"][0]
`

export const GET = async () => {
    try {
        const data: PageInfo = await SantiyClient.fetch(query)
        return new Response(JSON.stringify(data), {
            status: 200,
        })
    } catch (error) {
        return new Response(JSON.stringify(error), {
            status: 500,
        })
    }
}