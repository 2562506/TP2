import './style.css'

const btns = document.querySelectorAll(".filtres")
console.log(btns)

// Obtient le texte dans la barre de recherche
let rechercheTexte = document.getElementById("searchInput");
rechercheTexte.addEventListener("input", filterByName);

// Filtre les potions selon leur nom
function filterByName(event) {
  let rechercheTexte = event.target.value.trim().toLowerCase();
  let listePotions = document.querySelectorAll(".titre-potion");

  listePotions.forEach(function(item) {
    let cartePotion = item.closest(".boite-catalogue");

    // Cache ou affiche la carte selon la recherche
    if (!item.innerText.toLowerCase().includes(rechercheTexte)) {
      cartePotion.style.display = 'none';
    } else {
      cartePotion.style.display = '';
    }
  });
}


btns.forEach(function(btn)) {
  btn.addEventListe
}
