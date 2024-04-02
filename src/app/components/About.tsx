export default function About() {

    const scrollToProjects = () => {
        const projects = document.getElementById('projects')
        if (projects) projects.scrollIntoView()
    }

    return (
        <section id="about" className="h-dvh bg-[#50343c] w-full snap-start flex content-start items-center py-10 flex-col justify-between overflow-y-auto">
            <svg onClick={scrollToProjects} fill="none" height="36" viewBox="0 0 24 24" width="36" xmlns="http://www.w3.org/2000/svg" className="self-center hover:cursor-pointer stroke-[#FE7F2D] hover:stroke-[#FCCA46] rotate-180"><path d="m11.9995 16.8001c-.7 0-1.4-.27-1.93-.8l-6.51997-6.51996c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l6.51997 6.51996c.48.48 1.26.48 1.74 0l6.52-6.51996c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-6.52 6.51996c-.53.53-1.23.8-1.93.8z" fill="#292d32" /></svg>
            <main className="h-full bg-blue-500 w-full max-w-[1080px]">
            </main>
        </section>
    )
}