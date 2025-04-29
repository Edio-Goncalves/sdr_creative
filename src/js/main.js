document.querySelectorAll(".pergunta").forEach((pergunta) => {
  pergunta.addEventListener("click", function () {
    const wrapper = this.parentElement;
    wrapper.classList.toggle("active");
  });
});

/* MENU */
const menu = document.getElementById("menu");
const backDrop = document.querySelector(".backDrop");

function toggleMenu() {
  menu.classList.toggle("active");
  backDrop.classList.toggle("active");
}
document.getElementById("bars").addEventListener("click", toggleMenu);
document.getElementById("close").addEventListener("click", toggleMenu);

backDrop.addEventListener("click", toggleMenu);

/* MENU COLOR*/

window.addEventListener("scroll", () => {
  let header = document.querySelector(".header-content");
  header.classList.toggle("scroll-color", window.scrollY > 0);
});
