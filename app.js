const navbar = document.querySelector('#nav');
const navBtn = document.querySelector('.nav-btn');
const closeBtn = document.querySelector('.close-btn');
const sideBar = document.querySelector('.sidebar');
const date = document.querySelector('#date');

function handleCardHover(card) {
  card.addEventListener('mouseenter', () => {
    card.style.width = '250%';
    card.querySelector('.project-info').style.display = 'block';
  });

  card.addEventListener('mouseleave', () => {
    card.style.width = '100%';
    card.querySelector('.project-img').style.transform = 'scale(1)';
    card.querySelector('.project-info').style.display = 'none';
  });
}

const projectCards = document.querySelectorAll('.project');

function checkScreenWidth() {
  const screenWidth = window.innerWidth;

  projectCards.forEach((card) => {
    if (screenWidth > 900) {
      handleCardHover(card);
    } else {
      card.removeEventListener('mouseenter', () => {});
      card.removeEventListener('mouseleave', () => {});
      card.style.width = '100%';
    }
  });
}

window.addEventListener('load', checkScreenWidth);
window.addEventListener('resize', checkScreenWidth);

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 50) {
    navbar.classList.add('navbar-fixed');
  } else {
    navbar.classList.remove('navbar-fixed');
  }
});
// show sidebar
navBtn.addEventListener('click', () => {
  sideBar.classList.add('show-sidebar');
});
closeBtn.addEventListener('click', () => {
  sideBar.classList.remove('show-sidebar');
});
// set year
date.innerHTML = new Date().getFullYear();
