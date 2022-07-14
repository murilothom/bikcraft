const formulario = document.querySelector("form");

formulario.addEventListener("submit", async (e) => {
  e.preventDefault();
  const botao = document.querySelector("form button");
  botao.disabled = true;
  botao.innerHTML = "Enviando...";

  const data = new FormData(formulario);

  try {
    const res = await fetch("./enviar.php", {
      method: "POST",
      body: data,
    });
    if (!res.ok) {
      formulario.innerHTML =
        "<p class='font-2-l' style='grid-column: 1/-1; padding: 1rem; border-radius: 4px; background: #f7f7f7;'><span style='color: #E00000;'>Erro no envio. Tente novamente mais tarde.</span></p>";
      return;
    }
    formulario.innerHTML =
      "<p class='font-2-l' style='grid-column: 1/-1; padding: 1rem; border-radius: 4px; background: #f7f7f7;'><span style='color: #317a00;'>Mensagem enviada com sucesso.</span></p>";
    console.log(res);
  } catch (e) {
    console.log(e);
  }
});
