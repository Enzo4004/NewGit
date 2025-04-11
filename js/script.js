

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
