const navbar = document.querySelector('#nav');
const navBtn = document.querySelector('.nav-btn');
const closeBtn = document.querySelector('.close-btn');
const sideBar = document.querySelector('.sidebar');
const date = document.querySelector('#date');
const projectCards = document.querySelectorAll('.project');
const screenWidth = window.innerWidth;

if (screenWidth > 900) {
  projectCards.forEach((card) => {
    card.addEventListener('mouseenter', () => {
      card.style.width = '300%';
      card.querySelector('.project-info').style.display = 'block';
    });
    card.addEventListener('mouseleave', () => {
      card.querySelector('.project-info').style.display = 'none';
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
// window.addEventListener('resize', () => {
//   // Get the current screen width
//   const screenWidth = window.innerWidth;

//   // Get the current screen size category
//   const screenSizeCategory =
//     screenWidth < 576
//       ? 'xs'
//       : screenWidth < 768
//       ? 'sm'
//       : screenWidth < 992
//       ? 'md'
//       : screenWidth < 1200
//       ? 'lg'
//       : 'xl';

//   // Get the previous screen size category
//   const previousScreenSizeCategory = localStorage.getItem('screenSizeCategory');

//   // If the screen size category has changed, refresh the page
//   if (screenSizeCategory !== previousScreenSizeCategory) {
//     location.reload();
//   }

//   // Update the previous screen size category
//   localStorage.setItem('screenSizeCategory', screenSizeCategory);
// });

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
