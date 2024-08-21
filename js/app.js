const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')
const navLogo = document.querySelector('#navbar__logo');

// display mobile menu
const mobileMenu = () => {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
}

menu.addEventListener('click', mobileMenu);


var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    lickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


// Show active menu when scrolling
const highlightMenu = () => {
  const elem = document.querySelector('.highlight');
  const homeMenu1 = document.querySelector('#home-page');
  const homeMenu = document.querySelector('#aboutMe-page');
  const aboutMenu = document.querySelector('#projects-page');
  const servicesMenu = document.querySelector('#more-page');
  let scrollPos = window.scrollY;
  // console.log(scrollPos);

  // adds 'highlight' class to my menu items
  if (window.innerWidth > 960 && scrollPos < 600)
  {
    homeMenu1.classList.add('highlight');
    homeMenu.classList.remove('highlight');
  }
  else if(window.innerWidth > 960 && scrollPos < 1400) {
    homeMenu1.classList.remove('highlight');
    homeMenu.classList.add('highlight');
    aboutMenu.classList.remove('highlight');
    return;
  } 
  else if (window.innerWidth > 960 && scrollPos < 2345) {
    aboutMenu.classList.add('highlight');
    homeMenu.classList.remove('highlight');
    servicesMenu.classList.remove('highlight');
    return;
  }
  //else if (window.innerWidth > 960 && scrollPos < 2345) {
  //   servicesMenu.classList.add('highlight');
  //   aboutMenu.classList.remove('highlight');
  //   return;
  // }

  if ((elem && window.innerWidth < 960 && scrollPos < 600) || elem) {
    elem.classList.remove('highlight');
  }
};

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

//  Close mobile Menu when clicking on a menu item
const hideMobileMenu = () => {
  const menuBars = document.querySelector('.is-active');
  if (window.innerWidth <= 768 && menuBars) {
    menu.classList.toggle('is-active');
    menuLinks.classList.remove('active');
  }
};

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);