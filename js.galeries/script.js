
//Gestion du Unnmute en un clique ainsi que du volume de la musique 
const audio = document.getElementById("myAudio");
//activation du bttn
const button = document.getElementById ("demuteAudio");
function demuteAudio(){
  if (audio){
    audio.muted =false; //enlève le mute en un simple clique 
    audio.volume = 0.4; // regle le volume a 40%
    audio;play();        //relance la lecture une fois que celle-ci soit terminer 
  }
}



button.addEventListener('click', function() {
  if (audio) {
    audio.muted = false;     // retire le muted
    audio.volume = 0.4;      // règle le volume à 40%
    audio.play().catch(error => {
      console.error('Erreur de lecture :', error);
    });
  }
});
