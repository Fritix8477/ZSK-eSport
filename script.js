document.addEventListener("DOMContentLoaded", () => {
    const leftBtn = document.querySelector(".left-btn");
    const rightBtn = document.querySelector(".right-btn");
    const playersContainer = document.querySelector(".players-container");

    leftBtn.addEventListener("click", () => {
        playersContainer.scrollBy({
            left: -300,
            behavior: "smooth",
        });
    });

    rightBtn.addEventListener("click", () => {
        playersContainer.scrollBy({
            left: 300,
            behavior: "smooth",
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("mouseover", () => {
            link.style.textDecoration = "underline";
        });
        link.addEventListener("mouseout", () => {
            link.style.textDecoration = "none";
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const carrouselImages = document.querySelector(".carrousel-images");
    const carrouselItems = document.querySelectorAll(".carrousel-item");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");

    let currentIndex = 0;

    const updateCarrousel = () => {
        const offset = -currentIndex * 100; // Déplacement basé sur l'index
        carrouselImages.style.transform = `translateX(${offset}%)`;
    };

    prevBtn.addEventListener("click", () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : carrouselItems.length - 1;
        updateCarrousel();
    });

    nextBtn.addEventListener("click", () => {
        currentIndex = (currentIndex < carrouselItems.length - 1) ? currentIndex + 1 : 0;
        updateCarrousel();
    });
});



