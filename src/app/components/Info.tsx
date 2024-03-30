import Image from "next/image";
import NextIcon from '../../../public/svgs/next-js.svg'
import TSIcon from '../../../public/svgs/typescript-icon.svg'
import JSIcon from '../../../public/svgs/javascript-js.svg'
import TailWindIcon from '../../../public/svgs/tailwind-css.svg'
import CSSIcon from '../../../public/svgs/file-type-css.svg'
import HtmlIcon from '../../../public/svgs/file-type-html.svg'
import gitIcon from '../../../public/svgs/git.svg'
import reactIcon from '../../../public/svgs/react.svg'
import downArrow from '../../../public/svgs/arrow-down-1.svg'
import githubIcon from '../../../public/svgs/github.svg'
import linkedinIcon from '../../../public/svgs/linkedin.svg'
import { ReactTyped } from "react-typed";
import Link from "next/link";

export default function Info() {

    const icons = [TSIcon, JSIcon, reactIcon, NextIcon, TailWindIcon, CSSIcon, HtmlIcon, gitIcon]

    return (
        <section className="info-background bg-[#50343c] bg-dot-grid">
            <div className="info">
                <div className="hero-info">
                    <h1 className="header-title">Front-End React <span className="breathing-title">Developer</span></h1>
                    <div className="header-paragraph">
                        <ReactTyped strings={["I am Simon Björkberg, Ironhack Graduate with an interest in all things related to Programming."]} typeSpeed={20} />
                    </div>
                    <ul className="info-links gap-2 pt-5">
                        <li className="">
                            <Link href={"https://www.linkedin.com/in/simonbjorkberg/"} rel="noopener noreferrer" target="_blank">
                                <svg viewBox="0 0 448 512" width={36} height={36} className="hover:stroke-[#FCCA46] stroke-[#FE7F2D] fill-none transition-all duration-200" strokeWidth={20} xmlns="http://www.w3.org/2000/svg"><path d="m100.28 448h-92.88v-299.1h92.88zm-46.49-339.9c-29.7 0-53.79-24.6-53.79-54.3a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zm394.11 339.9h-92.68v-145.6c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7v148.1h-92.78v-299.1h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3v164.3z" /></svg>
                            </Link>
                        </li>
                        <Link href={"https://github.com/SimonBjorkberg?tab=repositories"} rel="noopener noreferrer" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="hover:stroke-[#FCCA46] stroke-[#FE7F2D] transition-all duration-200"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                        </Link>
                    </ul>
                </div>
                <div className="tech-stack">
                    <p className="tech-stack-paragraph">
                        Tech Stack:
                    </p>
                    <ul className="techs">
                        {icons.length > 0 && icons.map((icon, i) => {
                            return <li key={i}><Image src={icon} alt="" /></li>
                        })}
                    </ul>
                </div>
                <div className="ss-down-arrow">
                    <Image className="w-8 mb-10" src={downArrow} alt="" />
                </div>
            </div>
            <div className="down-arrow">
                <Image className="w-8 mb-10" src={downArrow} alt="" />
            </div>
        </section>
    )
}