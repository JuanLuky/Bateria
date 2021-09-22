document.body.addEventListener('keyup', (event)=>{
    playsom(event.code.toLowerCase());
});

function playsom(sound) {
    let audioElement = document.querySelector(`#s_${sound}`);
    let keyElement = document.querySelector(`div[data-key="${sound}"]`);


    if(audioElement){
        audioElement.play();
    }

    if(keyElement){
        audioElement.currentTime = 0;
        keyElement.classList.add('active');

        setTimeout(()=>{
            keyElement.classList.remove('active');
        }, 300);
    }
}