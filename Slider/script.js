const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");
const container = document.querySelector(".images");
let counter = 0;

nextBtn.addEventListener("click",nextSilde);
prevBtn.addEventListener("click",prevSilde);

function nextSilde(){
    container.animate([{opacity:"0.1"},{opacity:"1.0"}],{duration:1000,fill:"forwards"})
    if(counter === 3)counter = 0;
    counter++;
    container.style.backgroundImage = `url(img/bcg${counter}.jpg)`
}

function prevSilde(){
    container.animate([{opacity:"0.1"},{opacity:"1.0"}],{duration:1000,fill:"forwards"})
    if(counter === 1)counter = 4;
    counter--;
    container.style.backgroundImage = `url(img/bcg${counter}.jpg)`
}