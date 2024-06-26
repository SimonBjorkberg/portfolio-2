import Image from "next/image";
import NextIcon from '../../../public/svgs/next-js.svg'
import TSIcon from '../../../public/svgs/typescript-icon.svg'
import JSIcon from '../../../public/svgs/javascript-js.svg'
import TailWindIcon from '../../../public/svgs/tailwind-css.svg'
import CSSIcon from '../../../public/svgs/file-type-css.svg'
import HtmlIcon from '../../../public/svgs/file-type-html.svg'
import gitIcon from '../../../public/svgs/git.svg'
import reactIcon from '../../../public/svgs/react.svg'
import nodeIcon from '../../../public/svgs/node-js.svg'
import githubIcon from '../../../public/svgs/github-original-wordmark.svg'
import mongoDbIcon from '../../../public/svgs/mongodb.svg'
import HBSIcon from '../../../public/svgs/handlebars-original.svg'
import SCSSIcon from '../../../public/svgs/file-type-scss2.svg'
import APIIcon from '../../../public/svgs/api.svg'
import cloudinaryIcon from '../../../public/svgs/cloudinary.svg'
import stripeIcon from '../../../public/svgs/stripe.svg'
import Link from "next/link";

export default function About() {

    const icons = [TSIcon, JSIcon, reactIcon, NextIcon, TailWindIcon, CSSIcon, HtmlIcon, gitIcon, nodeIcon, githubIcon, mongoDbIcon, HBSIcon, SCSSIcon, APIIcon, cloudinaryIcon, stripeIcon]

    const scrollToProjects = () => {
        const projects = document.getElementById('projects')
        if (projects) projects.scrollIntoView()
    }

    return (
        <section id="about" className="h-dvh bg-[#50343c] w-full snap-start flex flex-col items-center overflow-hidden roboto-thin">
            <div className="py-10">
                <svg onClick={scrollToProjects} fill="none" height="36" viewBox="0 0 24 24" width="36" xmlns="http://www.w3.org/2000/svg" className="self-center hover:cursor-pointer stroke-[#FE7F2D] hover:stroke-[#FCCA46] rotate-180"><path d="m11.9995 16.8001c-.7 0-1.4-.27-1.93-.8l-6.51997-6.51996c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l6.51997 6.51996c.48.48 1.26.48 1.74 0l6.52-6.51996c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-6.52 6.51996c-.53.53-1.23.8-1.93.8z" fill="#292d32" /></svg>
            </div>
            <main className="w-full flex md:flex-row flex-col max-w-[1080px] gap-5 px-5 xl:pt-32 overflow-y-auto hide-section">
                <div className="md:w-1/2 flex flex-col">
                    <h1 className="font-semibold text-[#FE7F2D]">
                        About me
                    </h1>
                    <p className="mt-5 text-sm">
                        My interest for coding started during my early youth & part of the fascination came from my slight addiction to gaming at the time, I quickly wanted to understand how it all worked under the hood.
                        During my 2nd year at Thoren Innovation School we were introduced to Java & game development in addition to web design & web development, I became hooked on the concept of creating applications from scratch.
                        After graduation I kept the interest of coding alive through a small website me and 2 classmates had created at the end of the 2nd semester.
                    </p>
                    <p className="my-5 text-sm">
                        The website in question created enough revenue for me to be happy & content but eventually it stagnated to the point where we had to shut it down. I started looking for opportunities in my other interests & found myself a job at my local Climbing gym.
                        There I got the position of Climbing Instructor & Cashier, a prestigeless position where you get to take care of the gym, its customers & all that come with it.
                    </p>
                    <p className="text-sm">
                        Late 2022 I started to explore development as a permanent career path as this had been my plan since 2018, I felt that I had to reinforce my knowledge on core concepts in addition to getting a certificate/degree that could solidify what I knew. I got
                        recommended the Ironhack Bootcamp, a very intensive 6 month course that touched on everything that the traditional 2 year University College programs offered.
                    </p>
                </div>
                <div className="md:w-1/2 flex flex-col gap-2">
                    <div className="font-semibold text-[#FE7F2D]">Experience</div>
                    <div className="flex flex-row p-2">
                        <p className="min-w-[110px] h-fit text-left text-sm p-[2px] text-neutral-300">2022 - Current</p>
                        <div>
                            <h1 className="font-semibold text-[#FE7F2D]">Klätterdomen - Current Position</h1>
                            <p className="text-sm text-neutral-300">Climbing Instructor, Cashier - A prestigeless position where I am tasked with taking care of the gym as a whole and its customers.</p>
                        </div>
                    </div>
                    <div className="flex flex-row p-2">
                        <p className="min-w-[110px] h-fit text-left text-sm p-[2px] text-neutral-300">2023</p>
                        <div>
                            <h1 className="font-semibold text-[#FE7F2D]">Ironhack Bootcamp</h1>
                            <p className="text-sm text-neutral-300">Intensive Web Development course containing all the information of a 2 year university college education condensed into 6 months.</p>
                        </div>
                    </div>
                    <div className="flex flex-row p-2">
                        <p className="min-w-[110px] h-fit text-left text-sm p-[2px] text-neutral-300">2017 - 2019</p>
                        <div>
                            <h1 className="font-semibold text-[#FE7F2D]">Freelance Website</h1>
                            <p className="text-sm text-neutral-300">Developer, Technical Support - At the end of high school a website was created by me and 2 classmates to buy & sell virtual products for profit.</p>
                        </div>
                    </div>
                    <div className="flex flex-row p-2">
                        <p className="min-w-[110px] h-fit text-left text-sm p-[2px] text-neutral-300">2014 - 2017</p>
                        <div>
                            <h1 className="font-semibold text-[#FE7F2D]">Thoren Innovation School</h1>
                            <p className="text-sm text-neutral-300">A High School with a focus on creative problem solving in a tech environment</p>
                        </div>
                    </div>
                </div>
            </main>
            <div className="justify-start flex max-w-[1080px] w-full hide-section">
                <div className="flex gap-2 py-10 px-5 flex-wrap">
                    {icons.map((icon, i) => {
                        return <Image key={i} className="w-7" src={icon} alt="" />
                    })}
                </div>
            </div>
            <div className="flex flex-col gap-10 pb-10">
                <ul className="flex w-fit self-center flex-wrap gap-10">
                    <li>
                        <Link href={"https://www.linkedin.com/in/simonbjorkberg/"} rel="noopener noreferrer" target="_blank">
                            <svg height="28" viewBox="0 0 16 16" width="28" xmlns="http://www.w3.org/2000/svg" className="fill-[#FE7F2D] hover:fill-[#FCCA46] transition-all duration-200"><path d="m0 0h16v16h-16z" fill="none" /><path d="m14.815 0h-13.635c-.65 0-1.18.517-1.18 1.153v13.694c0 .638.53 1.153 1.18 1.153h13.636c.651 0 1.184-.515 1.184-1.153v-13.694c0-.636-.533-1.153-1.185-1.153zm-10.069 13.634h-2.375v-7.635h2.376v7.635zm-1.187-8.679c-.762 0-1.377-.617-1.377-1.377 0-.759.615-1.376 1.377-1.376.759 0 1.376.617 1.376 1.376 0 .761-.616 1.377-1.376 1.377zm10.074 8.679h-2.371v-3.712c0-.886-.017-2.025-1.233-2.025-1.235 0-1.423.964-1.423 1.96v3.778h-2.371v-7.636h2.274v1.043h.033c.317-.6 1.091-1.233 2.245-1.233 2.401 0 2.845 1.581 2.845 3.638v4.187z" /></svg>
                        </Link>
                    </li>
                    <li>
                        <Link href={"https://github.com/SimonBjorkberg?tab=repositories"} rel="noopener noreferrer" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="hover:stroke-[#FCCA46] stroke-[#FE7F2D] transition-all duration-200"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                        </Link>
                    </li>
                </ul>
            </div>
        </section>
    )
}