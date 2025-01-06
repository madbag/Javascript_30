    window.addEventListener("keydown", playSound)
    // console.log(audio)
    // console.log(key)

    function playSound(e){
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
        if(!audio) return; //stop the function from running off together

        key.classList.add("playing");
        audio.currentTime = 0; //rewind the time to start
        audio.play();
    }

    function removeTransition(e){
        // console.log(e)
        if(e.propertyName !== "transform") return; //skip if it is not a transform
        // console.log(e.propertyName);
        this.classList.remove("playing");
    }

    const keys= document.querySelectorAll('.key');
    keys.forEach(key => key.addEventListener('transitionend', removeTransition ));