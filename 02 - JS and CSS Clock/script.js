// console.log(hour);

function runTheClock() {
    const date = new Date();
    
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    // Hour-Hand
    // 12 hour = 360 deg
    // 1 hour = (360/12) == 30 deg
    // 1 min =  (30/60) == 0.5 deg  i.e for every 1 minute, it will move 0.5 degree

    // Minute-Hand
    // 60 min = 360 deg
    // 1 min = (360/60) == 6 deg 
    // 1 sec = (6 / 60) == 0.1  deg  i.e for every 1 seconds, it will move 0.1 degrees

    // Second-Hand
    // 60 sec = 360 deg
    // 1 sec = 360/60 = 6 deg
    
    let secDegrees = ((sec / 60) * 360);
    const secHand = document.querySelector(".second-hand");
    secHand.style.transform = `rotate(${secDegrees + 90}deg)`;
    console.log(secDegrees);
    
    let minDegrees = ((min/60)*360);
    const minHand = document.querySelector(".min-hand");
    minHand.style.transform = `rotate(${minDegrees+90}deg)`;
    console.log(minDegrees);
    
    let hourDegrees = ((hour/12) * 360) + 90; 
    const hourHand = document.querySelector(".hour-hand");
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    console.log(hourDegrees);
}

setInterval(runTheClock, 1000);