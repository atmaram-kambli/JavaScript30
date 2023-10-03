function playSound(e) {
    let audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
    let key = document.querySelector(`.key[data-key='${e.keyCode}']`)
    if(!key) return;
    if(audio == null) return;
    key.classList.add("playing");
    audio.currentTime = 0;
    audio.play();
}
window.addEventListener("keydown", playSound)

function removeTransition(e) {
    if(e.propertyName !== "transform") return;
    this.classList.remove("playing");
}

let keys = document.querySelectorAll(".key");
keys.forEach((key) => {
    key.addEventListener("transitionend", removeTransition);
})