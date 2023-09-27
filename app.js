const navbar = document.querySelector('#nav');
const navBtn = document.querySelector('.nav-btn');
const closeBtn = document.querySelector('.close-btn');
const sideBar = document.querySelector('.sidebar');
const date = document.querySelector('#date');
const projectCards = document.querySelectorAll('.project');
const screenWidth = window.innerWidth;

if (screenWidth > 780) {
  projectCards.forEach((card) => {
    card.addEventListener('mouseenter', () => {
      card.style.width = '200%';
      card.querySelector('.project-info').style.display = 'block';
    });
    card.addEventListener('mouseleave', () => {
      card.querySelector('.project-info').style.display = 'none';
      card.style.width = '';
    });
  });
} else {
  projectCards.forEach((card) => {
    card.addEventListener('mouseenter', () => {
      card.querySelector('.project-info').style.display = 'block';
    });

    card.addEventListener('mouseleave', () => {
      card.querySelector('.project-info').style.display = 'none';
    });
  });
}

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
