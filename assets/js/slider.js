document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelector('.slider');
    const slide = document.querySelectorAll('.slide');
    const totalSlides = slide.length;
    
    let index = 0;

    // DUPLIQUER le premier slide et l'ajouter à la fin
    const firstClone = slide[0].cloneNode(true);
    slides.appendChild(firstClone);

    function slideShow() {
        index++;
        slides.style.transition = "transform 0.5s ease-in-out";
        slides.style.transform = `translateX(${-index * 100}%)`;

        // Réinitialisation après la dernière slide pour un effet infini
        if (index === totalSlides) {
            setTimeout(() => {
                slides.style.transition = "none"; // Supprimer l'animation
                slides.style.transform = "translateX(0%)"; // Retour au début
                index = 0;
            }, 500); // Attendre la fin de l'animation avant de reset
        }
    }

    setInterval(slideShow, 3000);
});
