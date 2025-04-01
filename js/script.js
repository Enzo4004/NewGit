document.getElementById("button-1").addEventListener("click", function() {
    let button = this;
    
    // Ajout de la classe pour l'animation
    button.classList.add("animate");

    // Suppression après 3s pour revenir à l'état normal
    setTimeout(() => {
        button.classList.remove("animate");
    }, 300);
    console.log ("trés Bon choix !");
});