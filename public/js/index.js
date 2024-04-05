const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show-section')
        }
    })
})

const hiddenElement = document.querySelectorAll('.hide-section');
hiddenElement.forEach((elem) => observer.observe(elem))

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('inView')
        }
        else {
            entry.target.classList.remove('inView')
        }
    })
}, observerOptions)

const elements = document.querySelectorAll('.inViewSections');
elements.forEach((elem) => sectionObserver.observe(elem))