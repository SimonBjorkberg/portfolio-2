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
                            <Link href={""}>
                            <svg height="36" viewBox="0 0 32 32" width="36" className="fill-none stroke-[#FE7F2D] hover:stroke-[#FCCA46] transition-all duration-200" xmlns="http://www.w3.org/2000/svg"><path d="m27.26 27.271h-4.733v-7.427c0-1.771-.037-4.047-2.475-4.047-2.468 0-2.844 1.921-2.844 3.916v7.557h-4.739v-15.271h4.552v2.083h.061c.636-1.203 2.183-2.468 4.491-2.468 4.801 0 5.692 3.161 5.692 7.271v8.385zm-20.145-17.359c-1.527 0-2.751-1.235-2.751-2.756 0-1.516 1.229-2.749 2.751-2.749s2.755 1.233 2.755 2.749c0 1.521-1.233 2.756-2.755 2.756zm2.374 17.359h-4.749v-15.271h4.749zm20.147-27.271h-27.276c-1.303 0-2.36 1.031-2.36 2.307v27.387c0 1.276 1.057 2.307 2.36 2.307h27.271c1.301 0 2.369-1.031 2.369-2.307v-27.387c0-1.276-1.068-2.307-2.369-2.307z"/></svg>
                            </Link>
                        </li>
                        <li className="">
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="hover:stroke-[#FCCA46] stroke-[#FE7F2D] transition-all duration-200"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                        </li>
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