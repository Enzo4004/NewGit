

// Fonction qui affiche ou cache la vidéo
function toggleVideo(event) {
  //  Empêche que le lien recharge la page
  event.preventDefault();

  //  Récupère l'élément contenant la vidéo
  const video = document.getElementById("videoContainer");

  // Récupère le lien cliqué
  const bouton = event.target;

  //  Affiche ou cache la vidéo
  if (video.style.display === "none") {
    video.style.display = "block";          // Affiche la vidéo
    bouton.textContent = "Voir moins";      // Change le texte du bouton
  } else {
    video.style.display = "none";           // Cache la vidéo
    bouton.textContent = "Voir plus";       // Remet le texte d'origine
  }
}




   // Fonction qui crée une étoile filante aléatoire
   function createStar() {
    const star = document.createElement('div'); // Crée un nouvel élément <div> pour l'étoile
    star.classList.add('star'); // Ajoute la classe 'star' pour appliquer le style de l'étoile

    // 🪐 Positionne l'étoile aléatoirement sur l'écran
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