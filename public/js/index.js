const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.4,
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show-project')
        }
    })
}, observerOptions)

const hiddenElement = document.querySelectorAll('.hide-project');
hiddenElement.forEach((elem) => observer.observe(elem))
