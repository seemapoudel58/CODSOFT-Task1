const navbar = document.querySelector('#nav');
const navBtn = document.querySelector('.nav-btn');
const closeBtn = document.querySelector('.close-btn');
const sideBar = document.querySelector('.sidebar');
const date = document.querySelector('#date');
const projects = document.querySelectorAll('.project');

if (window.innerWidth >= 780) {
  for (const project of projects) {
    project.addEventListener('mouseover', () => {
      project.style.width = '200%';
    });

    project.addEventListener('mouseout', () => {
      project.style.width = '100%';
    });
  }
}
// add fixed class to navbar
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

// navBtn.addEventListener('click', () => {
//   sideBar.classList.add('show-sidebar');
//   //   console.log(sideBar);
// });
// closeBtn.addEventListener('click', () => {
//   sideBar.classList.remove('show-sidebar');
// });
