const splide = new Splide('.reviews__slider', {
  type: 'loop', // Бесконечное листание
  perPage: 3, 
  perMove: 1,
  pagination: false,
  arrows: false,
  gap: '20px',
  autoplay: true, 
  interval: 1500, 
  pauseOnHover: true, 

  breakpoints: {
    1200: {
      perPage: 2, 
    },
    1000: {
      gap: '10px', 
    },
    650: {
      perPage: 1,  
    }
  }
});

splide.mount();
