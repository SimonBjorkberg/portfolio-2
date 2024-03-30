import portfolioImage from '../images/info.png'
import klatterdomenImage from '../images/kviberg.jpg'
import ecommerceImage from '../images/marketplace.jpg'
import forumImage from '../images/forum.png'
import pokeDexImage from '../images/pokeDex.png'
import newForumImage from '../images/newForum.png'

import dinoInfoOne from '../images/dinoInfoOne.png'
import forumInfoOne from '../images/forumInfoOne.png'
import ecommerceInfoOne from '../images/ecommerceInfoOne.png'
import klatterdomenInfoOne from '../images/klatterdomenInfoOne.png'
import pokemonInfoOne from '../images/pokemonInfoOne.png'
import newforumInfoOne from '../images/newforumInfoOne.png'
import portfolioInfoOne from '../images/portfolioInfoOne.png'


const data = {
    projects: [
        {
            id: "portfolio",
            title: "Portfolio",
            description: "Portfolio web app to store all of my projects & information neatly in one space",
            picture: portfolioImage,
            role: "Development, Design",
            year: "2024",
            githubLink: "https://github.com/SimonBjorkberg/portfolio",
            deployLink: "https://orange-sky-0961efa03.4.azurestaticapps.net/",
            technologies: ["React", "TailwindCSS", "JavaScript", "HTML"],
            info: {
                image: portfolioInfoOne,
                title: "A Playground",
                description: "This is a space where I can store all of my projects and experiences to show to the world, I try to experiment with animations & layouts here as much as I can while trying to stay true to the mobile first approach. Mobile first is something that I try to do as often as I can but sometimes I overlook it to focus on the more important aspects that I'm actively trying to learn, currently TypeScript.",
            },
            bgColor: "blue"
        },
        {
            id: "newForum",
            title: "TypeScript Forum (WIP)",
            description: "A PC only forum that I made to learn the basics of TypeScript and Next.JS.",
            picture: newForumImage,
            role: "Development, Design",
            year: "2024",
            githubLink: "https://github.com/SimonBjorkberg/typescript-forum-client",
            githubLinkTwo: "https://github.com/SimonBjorkberg/typescript-forum-server",
            deployLink: "https://typescript-forum-client.vercel.app",
            technologies: ["TypeScript", "JavaScript", "Next.JS", "Axios", "MongoDB", "JWT", "Express", "Rest API", "TailwindCSS", "Mongoose", "Node.JS"],
            info:
            {
                image: newforumInfoOne,
                title: "Introduction: TypeScript - So many Errors",
                description: "The second TypeScript/Next.JS application that I created on my own and it was supposed to be an improvement of the first forum application I created with Achref, I created this parallel to the Pokedex application to get some variety in addition to getting to work with a bit of back-end technologies again. The front-end is purely made in TypeScript whereas the back-end is written in JavaScript & I did ofcourse stumble upon a few issues with types here aswell but the more I experimented & researched the easier it became in a very short amount of time.",
            },
            bgColor: "orange"
        },
        {
            id: "pokemonApi",
            title: "Pokedex (WIP)",
            description: "A PC only Pokedex using the Pokemon API made in TypeScript, created this project to continue working with objects and these proved to be massive, Further improved my TypeScript capabilites with this project.",
            picture: pokeDexImage,
            role: "Development, Design",
            year: "2024",
            githubLink: "https://github.com/SimonBjorkberg/pokemon-ts",
            deployLink: "https://pokemon-ts-psi.vercel.app/",
            technologies: ["TypeScript", "JavaScript", "Next.JS", "Axios", "Rest API", "TailwindCSS"],
            info:
            {
                image: pokemonInfoOne,
                title: "Introduction: TypeScript - So many Errors",
                description: "My very first attempt at creating a TypeScript/Next.JS application and this was quite the journey. At the beginning there was a ridicilous amount of frustration due to my lack of knowledge when it came to TypeScript and the way that it defines types and I lost count of the amount of errors I encountered. It took a few attempts to understand how interfaces worked & how to satisfy useStates to make sure that the types were right across the board but I'm very thankful to myself for learning TypeScript because I know that I save a lot of time by using it.",
            },
            bgColor: "yellow"
        },
        {
            id: "klatterdomen",
            title: "Klätterdomen",
            description: "A React web app created by me with the intention of getting better at TailwindCSS & SASS/SCSS while also experimenting with layouts.",
            picture: klatterdomenImage,
            role: "Development, Design",
            year: "2023",
            githubLink: "https://github.com/SimonBjorkberg/Klatterdomen",
            deployLink: "https://zealous-sand-0a82c4103.4.azurestaticapps.net/",
            technologies: ["React", "TailwindCSS", "SCSS", "JavaScript", "HTML"],
            info:
            {
                image: klatterdomenInfoOne,
                title: "TailwindCSS",
                description: "This was a fun little side project that I begun working on during our 1 week break between project 2 & project 3 during my time at Ironhack. I had just started working with the colossal world of CSS and more importantly TailwindCSS which has become a tool that I use all the time. I had no real goal in mind for this project other than having a good time while trying to learn how to use TailwindCSS efficiently, and what better way than to improve my climbing gym's website. I got introduced to some CSS libraries and some new concepts and while I copy pasted some of the modals/accordions at the time I can now look back and realise that I can do better custom ones myself in no time at all.",
            },
            bgColor: "green"
        },
        {
            id: "ecommerce",
            title: "E-Commerce",
            description: "A React web app created by me and two classmates with the intention of learning React, Stripe, Socket.IO TailwindCSS & continue refining frontend technologies.",
            picture: ecommerceImage,
            role: "Development, Design",
            year: "2023",
            githubLink: "https://github.com/SimonBjorkberg/project-3-client",
            deployLink: "https://dapper-kelpie-a71f03.netlify.app/",
            technologies: ["React", "TailwindCSS", "JavaScript", "HTML", "MongoDB", "Node.JS", "Express", "JWT", "Rest API", "Socket.IO", "Axios", "Mongoose", "Cloudinary"],
            info:
            {
                image: ecommerceInfoOne,
                title: "Git Push --force",
                description: "The Third and final project during my time at Ironhack, a React application which turned out to be very ambitious. Me and 2 other classmates were put into a group with the end goal of creating a fullstack React web application & after many hours of discussions we ended up deciding to create an E-commerce website. The biggest challenge that we encountered during this project was the ambition of the project itself combined with a lack of communication & leadership. It made me realise how important a good leader is and what a difference it can make when working on larger projects where you need to divide the work. I was however very glad that the ability to code was at this point the least of my worries.",
            },
            bgColor: "cyan"
        },
        {
            id: "forum",
            title: "Forum",
            description: "A Handlebars web app created by me and a classmate with the intention of learning backend technologies such as creating our own database, schemas & routes.",
            picture: forumImage,
            role: "Development",
            year: "2023",
            githubLink: "https://github.com/SimonBjorkberg/Project-2",
            deployLink: "",
            technologies: ["HBS", "Express", "Node.JS", "MongoDB", "JavaScript", "Axios", "Rest API", "TailwindCSS", "CSS", "HTML", "Mongoose", "Cloudinary"],
            info:
            {
                image: forumInfoOne,
                title: "Creating an API",
                description: "The second project that was part of the Ironhack curriculum was meant to be a Handlebars application, The reason for this was purely to learn the relation between front-end and back-end in addition to version control using GIT. We got to create our own server-side routing which was incredibly messy if you were to compare it to the easiness of React/Next.JS. It was however an excellent way to learn how to build our own API, define models for our Mongo database & create routes for our own server. This was built by Achref and I, although it wasn't perfect we managed to cover our main goal and some more which was to create a fully functioning CRUD forum application.",
            },
            bgColor: "blue"
        },
        {
            id: "dinoGame",
            title: "Dino Game",
            description: "A game created by me and a classmate with the intention of learning JavaScript classes and it's uses, as well as canvas.",
            picture: "",
            role: "Development, Design",
            year: "2023",
            githubLink: "https://github.com/SimonBjorkberg/IronhackProjectOne",
            deployLink: "",
            technologies: ["JavaScript", "CSS", "HTML"],
            info:
            {
                image: dinoInfoOne,
                title: "Class Madness",
                description: "It proved really difficult to work with classes the first time around, Being able to fully understand how everything worked in cohesion proved to be a very difficult but exciting challenge. Luke & I got to learn how methods within classes worked while experimenting heavily with the Canvas API, everything apart from the artwork was built from scratch & this was our first deep dive into building our own JavaScript projects. We quickly realised the importance of writing clean and readable code since it became messy way faster than we initially thought, this lead to a few refactors to clean everything up which provided us with a very important learning experience.",
            },
            bgColor: "orange"
        },
    ],
    technologoies: ["React", "Next.JS", "TypeScript", "MongoDB", "Node.jS", "HBS", "Express", "JWT", "Rest API", "Socket.IO", "SCSS", "TailwindCSS", "JavaScript", "CSS", "HTML", "Axios", "Mongoose", "Cloudinary"],
}

export default data;