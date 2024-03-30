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

export default function Info() {

    const icons = [TSIcon, JSIcon, reactIcon, NextIcon, TailWindIcon, CSSIcon, HtmlIcon, gitIcon]

    return (
        <section className="info-background section bg-[#50343c] bg-dot-grid">
            <div className="info my-auto">
                <div className="hero-info">
                    <h1 className="header-title">Front-End React <span className="breathing-title">Developer</span></h1>
                    <p className="header-paragraph">I am Simon Björkberg, Ironhack Graduate with an interest for all things related to Programming.</p>
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
            </div>
            <div className="down-arrow">
                <Image className="w-8 mb-10" src={downArrow} alt="" />
            </div>
        </section>
    )
}