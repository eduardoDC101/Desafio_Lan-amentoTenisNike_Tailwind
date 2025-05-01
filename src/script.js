function mudaritem(classe, img) {
  const fundo = document.getElementById("corfundo");
  const imagem = document.getElementById("img");

  fundo.classList.remove("bg-tenis", "bg-tenis2", "bg-tenis3");

  imagem.src = img;
  fundo.classList.add(classe);
}
