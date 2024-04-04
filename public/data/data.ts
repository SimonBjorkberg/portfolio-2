import portfolioImage from '../images/info.png'
import klatterdomenImage from '../images/kviberg.jpg'
import ecommerceImage from '../images/marketplace.jpg'
import forumImage from '../images/forum.png'
import pokeDexImage from '../images/pokeDex.png'
import newForumImage from '../images/newForum.png'

import portfolioInfoOne from '../images/portfolioInfoOne.png'
import newforumInfoOne from '../images/newforumInfoOne.png'
import pokemonInfoOne from '../images/pokemonInfoOne.png'
import klatterdomenInfoOne from '../images/klatterdomenInfoOne.png'
import ecommerceInfoOne from '../images/ecommerceInfoOne.png'
import forumInfoOne from '../images/forumInfoOne.png'

import HBSIcon from '../svgs/Project-svgs/handlebars-original.svg'
import TSIcon from '../svgs/Project-svgs/typescript-icon.svg'
import JSIcon from '../svgs/Project-svgs/javascript-js.svg'
import reactIcon from '../svgs/Project-svgs/react.svg'
import nextIcon from '../svgs/Project-svgs/next-js.svg'
import tailwindIcon from '../svgs/Project-svgs/tailwind-css.svg'
import cssIcon from '../svgs/Project-svgs/file-type-css.svg'
import htmlIcon from '../svgs/file-type-html.svg'
import githubIcon from '../svgs/github.svg'
import apiIcon from '../svgs/Project-svgs/api.svg'


