import Image from 'next/image'
import Header from '@components/Header'
import Hero from '@components/Hero'
import About from '@components/About'
import WorkExperience from '@components/WorkExperience'
import Skills from '@components/Skills'
import Projects from '@components/Projects'
import Contact from '@components/Contact'
import Footer from '@components/Footer'
import { PageInfo, Social, Experience, Skill, Project } from '../typings'
// import { getSocials, getPageInfo, getExperiences, getProjects, getSkills } from './sanity-utils/sanity-utils'


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



export async function getSocials() {
    try {
        const data = await SantiyClient.fetch(socialQuery);
        return data;
    } catch (error) {
        console.error("Error fetching social data:", error);
        throw error; // Rethrow the error for error handling in your application
    }
}

export async function getPageInfo() {
    try {
        const data = await SantiyClient.fetch(pageInfoQuery);
        return data;
    } catch (error) {
        console.error("Error fetching page info:", error);
        throw error;
    }
}

export async function getSkills() {
    try {
        const data = await SantiyClient.fetch(skillQuery);
        return data;
    } catch (error) {
        console.error("Error fetching skills:", error);
        throw error;
    }
}

export async function getProjects() {
    try {
        const data = await SantiyClient.fetch(projectQuery);
        return data;
    } catch (error) {
        console.error("Error fetching projects:", error);
        throw error;
    }
}

export async function getExperiences() {
    try {
        const data = await SantiyClient.fetch(experienceQuery);
        return data;
    } catch (error) {
        console.error("Error fetching experiences:", error);
        throw error;
    }
}

export const revalidate = 100

export default async function Home() {

  const pageInfo: PageInfo = await getPageInfo()
  const socials: Social[] = await getSocials()
  const experience: Experience[] = await getExperiences()
  const skills: Skill[] = await getSkills()
  const projects: Project[] = await getProjects()

  return (
    <main className="h-screen bg-[rgb(36,36,36)] text-white
     snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0
      scrollbar-thumb-[#F7AB0A]/80 scrollbar-track-gray-400/20 scrollbar-thin
     ">
      <Header socials={socials} />
      <Hero pageInfo={pageInfo} />
      <About pageInfo={pageInfo} />
      <WorkExperience experience={experience} />
      <Skills skills={skills} />
      <Projects projects={projects} />
      <Contact pageInfo={pageInfo} />
      <Footer />
    </main>
  )
}
