// function togglemenu() {
//     const menu = document.querySelector('.control-menu');
//     menu.classList.toggle('open');
// }





const menu = document.querySelector('.control-menu');

function togglemenu() {
  menu.classList.toggle('open');
}
document.addEventListener('click', (e) => {
  const btn = document.querySelector('.menuimg');
  if (
    menu.classList.contains('open') &&
    !menu.contains(e.target) &&
    e.target !== btn
  ) {
    menu.classList.remove('open');
  }
});
