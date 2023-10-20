function toggleOpenClass() {
    // console.log(this)
    this.classList.toggle("open");
    // this.classList.toggle("open-active");
}
function toggleActiveClass(e) {
    // console.log(e);
    // console.log(e.propertyName);
    if (e.propertyName.includes("flex")) {
        // console.log("")
        this.classList.toggle("open-active");
    }
}

const panels = document.querySelectorAll(".panel");
console.log(panels);
Array.from(panels).forEach((panel) => {
    panel.addEventListener("click", toggleOpenClass);
    console.log(panel);
})
Array.from(panels).forEach((panel) => {
    panel.addEventListener("transitionend", toggleActiveClass);
    console.log(panel);
})