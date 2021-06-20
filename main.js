const menuBtn = document.querySelector('.menu-btn');
const navMenu = document.querySelector('.nav-menu');
const links = document.querySelectorAll("a")

let open = false;

menuBtn.addEventListener('click', toggle)
links.forEach(link => {
  link.addEventListener('click', toggleClose);
})

function toggle() {
  if (!open) {
    navMenu.classList.add('open');

    open = true;
  } else {
    navMenu.classList.remove('open');

    open = false;
  }
}

function toggleClose() {
  open = true;
  toggle();
}

