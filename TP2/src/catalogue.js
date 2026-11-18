import './style.css'

const btns = document.querySelectorAll(".filtres")


// Obtient le texte dans la barre de recherche
let rechercheTexte = document.getElementById("searchInput");
rechercheTexte.addEventListener("input", filterByName);

// Filtre les potions selon leur nom
function filterByName(event) {
  let rechercheTexte = event.target.value.trim().toLowerCase();
  let listePotions = document.querySelectorAll(".titre-potion");

  listePotions.forEach(function (item) {
    let cartePotion = item.closest(".boite-catalogue");

    // Cache ou affiche la carte selon la recherche
    if (!item.innerText.toLowerCase().includes(rechercheTexte)) {
      cartePotion.style.display = 'none';
    } else {
      cartePotion.style.display = '';
    }
  });
}


// Récupère toutes les cartes du catalogue
const potions = document.querySelectorAll(".boite-catalogue");

// Parcourt tous les boutons
btns.forEach(function (btn) {

  // Ajout d'un évènement pour détecter le clic
  btn.addEventListener("click", function () {

    // Enlever active de tous les boutons
    btns.forEach(btn => {
      btn.classList.remove("active");
    });

    // Ajouter active au bouton cliqué
    btn.classList.add("active");

    // Parcourt toutes les cartes de potions
    potions.forEach(function (potion) {

      // Vérifie si la catégorie en question correspond à celle de la potion
      if (btn.dataset.cat === "tout" || btn.dataset.cat === potion.dataset.cat) {
        potion.style.display = "";
      } else {
        potion.style.display = "none";
      }

    });

  });

});


const params = new URLSearchParams(window.location.search);
const categorie = params.get("cat");


// Si une catégorie est indiqué lors du changement de page, activer la catégorie
if (categorie) {

    const bouton = document.querySelector(
        `.filtres[data-cat="${categorie}"]`
    );

    // Active automatiquement son filtre
    if (bouton) {
        bouton.click();
    }
}