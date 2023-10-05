"use strict"

window.addEventListener("keydown", playSound);

function playSound(e) {
    // console.log(e.keyCode);
    let audio = document.querySelector(`audio[data-key="${e.keyCode}"`);
    let key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    // console.log(audio);
    // console.log(key);
    if(!audio) return;
    if(!key) return;
    audio.currentTime = 0;
    audio.play();    
    key.classList.add("playing");    
}


const keys = document.querySelectorAll(".key");
keys.forEach((key) => {
    key.addEventListener("transitionend", removeEffects);
})

function removeEffects(e) {
    // console.log(this);
    this.classList.remove("playing");
}