import "./style.css";
import discos from "./data/discos";

const temaBtn = document.querySelector("#tema");
temaBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

const badReligionLink = document.querySelector("#badReligionLink");
const lagwagonLink = document.querySelector("#lagwagonLink");
const nofxLink = document.querySelector("#nofxLink");

const PintarGrupo = (grupo) => {
  const favoritosSection = document.querySelector("#discosFavoritos");
  favoritosSection.innerHTML = "";
  const otrosSection = document.querySelector("#otrosDiscos");
  otrosSection.innerHTML = "";
  
  for (const disco of discos) {
    if (disco.grupo == grupo) {
      const article = document.createElement("article");
      article.innerHTML = `
        <img src=${disco.portada} alt=${disco.titulo}
        <h3>${disco.titulo}</h3>
        <h3>${disco.año}</h3>
      `;
      if (disco.favorito) {
        favoritosSection.appendChild(article);
      } else {
        otrosSection.appendChild(article);
      }
    }
  }
};

badReligionLink.addEventListener("click", () => {
  PintarGrupo("Bad Religion");
});

lagwagonLink.addEventListener("click", () => {
  PintarGrupo("Lagwagon");
});
nofxLink.addEventListener("click", () => {
  PintarGrupo("NoFX");
});

PintarGrupo("Bad Religion");