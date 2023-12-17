ScrollReveal({ 
    reset: true,
    distance:'70px',
    duration:1500,
    delay:200

});
ScrollReveal().reveal('.home-text,.categories-title', { origin: 'top' });
ScrollReveal().reveal('.categories,.col-7,.project', { origin: 'bottom' });
ScrollReveal().reveal('.image,.contact-left', { origin: 'left' });
ScrollReveal().reveal('.about,.contact-right', { origin: 'right' });