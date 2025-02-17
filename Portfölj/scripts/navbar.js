const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".navbar a"); 
let currentIndex = 0; 
let lastScrollY = window.scrollY; 

document.addEventListener('scroll', () => {
    let direction;

    if (window.scrollY > lastScrollY) {
        direction = "down";
    } else {
        direction = "up";
    }
    lastScrollY = window.scrollY;

    if (direction === "down" && currentIndex < sections.length - 1) {
        currentIndex++;
    }
    if (direction === "up" && currentIndex > 0) {
        currentIndex--;
    }
    navLinks.forEach(link => {
        link.classList.remove("active");
    });

    const currentLink = navLinks[currentIndex];
    currentLink.classList.add("active");
});