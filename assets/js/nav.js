const navSlide = () => {
  const burger = document.querySelector(".burger-toggler");
  const nav = document.querySelector(".navbar-collapse");
  const navLinks = document.querySelectorAll('.navbar-collapse li')

  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
  });

}

navSlide();