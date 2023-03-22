
let startButton = document.querySelector("#get-started-button");

startButton.addEventListener("click", function(){
    window.location.href = "assets/services.html";
});

let youtubeButton = document.querySelector("#watch-button");

youtubeButton.addEventListener("click", ()=>{
    window.location.href= "https://youtube.com";
});

document.querySelector(".dropdown-toggle").dropdown();

