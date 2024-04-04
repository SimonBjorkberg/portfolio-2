import { useState } from "react"

export default function About() {

    const [info, setInfo] = useState("experience")

    const scrollToProjects = () => {
        const projects = document.getElementById('projects')
        if (projects) projects.scrollIntoView()
    }

    return (
        <section id="about" className="h-dvh bg-[#50343c] w-full snap-start flex content-start items-center pb-5 flex-col justify-between overflow-hidden">
            <div className="py-10">
                <svg onClick={scrollToProjects} fill="none" height="36" viewBox="0 0 24 24" width="36" xmlns="http://www.w3.org/2000/svg" className="self-center hover:cursor-pointer stroke-[#FE7F2D] hover:stroke-[#FCCA46] rotate-180"><path d="m11.9995 16.8001c-.7 0-1.4-.27-1.93-.8l-6.51997-6.51996c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l6.51997 6.51996c.48.48 1.26.48 1.74 0l6.52-6.51996c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-6.52 6.51996c-.53.53-1.23.8-1.93.8z" fill="#292d32" /></svg>
            </div>
            <main className="h-full w-full flex md:flex-row flex-col max-w-[1080px] gap-5 px-5 md:pt-20 overflow-y-auto">
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
                        There I got the position of Climbing Instructor & Cashier, a prestigeless position where you get to take care of the gym, it's customers & all that come with it.
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
                            <p className="text-sm text-neutral-300">Climbing Instructor, Cashier - A prestigeless position where I'm tasked with taking care of the gym as a whole and it's customers.</p>
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
                        <p className="min-w-[110px] h-fit text-left text-sm p-[2px] text-neutral-300">2023</p>
                        <div>
                            <h1 className="font-semibold text-[#FE7F2D]">Ironhack Bootcamp</h1>
                            <p className="text-sm text-neutral-300">Intensive Web Development course containing all the information of a 2 year university college education condensed into 6 months.</p>
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
        </section>
    )
}