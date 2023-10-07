// Happy Coding

const inputs = document.querySelectorAll(".controls input");
// console.log(inputs);

function handleUpdate() {
    // console.log(this.value);
    //dataset is the object that contains all the data attributes of the this HTML element
    const suffix = this.dataset.sizing || ""; 

    document.documentElement.style.setProperty(`--${this.name}`, this.value+suffix);

}

inputs.forEach((input) => {
    input.addEventListener("change", handleUpdate);  
    input.addEventListener("mousemove", handleUpdate);  
})