const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
    reveals.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const revealPoint = 120;

        if (elementTop < windowHeight - revealPoint) {
            element.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
let projectIndex = 0;

const projects = document.querySelectorAll(".projects-carousel .project-card");
const dots = document.querySelectorAll(".dot");

function showProject(index) {
    if (index >= projects.length) {
        projectIndex = 0;
    }

    if (index < 0) {
        projectIndex = projects.length - 1;
    }

    projects.forEach((project) => {
        project.classList.remove("active");
    });

    dots.forEach((dot) => {
        dot.classList.remove("active");
    });

    projects[projectIndex].classList.add("active");
    dots[projectIndex].classList.add("active");
}

function changeProject(direction) {
    projectIndex = projectIndex + direction;
    showProject(projectIndex);
}

function currentProject(index) {
    projectIndex = index;
    showProject(projectIndex);
}

showProject(projectIndex);
