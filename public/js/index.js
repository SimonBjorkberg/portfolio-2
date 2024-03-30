const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.4,
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        }
    })
}, observerOptions)

const hiddenElements = document.querySelectorAll('.hide');
hiddenElements.forEach((elem) => observer.observe(elem))


let vh = window.innerHeight * 0.01
document.documentElement.style.setProperty('--vh', `${vh}px`)