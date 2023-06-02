/********  SHOWBARS  *********/
const navMenu = document.getElementById('nav-menu'),
    navToggle =  document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}
if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}
const navLink = document.querySelectorAll('.nav-link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))




/*==================== SHOW SCROLL UP ====================*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    if(this.scrollY >= 200) scrollUp.classList.add('show-scroll');
     else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)




/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
    distance: '60px',
    duration: 2800,
    // reset: true,
})


sr.reveal(`.home-data, .home-social-link,
           .service__container,
           .footer__data, .footer__rights,
           .section__title,
           .experience__data,
           .gallery-img`,{
    origin: 'top',
    interval: 100,
})

sr.reveal(`.about__data, 
           .subscribe__description,
           .experience__title,
           .gallery-btn`,{
    origin: 'left',
})

sr.reveal(`.about__img-overlay, 
           .subscribe__form,
           .subscribe__title,
           .experience__img`,{
    origin: 'right',
    interval: 100,
})