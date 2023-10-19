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
import { getSocials, getPageInfo, getExperiences, getProjects, getSkills } from './sanity-utils/sanity-utils'

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
