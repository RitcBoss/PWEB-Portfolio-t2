const myBtn = document.getElementById("btn-scroll")
const scrollHome = document.getElementById("section-home")
const scrollHomeNav = document.getElementById("section-home-nav")
const scrollAbout = document.getElementById("section-about")
const scrollAboutNav = document.getElementById("section-about-nav")
const scrollPortfolio = document.getElementById("section-port")
const scrollPortfolioNav = document.getElementById("section-port-nav")
const scrollContact = document.getElementById("section-contact")
const scrollContactNav = document.getElementById("section-contact-nav")
const scrollm = document.getElementById("header-top")
const modeModify = document.getElementById("mode-set")
const bgBody = document.getElementById("background-main")
const navMenu = document.getElementById("btn-nav-menu")

// Load the mode from localStorage on page load
window.addEventListener("load", () => {
    const mode = localStorage.getItem("mode");

    if (mode === "light") {
        bgBody.classList.add("set-mode-light");
        modeModify.classList.remove("light");
    }
});

modeModify.addEventListener("click", () => {
    bgBody.classList.toggle("set-mode-light");
    
    if (modeModify.classList.contains("light")) {
        modeModify.classList.remove("light");
        localStorage.setItem("mode", "light"); 
    } else {
        modeModify.classList.add("light");
        localStorage.setItem("mode", "dark");
    }
});

window.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;

    if (scrollPosition > 800) {
        myBtn.classList.add('btn-scroll-show');
    } else {
        myBtn.classList.remove('btn-scroll-show');
    }
});

function backUpTo() {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
}

function openNavMenu() {
    navMenu.style.display= "flex"
    document.body.style.overflow = "hidden"
}

function closeNavMenu() {
    navMenu.style.display= "none"
    document.body.style.overflow = ""
}












//nav-menu ---
scrollAbout.addEventListener("click", () => {
    document.documentElement.scrollTop = 1000;
    document.body.scrollTop = 1000;
})

scrollPortfolio.addEventListener("click", () => {
    document.documentElement.scrollTop = 2000;
    document.body.scrollTop = 2000;
})

scrollHome.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
})

scrollContact.addEventListener("click", () => {
    document.documentElement.scrollTop = 5000;
    document.body.scrollTop = 0;
})


//nav-slide-menu ---

scrollAboutNav.addEventListener("click", () => {
    closeNavMenu()
    document.documentElement.scrollTop = 1000;
    document.body.scrollTop = 1000;
})
scrollPortfolioNav.addEventListener("click", () => {
    closeNavMenu()
    document.documentElement.scrollTop = 2000;
    document.body.scrollTop = 2000;
})

scrollHomeNav.addEventListener("click", () => {
    closeNavMenu()
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
})

scrollContactNav.addEventListener("click", () => {
    closeNavMenu()
    document.documentElement.scrollTop = 5000;
    document.body.scrollTop = 0;
})


ScrollReveal({
    reset: false,
    distance: '100px',
    duration: 2000,
});




//Animation Scroll//s
ScrollReveal().reveal('header', { delay: 500, origin: 'top' });

ScrollReveal().reveal('.main-page .container .main .left h1', { delay: 500, });
ScrollReveal().reveal('.main-page .container .main .left p', { delay: 850, });
ScrollReveal().reveal('.main-page .container .main .left .icon', { delay: 900, });
ScrollReveal().reveal('.main-page .container .main .right', { delay: 900, });

ScrollReveal().reveal('.bt-outline-gn-box', { delay: 200, });
ScrollReveal().reveal('.about .container__about .title .left .left-intro', { delay: 200 });
ScrollReveal().reveal('.about .container__about .title .left .box-skill', { delay: 250 });
ScrollReveal().reveal('.about .container__about .title .right', { delay: 350, });

ScrollReveal().reveal('.project .container__project .content .item-box .item-box-left', { delay: 250 });
ScrollReveal().reveal('.project .container__project .content .item-box .item-box-right', { delay: 350, });

ScrollReveal().reveal('.from .from__container .main .main-bg', { delay: 450, });
