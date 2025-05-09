// Fonction appelée lorsqu'on clique sur le bouton "Voir plus" / "Voir moins"
function toggleVideo(event) {
  
  const btn = event.currentTarget; // Récupère le bouton qui a été cliqué
  let hiddens = document.querySelectorAll(".hidden")//contenue caché 
  let warread = document.querySelectorAll(".warread")
  if(hiddens.length > 0 ){
    hiddens.forEach((e)=> {
      e.classList.remove("hidden") 
    })
    btn.textContent = "Voir Moins"
  }else {
    warread.forEach((e)=> {
      e.classList.add("hidden")
    })
    btn.textContent = "Voir Plus"
  }
    

}

// Explication de la ligne 2 a 16
//creation de la varibales qui recupere le bouton 
//creation des deux variables html (hiddens et warread) sauf que les deux on des fonctionnalités differentes 
//la classe hidden sert a cahé les elements html quand on clique pas sur le bouton 
//La classe Warread sert a differencier





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
