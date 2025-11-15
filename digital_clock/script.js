let hrs = document.getElementById("hour");
let min = document.getElementById("minute");
let sec = document.getElementById("second");
let date = document.getElementById("date");


setInterval(() =>{
    let currentTime = new Date();

    date.innerHTML = currentTime.toLocaleDateString("en-us",{day: "numeric",month:"long",year: "numeric"});

    hrs.innerHTML = (currentTime.getHours() < 10 ? "0" : "") +currentTime.getHours();
    min.innerHTML = (currentTime.getMinutes() < 10 ? "0" : "")+currentTime.getMinutes();
    sec.innerHTML = (currentTime.getSeconds() < 10 ? "0" : "")+currentTime.getSeconds();
})

