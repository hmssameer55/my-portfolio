import { groq } from "next-sanity";
import SantiyClient from '@sanity/helper'


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

const revalidate = 60 * 60

export async function getSocials() {
    try {
        const data = await SantiyClient.fetch(socialQuery, { next: revalidate });
        return data;
    } catch (error) {
        console.error("Error fetching social data:", error);
        throw error; // Rethrow the error for error handling in your application
    }
}

export async function getPageInfo() {
    try {
        const data = await SantiyClient.fetch(pageInfoQuery, { next: revalidate });
        return data;
    } catch (error) {
        console.error("Error fetching page info:", error);
        throw error;
    }
}

export async function getSkills() {
    try {
        const data = await SantiyClient.fetch(skillQuery, { next: revalidate });
        return data;
    } catch (error) {
        console.error("Error fetching skills:", error);
        throw error;
    }
}

export async function getProjects() {
    try {
        const data = await SantiyClient.fetch(projectQuery, { next: revalidate });
        return data;
    } catch (error) {
        console.error("Error fetching projects:", error);
        throw error;
    }
}

export async function getExperiences() {
    try {
        const data = await SantiyClient.fetch(experienceQuery, { next: revalidate });
        return data;
    } catch (error) {
        console.error("Error fetching experiences:", error);
        throw error;
    }
}



