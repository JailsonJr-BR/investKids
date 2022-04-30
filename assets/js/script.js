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


//language menu
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

//teste
var dataReload = document.querySelectorAll("[data-reload]");

var lang = {
  en: {
    teste1: "Free trial"
  },
  es: {
    teste1: "Test pichula",
    homep: "Metod Revoluc"
  },
  pt: {
    teste1: "Teste gratis"
  }
};

if (window.location.hash) {
  if (window.location.hash === "#es") {
    teste.textContent = lang.es.teste1;
    homep.textContent = lang.es.homep;
  }
}

for (i = 0; i <= dataReload.length; i++) {
  dataReload[i].onclick = function() {
    location.reload(true);
  };
}