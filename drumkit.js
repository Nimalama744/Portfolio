


window.addEventListener('keyup', function(e) {
    
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const drum = document.querySelector(`.drum[data-key="${e.keyCode}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    console.log(drum);
    drum.classList.add('playing');
    

});

function removeTransition(){
    drum.classList.remove('playing');
}

const keys = document.querySelectorAll('.drum');
keys.forEach (key => key.add('transitionend',removeTransition));
