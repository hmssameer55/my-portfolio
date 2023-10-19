import { groq } from "next-sanity";
import SantiyClient from '@sanity/helper'
import { cache } from "react";


const socialQuery = groq`
    *[_type == "social"]
`

const pageInfoQuery = groq`
    *[_type == "pageInfo"][0]
`

const skillQuery = groq`
    *[_type == "skill"]
`

const projectQuery = groq`
    *[_type == "project"]{
        ...,
        technologies[]->
    }
`

const experienceQuery = groq`
    *[_type == "experience"]
`

export const revalidate = 60

export const getSocials = cache(async () => {
    try {
        const data = await SantiyClient.fetch(socialQuery);
        return data;
    } catch (error) {
        console.error("Error fetching social data:", error);
        throw error; // Rethrow the error for error handling in your application
    }
}
)

export const getPageInfo = cache(async () => {
    try {
        const data = await SantiyClient.fetch(pageInfoQuery);
        return data;
    } catch (error) {
        console.error("Error fetching page info:", error);
        throw error;
    }
})

export const getSkills = cache(async () => {
    try {
        const data = await SantiyClient.fetch(skillQuery);
        return data;
    } catch (error) {
        console.error("Error fetching skills:", error);
        throw error;
    }
}
)

export const getProjects = cache(async () => {
    try {
        const data = await SantiyClient.fetch(projectQuery);
        return data;
    } catch (error) {
        console.error("Error fetching projects:", error);
        throw error;
    }
}
)

export const getExperiences = cache(async () => {
    try {
        const data = await SantiyClient.fetch(experienceQuery);
        return data;
    } catch (error) {
        console.error("Error fetching experiences:", error);
        throw error;
    }
}
)



