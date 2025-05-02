// Fonction appelée lorsqu'on clique sur le bouton "Voir plus" / "Voir moins"
function toggleVideo(event) {
  event.preventDefault(); // Empêche l'action par défaut du lien (évite de recharger la page)

  const extraVideos = document.getElementById("extra-videos"); // Récupère le conteneur des vidéos supplémentaires
  const btn = event.currentTarget; // Récupère le bouton qui a été cliqué

  // Vérifie si le conteneur des vidéos est caché ou vide
  if (extraVideos.style.display === "none" || extraVideos.style.display === "") {
      extraVideos.style.display = "block"; // Affiche les vidéos supplémentaires
      btn.textContent = "Voir moins"; // Change le texte du bouton pour "Voir moins"
  } else {
      extraVideos.style.display = "none"; // Cache les vidéos supplémentaires
      btn.textContent = "Voir plus"; // Remet le texte du bouton sur "Voir plus"
  }
}




//ANIMATION SONAR DU RAP 
   // Fonction qui crée une étoile filante aléatoire
   function createStar() {
    const star = document.createElement('div'); // Crée un nouvel élément <div> pour l'étoile
    star.classList.add('star'); // Ajoute la classe 'star' pour appliquer le style de l'étoile

    //  Positionne l'étoile aléatoirement sur l'écran
    star.style.left = Math.random() * window.innerWidth + 'px'; // Position horizontale aléatoire
    star.style.top = Math.random() * window.innerHeight / 2 + 'px'; // Position verticale aléatoire (moitié supérieure de l'écran)

    // Ajoute l'étoile dans le conteneur des étoiles
    document.getElementById('stars-container').appendChild(star);

    // Supprime l'étoile après qu'elle ait terminé son animation
    setTimeout(() => {
      star.remove(); // Retire l'étoile du DOM
    }, 1000); // Correspond au temps de l'animation
  }

  // Crée une étoile filante toutes les 300-800ms
  setInterval(() => {
    createStar(); // Crée une nouvelle étoile à chaque intervalle
  }, Math.random() * 300 + 300); // Intervalle aléatoire entre 300ms et 1000ms (plus d'étoiles
