const observerOptions = {
    root: null,
    rootMargin: '0px',
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show-section')
        }
    })
}, observerOptions)

const hiddenElement = document.querySelectorAll('.hide-section');
hiddenElement.forEach((elem) => observer.observe(elem))
