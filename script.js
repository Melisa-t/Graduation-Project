let days = document.getElementById("days")
let hours = document.getElementById("hours")
let minutes = document.getElementById("minutes")
let seconds  = document.getElementById("seconds")

// set a variable for current time and new time, 
// then calculate the time

const currentYear = new Date().getFullYear();
const newTime = new Date(` April 4 ${currentYear + 1} 00:00:00:00 `)

function countdownTimer(){
    const currentTime = new Date(); 
    const difference = newTime - currentTime;

    const d = Math.floor(difference / 1000 / 60 / 60 / 24);
    const h = Math.floor(difference / 1000 / 60 / 60 % 24);
    const m = Math.floor(difference / 1000 / 60 % 60);
    const s = Math.floor(difference / 1000 % 60 );

    days.innerHTML = d;
    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;

    setInterval(countdownTimer, 1000)
}


countdownTimer()