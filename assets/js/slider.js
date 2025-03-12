 // Initialisation de Swiper avec les options souhaitées
 var swiper = new Swiper('.swiper-container', {
    loop: true,
    autoplay: {
      delay: 3000, // Délai de 3 secondes entre chaque slide
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });