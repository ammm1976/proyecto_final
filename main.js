import './style.css'
import discos from './data/discos'

const favoritosSection = document.querySelector("#discosFavoritos")
const otrosSection = document.querySelector("#otrosDiscos");

for (const disco of discos) {
  const article = document.createElement("article");
  article.innerHTML = `
    <img src=${disco.portada} alt=${disco.titulo}
    <h3>${disco.titulo}</h3>
    <h3>${disco.año}</h3>
  `;
  if (disco.favorito){
    favoritosSection.appendChild(article);
  } else {
    otrosSection.appendChild(article)
 }    
}