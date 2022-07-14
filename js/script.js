// Ativar Links do Menu
const links = document.querySelectorAll(".header-menu a");

const ativarLink = (link) => {
  const url = location.href;
  const href = link.href;

  if (!url.includes(href)) {
    return;
  }
  link.classList.add("ativo");
};

links.forEach(ativarLink);

// Ativar Itens do Orçamento

// Seguro

const params = new URLSearchParams(location.search);

const getParams = (param) => {
  const element = document.querySelector("#" + param);
  if (!element) return;
  element.setAttribute("checked", true);
};

params.forEach(getParams);
