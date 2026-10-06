
/* =========================================================
   ATHARV SUDHIR KALE - PREMIUM PORTFOLIO
   JavaScript
   ========================================================= */


/* ================= MOBILE MENU ================= */

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

        navLinks.classList.toggle("active");

        if (navLinks.classList.contains("active")) {
            menuToggle.innerHTML = "✕";
        } else {
            menuToggle.innerHTML = "☰";
        }

    });


    /* Close menu after clicking a link */

    const navigationLinks =
        navLinks.querySelectorAll("a");

    navigationLinks.forEach((link) => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

            menuToggle.innerHTML = "☰";

        });

    });

}


/* ================= SCROLL REVEAL ================= */

const revealElements = document.querySelectorAll(
    ".section, .project-card, .skill-card, .certificate-card, .timeline-item, .stat-card, .contact-card"
);

const revealObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                revealObserver.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach((element) => {

    element.classList.add("reveal");

    revealObserver.observe(element);

});


/* ================= ACTIVE NAVIGATION ================= */

const sections = document.querySelectorAll(
    "section[id]"
);

const navItems = document.querySelectorAll(
    ".nav-links a"
);

const activeSectionObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    const currentId =
                        entry.target.getAttribute("id");

                    navItems.forEach((link) => {

                        link.classList.remove("active");

                        if (
                            link.getAttribute("href") ===
                            `#${currentId}`
                        ) {

                            link.classList.add("active");

                        }

                    });

                }

            });

        },
        {
            threshold: 0.35
        }
    );


sections.forEach((section) => {

    activeSectionObserver.observe(section);

});


/* ================= SCROLL TO TOP BUTTON ================= */

const scrollTopButton =
    document.createElement("button");

scrollTopButton.innerHTML = "↑";

scrollTopButton.setAttribute(
    "aria-label",
    "Scroll to top"
);

scrollTopButton.className =
    "scroll-top-button";

document.body.appendChild(scrollTopButton);


/* Show button after scrolling */

window.addEventListener(
    "scroll",
    () => {

        if (window.scrollY > 500) {

            scrollTopButton.classList.add("visible");

        } else {

            scrollTopButton.classList.remove("visible");

        }

    }
);


/* Scroll to top */

scrollTopButton.addEventListener(
    "click",
    () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }
);


/* ================= PROJECT LINK EFFECT ================= */

const projectCards =
    document.querySelectorAll(".project-card");

projectCards.forEach((card) => {

    card.addEventListener("mousemove", (event) => {

        const rect =
            card.getBoundingClientRect();

        const x =
            event.clientX - rect.left;

        const y =
            event.clientY - rect.top;

        card.style.setProperty(
            "--mouse-x",
            `${x}px`
        );

        card.style.setProperty(
            "--mouse-y",
            `${y}px`
        );

    });

});


/* ================= CURRENT YEAR ================= */

const yearElement =
    document.querySelector(".footer-bottom p");

if (yearElement) {

    const currentYear =
        new Date().getFullYear();

    yearElement.textContent =
        `© ${currentYear} Atharv Sudhir Kale. All Rights Reserved.`;

}


/* ================= CONSOLE MESSAGE ================= */

console.log(
    "🚀 Atharv Sudhir Kale portfolio loaded successfully."
);
