import Image from "next/image";
import NextIcon from '../../../public/svgs/next-js.svg'
import TSIcon from '../../../public/svgs/typescript-icon.svg'
import JSIcon from '../../../public/svgs/javascript-js.svg'
import TailWindIcon from '../../../public/svgs/tailwind-css.svg'
import CSSIcon from '../../../public/svgs/file-type-css.svg'
import HtmlIcon from '../../../public/svgs/file-type-html.svg'
import gitIcon from '../../../public/svgs/git.svg'
import reactIcon from '../../../public/svgs/react.svg'
import { ReactTyped } from "react-typed";
import Link from "next/link";
import { useEffect } from "react";

export default function Info() {

    const icons = [TSIcon, JSIcon, reactIcon, NextIcon, TailWindIcon, CSSIcon, HtmlIcon, gitIcon]

    useEffect(() => {
        setTimeout(() => {
            const techStack = document.querySelectorAll(".icon")
            techStack.forEach((elem) => {
                elem.classList.add('show-tech')
            })
        }, 2000);
    })

    const scrollToProjects = () => {
        const projects = document.getElementById('projects')
        if (projects) projects.scrollIntoView()
    }

    return (
        <section id="home" className="bg-[#50343c] flex flex-col bg-dot-grid h-dvh content-start items-center py-10 justify-between snap-start overflow-y-auto">
            <div className="flex flex-col justify-around h-full max-h-[500px] md:pt-32 pt-10 w-[97%] max-w-fit">
                <div className="flex flex-col items-start p-0 w-full">
                    <h1 className="title-font md:leading-[60px] leading-[45px] max-w-[500px]">Front-End React <span className="breathing-title">Developer</span></h1>
                    <div className="pt-10 max-w-[500px] text-[18px] h-[121px]">
                        <ReactTyped strings={["I am Simon Björkberg, Ironhack Graduate with an interest in all things related to Programming."]} typeSpeed={10} />
                    </div>
                </div>
                <div className="flex flex-col max-w-fit w-[97%]">
                    <p className="flex items-center pb-3 icon hide-p">
                        Tech Stack:
                    </p>
                    <ul id="this" className="w-fit flex flex-wrap gap-5 tech-icons">
                        {icons && icons.map((icon, i) => {
                            return <li className="flex w-[36px] h-[36px] icon hide-tech" key={i}><Image src={icon} alt="icon" /></li>
                        })}
                    </ul>
                </div>
            </div>
            <div className="flex flex-col gap-10 pt-10">
                <ul className="flex w-fit self-center flex-wrap gap-10">
                    <li>
                        <Link href={"https://www.linkedin.com/in/simonbjorkberg/"} rel="noopener noreferrer" target="_blank">
                            <svg height="36" viewBox="0 0 16 16" width="36" xmlns="http://www.w3.org/2000/svg" className="fill-[#FE7F2D] hover:fill-[#FCCA46] transition-all duration-200"><path d="m0 0h16v16h-16z" fill="none" /><path d="m14.815 0h-13.635c-.65 0-1.18.517-1.18 1.153v13.694c0 .638.53 1.153 1.18 1.153h13.636c.651 0 1.184-.515 1.184-1.153v-13.694c0-.636-.533-1.153-1.185-1.153zm-10.069 13.634h-2.375v-7.635h2.376v7.635zm-1.187-8.679c-.762 0-1.377-.617-1.377-1.377 0-.759.615-1.376 1.377-1.376.759 0 1.376.617 1.376 1.376 0 .761-.616 1.377-1.376 1.377zm10.074 8.679h-2.371v-3.712c0-.886-.017-2.025-1.233-2.025-1.235 0-1.423.964-1.423 1.96v3.778h-2.371v-7.636h2.274v1.043h.033c.317-.6 1.091-1.233 2.245-1.233 2.401 0 2.845 1.581 2.845 3.638v4.187z" /></svg>
                        </Link>
                    </li>
                    <li>
                        <Link href={"https://github.com/SimonBjorkberg?tab=repositories"} rel="noopener noreferrer" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="hover:stroke-[#FCCA46] stroke-[#FE7F2D] transition-all duration-200"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                        </Link>
                    </li>
                </ul>
                <svg onClick={scrollToProjects} fill="none" height="36" viewBox="0 0 24 24" width="36" xmlns="http://www.w3.org/2000/svg" className="self-center hover:cursor-pointer stroke-[#FE7F2D] hover:stroke-[#FCCA46]"><path d="m11.9995 16.8001c-.7 0-1.4-.27-1.93-.8l-6.51997-6.51996c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l6.51997 6.51996c.48.48 1.26.48 1.74 0l6.52-6.51996c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-6.52 6.51996c-.53.53-1.23.8-1.93.8z" fill="#292d32" /></svg>
            </div>
        </section>
    )
} 