export const data = {
    projects: [
        {
            id: "portfolio",
            title: "Portfolio",
            description: "Personal portfolio developed using React, TailwindCSS & CSS Animations",
            picture: portfolioImage,
            role: "Development, Design",
            year: "2024",
            githubLink: "https://github.com/SimonBjorkberg/portfolio",
            deployLink: "https://orange-sky-0961efa03.4.azurestaticapps.net/",
            techs: [JSIcon, reactIcon, tailwindIcon, cssIcon],
            info: {
                image: portfolioInfoOne,
                title: "A Playground",
                technologies: ["React", "TailwindCSS", "JavaScript", "HTML"],
                description: "This is a space where I can store all of my projects and experiences to show to the world, I try to experiment with animations & layouts here as much as I can while trying to stay true to the mobile first approach. Mobile first is something that I try to do as often as I can but sometimes I overlook it to focus on the more important aspects that I'm actively trying to learn, currently TypeScript.",
            },
            bgColor: "blue"
        },
        {
            id: "TSForum",
            title: "Forum #2",
            description: "MERN Application developed using Next.JS, TailwindCSS, Node & MongoDB",
            picture: newForumImage,
            role: "Development, Design",
            year: "2024",
            githubLink: "https://github.com/SimonBjorkberg/typescript-forum-client",
            githubLinkTwo: "https://github.com/SimonBjorkberg/typescript-forum-server",
            deployLink: "https://typescript-forum-client.vercel.app",
            techs: [TSIcon, nextIcon, tailwindIcon, apiIcon],
            info:
            {
                image: newforumInfoOne,
                title: "Introduction: TypeScript - So many Errors",
                technologies: ["TypeScript", "JavaScript", "Next.JS", "Axios", "MongoDB", "JWT", "Express", "Rest API", "TailwindCSS", "Mongoose", "Node.JS"],
                description: "The second TypeScript/Next.JS application that I created on my own and it was supposed to be an improvement of the first forum application I created with Achref, I created this parallel to the Pokedex application to get some variety in addition to getting to work with a bit of back-end technologies again. The front-end is purely made in TypeScript whereas the back-end is written in JavaScript & I did ofcourse stumble upon a few issues with types here aswell but the more I experimented & researched the easier it became in a very short amount of time.",
            },
            bgColor: "orange"
        },
        {
            id: "pokemonApi",
            title: "Pokedex",
            description: "MERN Application developed using Next.JS, TailwindCSS, Node & MongoDB",
            picture: pokeDexImage,
            role: "Development, Design",
            year: "2024",
            githubLink: "https://github.com/SimonBjorkberg/pokemon-ts",
            deployLink: "https://pokemon-ts-psi.vercel.app/",
            techs: [TSIcon, nextIcon, tailwindIcon, apiIcon],
            info:
            {
                image: pokemonInfoOne,
                title: "Introduction: TypeScript - So many Errors",
                technologies: ["TypeScript", "JavaScript", "Next.JS", "Axios", "Rest API", "TailwindCSS"],
                description: "My very first attempt at creating a TypeScript/Next.JS application and this was quite the journey. At the beginning there was a ridicilous amount of frustration due to my lack of knowledge when it came to TypeScript and the way that it defines types and I lost count of the amount of errors I encountered. It took a few attempts to understand how interfaces worked & how to satisfy useStates to make sure that the types were right across the board but I'm very thankful to myself for learning TypeScript because I know that I save a lot of time by using it.",
            },
            bgColor: "yellow"
        },
        {
            id: "klatterdomen",
            title: "Klätterdomen",
            description: "Front-End static page, developed using React, TailwindCSS & CSS Animations",
            picture: klatterdomenImage,
            role: "Development, Design",
            year: "2023",
            githubLink: "https://github.com/SimonBjorkberg/Klatterdomen",
            deployLink: "https://zealous-sand-0a82c4103.4.azurestaticapps.net/",
            techs: [JSIcon, reactIcon, tailwindIcon, cssIcon],
            info:
            {
                image: klatterdomenInfoOne,
                title: "TailwindCSS",
                technologies: ["React", "TailwindCSS", "SCSS", "JavaScript", "HTML"],
                description: "This was a fun little side project that I begun working on during our 1 week break between project 2 & project 3 during my time at Ironhack. I had just started working with the colossal world of CSS and more importantly TailwindCSS which has become a tool that I use all the time. I had no real goal in mind for this project other than having a good time while trying to learn how to use TailwindCSS efficiently, and what better way than to improve my climbing gym's website. I got introduced to some CSS libraries and some new concepts and while I copy pasted some of the modals/accordions at the time I can now look back and realise that I can do better custom ones myself in no time at all.",
            },
            bgColor: "green"
        },
        {
            id: "ecommerce",
            title: "E-Commerce",
            description: "MERN application developed using React, TailwindCSS, Node, MongoDB & Stripe",
            picture: ecommerceImage,
            role: "Development, Design",
            year: "2023",
            githubLink: "https://github.com/SimonBjorkberg/project-3-client",
            deployLink: "https://dapper-kelpie-a71f03.netlify.app/",
            techs: [JSIcon, reactIcon, tailwindIcon, apiIcon],
            info:
            {
                image: ecommerceInfoOne,
                title: "Git Push --force",
                technologies: ["React", "TailwindCSS", "JavaScript", "HTML", "MongoDB", "Node.JS", "Express", "JWT", "Rest API", "Socket.IO", "Axios", "Mongoose", "Cloudinary"],
                description: "The Third and final project during my time at Ironhack, a React application which turned out to be very ambitious. Me and 2 other classmates were put into a group with the end goal of creating a fullstack React web application & after many hours of discussions we ended up deciding to create an E-commerce website. The biggest challenge that we encountered during this project was the ambition of the project itself combined with a lack of communication & leadership. It made me realise how important a good leader is and what a difference it can make when working on larger projects where you need to divide the work. I was however very glad that the ability to code was at this point the least of my worries.",
            },
            bgColor: "cyan"
        },
        {
            id: "forum",
            title: "Forum",
            description: "HBS application developed using HBS, TailwindCSS, Node & MongoDB",
            picture: forumImage,
            role: "Development",
            year: "2023",
            githubLink: "https://github.com/SimonBjorkberg/Project-2",
            deployLink: "",
            techs: [JSIcon, HBSIcon, tailwindIcon, apiIcon],
            info:
            {
                image: forumInfoOne,
                title: "Creating an API",
                technologies: ["HBS", "Express", "Node.JS", "MongoDB", "JavaScript", "Axios", "Rest API", "TailwindCSS", "CSS", "HTML", "Mongoose", "Cloudinary"],
                description: "The second project that was part of the Ironhack curriculum was meant to be a Handlebars application, The reason for this was purely to learn the relation between front-end and back-end in addition to version control using GIT. We got to create our own server-side routing which was incredibly messy if you were to compare it to the easiness of React/Next.JS. It was however an excellent way to learn how to build our own API, define models for our Mongo database & create routes for our own server. This was built by Achref and I, although it wasn't perfect we managed to cover our main goal and some more which was to create a fully functioning CRUD forum application.",
            },
            bgColor: "blue"
        },
    ],
    technologoies: ["React", "Next.JS", "TypeScript", "MongoDB", "Node.jS", "HBS", "Express", "JWT", "Rest API", "Socket.IO", "SCSS", "TailwindCSS", "JavaScript", "CSS", "HTML", "Axios", "Mongoose", "Cloudinary"],
}