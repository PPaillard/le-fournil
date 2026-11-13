// Le Fournil de Léa : le script corrigé (jour 4)

// Étape 4 : le compteur du panier
let nombre = 0;
const compteur = document.querySelector("#compteur");

// Étapes 3 et 4 : les boutons Commander
const boutonsCommander = document.querySelectorAll(".produit-bouton");

for (const bouton of boutonsCommander) {
  bouton.addEventListener("click", function () {
    // Étape 3 : d'abord une alerte, pour vérifier que le clic marche
    // alert("Ajouté au panier !");

    // Étape 4 : on ajoute 1 au panier, et on l'affiche
    nombre = nombre + 1;
    compteur.textContent = nombre;
  });
}

// Étape 5 : afficher ou cacher les horaires
const boutonHoraires = document.querySelector("#bouton-horaires");
const tableHoraires = document.querySelector("#table-horaires");

boutonHoraires.addEventListener("click", function () {
  tableHoraires.classList.toggle("cache");
});
