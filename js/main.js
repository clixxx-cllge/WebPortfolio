window.addEventListener("scroll", function() {
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});


//SERVICES SECTION MODAL
const serviceModals = document.querySelectorAll(".service-modal");
const learnmoreBtns = document.querySelectorAll(".learn-more-btn");
const modalCloseBtns = document.querySelectorAll(".modal-close-btn");

var modal = function(modalClick){
    serviceModals[modalClick].classList.add("active");
}

learnmoreBtns.forEach((learnmoreBtn, i) => {
    learnmoreBtn.addEventListener("click", () => {
        modal(i);
    });
        
});

modalCloseBtns.forEach((modalCloseBtn) => {
    modalCloseBtn.addEventListener("click", () => {
        serviceModals.forEach((modalView) => {
            modalView.classList.remove("active");
        });
    });
});


//PORTFOLIO SECTION MODAL

const portfolioModals = document.querySelectorAll(".portfolio-model");
const imgCards = document.querySelectorAll(".img-card");
const portfolioCloseBtns = document.querySelectorAll(".portfolio-close-btn");

var portfolioModal = function(modalClick){
    portfolioModals[modalClick].classList.add("active");
}

imgCards.forEach((imgCard, i) => {
    imgCard.addEventListener("click", () => {
        portfolioModal(i);
    });
        
});

portfolioCloseBtns.forEach((portfolioCloseBtn) => {
    portfolioCloseBtn.addEventListener("click", () => {
        portfolioModals.forEach((portfolioModalView) => {
            portfolioModalView.classList.remove("active");
        });
    });
});

//quizzes SECTION MODAL

const quizzesModals = document.querySelectorAll(".quizzes-model");
const quizzesImgCards = document.querySelectorAll(".q-img-card");
const quizzesCloseBtns = document.querySelectorAll(".quizzes-close-btn");

var quizzesModal = function(modalClick){
    quizzesModals[modalClick].classList.add("active");
}

quizzesImgCards.forEach((quizzesImgCard, i) => {
    quizzesImgCard.addEventListener("click", () => {
        quizzesModal(i);
    });
        
});

quizzesCloseBtns.forEach((quizzesCloseBtn) => {
    quizzesCloseBtn.addEventListener("click", () => {
        quizzesModals.forEach((quizzesModalView) => {
            quizzesModalView.classList.remove("active");
        });
    });
});


window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    const scrollY = window.pageYOffset;

    sections.forEach((current) => {
        let sectionHeight = current.offsetHeight;
        let sectionTop = current.offsetTop - 50;
        let id = current.getAttribute("id");

        let navLink = document.querySelector(".nav-items a[href*='" + id + "']");

        if (navLink) { // Check if the link exists before using classList
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLink.classList.add("active");
            } else {
                navLink.classList.remove("active");
            }
        }
    });
});



//dar/light theme
const themeBtn = document.querySelector(".theme-btn");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    themeBtn.classList.toggle("sun");

    localStorage.setItem("saved-theme", getCurrentTheme());
    localStorage.setItem("saved-themeicon", getCurrentIcon());
});

const getCurrentTheme = () => document.body.classList.contains("dark-theme") ? "dark" : "light";
const getCurrentIcon = () => themeBtn.classList.contains("sun") ? "sun" : "moon";

const savedTheme = localStorage.getItem("saved-theme");
const savedIcon = localStorage.getItem("saved-icon");

if (savedTheme){
    document.body.classList[savedTheme === "dark" ? "add" : "remove"]("dark-theme");
    themeBtn.classList[savedIcon === "sun" ? "add" : "remove"]("sun")
}


//responsive nav menu toggle
const menuBtn = document.querySelector(".nav-menu-btn");
const closeBtn = document.querySelector(".nav-close-btn");
const navigation = document.querySelector(".navigation");
const navItems = document.querySelectorAll(".nav-items a");


menuBtn.addEventListener("click", () => {
    navigation.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    navigation.classList.remove("active");
});

navItems.forEach((navItem) => {
    navItem.addEventListener("click", () => {
        navigation.classList.remove("active");
    });
});

ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 2500,
    delay: 100
});

ScrollReveal().reveal('.home .info h2, .section-title-01, .section-title-02', { delay: 500, origin:'left'});
ScrollReveal().reveal('.home .info h3, .home .info p, .about-info .btn', { delay: 600, origin:'right'});
ScrollReveal().reveal('.home .info .btn', { delay: 700, origin:'bottom'});
ScrollReveal().reveal('.media-icons i, .contact-left li', { delay: 500, origin: 'left', interval: 200 });
ScrollReveal().reveal('.home-img, .about-img', { delay: 500, origin: 'bottom' });
ScrollReveal().reveal('.about .description, .copy-right', { delay: 600, origin: 'right' });
ScrollReveal().reveal('.about .professional-list li', { delay: 500, origin: 'right', interval: 200});
ScrollReveal().reveal('.skills-description, services-description, contact-left h2', { delay: 700, origin: 'left'});
ScrollReveal().reveal('.experience-card, .service-card, .education, .portfolio .img-card', { delay: 800, origin: 'bottom', interval: 200 });
ScrollReveal().reveal('footer .group', { delay: 500, origin: 'top', interval: 200 });


document.addEventListener("DOMContentLoaded", () => {
    const images = [
        "WORKS/fandom-website.png",
        "WORKS/fandom-website2.png",
        "WORKS/fandom-website3.png",
        "WORKS/fandom-website4.png",
        "WORKS/fandom-website5.png"
    ];

    let currentImageIndex = 0;
    const sliderImage = document.querySelector(".slider-image");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");

    // Check if the elements are correctly selected
    console.log("Slider Image Element:", sliderImage);
    console.log("Prev Button Element:", prevBtn);
    console.log("Next Button Element:", nextBtn);

    if (prevBtn && nextBtn && sliderImage) {
        // Event listener for the "Prev" button
        prevBtn.addEventListener("click", () => {
            currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
            console.log("Prev button clicked");
            console.log("Current Image Index (Prev):", currentImageIndex);
            // Update the image src when clicking prev
            sliderImage.src = images[currentImageIndex] + '?t=' + new Date().getTime(); // Adding a timestamp to prevent caching
        });

        // Event listener for the "Next" button
        nextBtn.addEventListener("click", () => {
            currentImageIndex = (currentImageIndex + 1) % images.length;
            console.log("Next button clicked");
            console.log("Current Image Index (Next):", currentImageIndex);
            // Update the image src when clicking next
            sliderImage.src = images[currentImageIndex] + '?t=' + new Date().getTime(); // Adding a timestamp to prevent caching
        });
    } else {
        console.error("Slider image or buttons not found!");
    }
});
