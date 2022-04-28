//menu hamburguer

const hamburguer = document.querySelector(".hamburguer");
const navMenu = document.querySelector("._nav-menu");

hamburguer.addEventListener("click", () => {
  hamburguer.classList.toggle("active");
  navMenu.classList.toggle("active");
})

document.querySelectorAll("._nav-link").forEach(n => n.addEventListener("click", () => {
  hamburguer.classList.remove("active");
  navMenu.classList.remove("active");
}))


//loader page 

const overlay = document.querySelector("._overlay")
window.addEventListener("load", function(){
  overlay.style.display = "none";
})



const language = document.querySelector("._header-language");
const languageh = document.querySelector("._header-languageh");

language.addEventListener("click", () => {
  language.classList.toggle("active");
  languageh.classList.toggle("active");
})

document.querySelectorAll("._nav-link").forEach(n => n.addEventListener("click", () => {
  language.classList.remove("active");
  languageh.classList.remove("active");
}))