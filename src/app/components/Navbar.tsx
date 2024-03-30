import Image from "next/image";
import hamburger from '../../../public/svgs/hamburger.svg'
import { useState } from "react";

export default function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(false)

    return (
        <nav className="pixelify-sans-font fixed flex z-10 w-full py-2 px-4 justify-center">
            <div className="hidden md:flex items-center justify-between w-full max-w-[1080px]">
                <h1 className="flex h-fit w-full text-3xl text-[#FE7F2D]">Simon.dev</h1>
                <ul className="flex h-fit gap-5">
                    <li className="text-xl transition-all duration-500 ease-in-out text-[#FE7F2D] hover:text-[#FCCA46] hover:cursor-pointer">
                        Home
                    </li>
                    <li className="text-xl transition-all duration-500 ease-in-out text-[#FE7F2D] hover:text-[#FCCA46] hover:cursor-pointer">
                        About
                    </li>
                    <li className="text-xl transition-all duration-500 ease-in-out text-[#FE7F2D] hover:text-[#FCCA46] hover:cursor-pointer">
                        Projects
                    </li>
                    <li className="text-xl transition-all duration-500 ease-in-out text-[#FE7F2D] hover:text-[#FCCA46] hover:cursor-pointer">
                        Contact
                    </li>
                </ul>
            </div>
            <div className="flex md:hidden items-center justify-between w-full max-w-[1080px]">
                <h1 className="flex h-fit w-full text-2xl text-[#FE7F2D]">Simon.dev</h1>
                <Image onClick={() => setToggleMenu(true)} className="hover:cursor-pointer" src={hamburger} alt="" />
            </div>
            <div className={`flex absolute w-full right-0 top-0 bg-[#50343c] border-b border-[#FCCA46] transition-all duration-1000 ease-in-out ${toggleMenu ? "translate-y-0 blur-0 shadow-md shadow-[#FCCA46]" : "translate-y-[-300px] blur-sm"}`}>
                <p onClick={() => setToggleMenu(false)} className="absolute top-0 right-0 text-xl w-fit h-fit my-[10px] mx-4 text-[#FCCA46] hover:cursor-pointer">X</p>
                <ul className="flex flex-col w-full justify-center items-center gap-[10px] py-3">
                    <li className="relative text-3xl text-[#FCCA46]">
                        Home
                    </li>
                    <li className="relative text-3xl text-[#FCCA46]">
                        About
                    </li>
                    <li className="relative text-3xl text-[#FCCA46]">
                        Projects
                    </li>
                    <li className="relative text-3xl text-[#FCCA46]">
                        Contact
                    </li>
                </ul>
            </div>
        </nav>
    )
}