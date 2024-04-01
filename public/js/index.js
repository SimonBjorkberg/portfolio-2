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

const hiddenElementOne = document.querySelectorAll('.hide-project-1');
hiddenElementOne.forEach((elem) => observer.observe(elem))

const hiddenElementTwo = document.querySelectorAll('.hide-project-2');
hiddenElementTwo.forEach((elem) => observer.observe(elem))

const hiddenElementThree = document.querySelectorAll('.hide-project-3');
hiddenElementThree.forEach((elem) => observer.observe(elem))

const hiddenElementFour = document.querySelectorAll('.hide-project-4');
hiddenElementFour.forEach((elem) => observer.observe(elem))

const hiddenElementFive = document.querySelectorAll('.hide-project-5');
hiddenElementFive.forEach((elem) => observer.observe(elem))

const hiddenElementSix = document.querySelectorAll('.hide-project-6');
hiddenElementSix.forEach((elem) => observer.observe(elem))