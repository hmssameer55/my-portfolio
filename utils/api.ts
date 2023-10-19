import { PageInfo, Skill, Social, Experience, Project } from "@typings";

export const getPageInfo = async (): Promise<PageInfo> => {
    const pageInfoRes = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/pageInfo`)
    const pageInfo = await pageInfoRes.json()
    return pageInfo
}

export const getSkills = async (): Promise<Skill[]> => {
    const skillsRes = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/skill`)
    const skills = await skillsRes.json()
    return skills
}

export const getSocials = async (): Promise<Social[]> => {
    const socialsRes = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/social`)
    const socials = await socialsRes.json()
    return socials
}

export const getExperiences = async (): Promise<Experience[]> => {
    const experiencesRes = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/experience`)
    const experiences = await experiencesRes.json()
    return experiences
}

export const getProjects = async (): Promise<Project[]> => {
    const projectsRes = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/project`)
    const projects = await projectsRes.json()
    return projects
}
