// Ativar Links do Menu
const links = document.querySelectorAll(".header-menu a");

links.forEach((link) => {
  const url = location.href;
  const href = link.href;

  if (!url.includes(href)) {
    return;
  }
  link.classList.add("ativo");
});

// Ativar Itens do Orçamento

const params = new URLSearchParams(location.search);

params.forEach((param) => {
  const element = document.querySelector("#" + param);
  if (!element) return;
  element.setAttribute("checked", true);
});

// FAQ

const perguntas = document.querySelectorAll(".perguntas button");

perguntas.forEach((pergunta) => {
  pergunta.addEventListener("click", (e) => {
    const pergunta = e.currentTarget;
    const controls = pergunta.getAttribute("aria-controls");
    const resposta = document.querySelector("#" + controls);

    resposta.classList.toggle("ativa");
    const ativa = resposta.classList.contains("ativa");
    pergunta.setAttribute("aria-expanded", ativa);
  });
});

// Galeria Bicicletas

const galeria = document.querySelectorAll(".bicicleta-imagens img");
const galeriaContainer = document.querySelector(".bicicleta-imagens");

galeria.forEach((img) => {
  img.addEventListener("click", (e) => {
    const img = e.currentTarget;
    const media = matchMedia("(min-width: 1000px)").matches;
    if (media) {
      galeriaContainer.prepend(img);
    }
  });
});

// Animaçao
if (window.SimpleAnime) {
  new SimpleAnime();
}
