let days = document.getElementById("days")
let hours = document.getElementById("hours")
let minutes = document.getElementById("minutes")
let seconds  = document.getElementById("seconds")

// set a variable for current time and new time, 
// then calculate the time

const currentYear = new Date().getFullYear();
const newTime = new Date(` April 4 ${currentYear + 1} 00:00:00:00 `)

