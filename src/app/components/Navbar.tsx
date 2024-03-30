import Image from "next/image";
import hamburger from '../../../public/svgs/hamburger.svg'
import { useState } from "react";

export default function Navbar() {

    const [toggleMenu, setToggleMenu] = useState(false)

    return (
        <nav className="pixelify-sans-font">
            <div className="big-screen-nav">
                <h1 className="nav-title">Simon.Dev</h1>
                <ul className="ul">
                    <li>
                        Home
                    </li>
                    <li>
                        About
                    </li>
                    <li>
                        Projects
                    </li>
                    <li>
                        Contact
                    </li>
                </ul>
            </div>
            <div className="small-screen-nav">
                <h1 className="nav-title">Simon.Dev</h1>
                <Image onClick={() => setToggleMenu(true)} className="hamburger" src={hamburger} alt="" />
            </div>
            <div className={`${toggleMenu ? "hamburger-drawer-show" : "hamburger-drawer-hide"}`}>
                <p onClick={() => setToggleMenu(false)} className="close-hamburger">X</p>
                <ul>
                    <li>
                        Home
                    </li>
                    <li>
                        About
                    </li>
                    <li>
                        Projects
                    </li>
                    <li>
                        Contact
                    </li>
                </ul>
            </div>
        </nav>
    )
}