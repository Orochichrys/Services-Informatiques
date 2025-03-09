document.addEventListener("DOMContentLoaded",  () => {
    const menuToggle = document.querySelector(".bouton-menu");
    const menuIcon = document.querySelector("#menu-icon");
    const navbar = document.querySelector(".navbar");

    menuToggle.addEventListener("click", function () {
        navbar.classList.toggle("active"); 
        // Conditions pour changer l'icône entre menu et croix
        if (menuIcon.classList.contains("bx-menu")) {
            menuIcon.classList.remove("bx-menu");
            menuIcon.classList.add("bx-x");
        } else {
            menuIcon.classList.remove("bx-x");
            menuIcon.classList.add("bx-menu");
        }
    });

});