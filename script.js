/* =========================================
   ÉLITE DRIVE
   SCRIPT PREMIUM
========================================= */


/* =========================================
   MENU MOBILE
========================================= */

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", () => {

        navMenu.classList.toggle("active");

        menuToggle.classList.toggle("active");

    });


    /* Fermer après sélection */

    const navLinks = document.querySelectorAll(".nav-menu a");

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("active");

            menuToggle.classList.remove("active");

        });

    });


    /* Fermer en cliquant à l'extérieur */

    document.addEventListener("click", (event) => {

        if (
            !navMenu.contains(event.target) &&
            !menuToggle.contains(event.target)
        ) {

            navMenu.classList.remove("active");

            menuToggle.classList.remove("active");

        }

    });

}


/* =========================================
   ANIMATION AU DÉFILEMENT
========================================= */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* =========================================
   RETOUR EN HAUT
========================================= */

const backToTop =
    document.querySelector(".back-to-top");


window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});


if (backToTop) {

    backToTop.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


/* =========================================
   ANNÉE AUTOMATIQUE
========================================= */

const year =
    document.querySelector("#year");


if (year) {

    year.textContent =
        new Date().getFullYear();

}


/* =========================================
   EFFET LÉGER SUR LE HERO
========================================= */

const hero =
    document.querySelector(".hero");

const heroShapes =
    document.querySelectorAll(".hero-shape");


window.addEventListener("scroll", () => {

    if (!hero) return;

    const scrollPosition =
        window.scrollY;

    if (scrollPosition < hero.offsetHeight) {

        heroShapes.forEach((shape, index) => {

            const speed =
                index === 0 ? 0.08 : 0.05;

            shape.style.transform =
                `translateY(${scrollPosition * speed}px)`;

        });

    }

});


/* =========================================
   CONSOLE
========================================= */

console.log(
    "Élite Drive — site chargé avec succès."
);