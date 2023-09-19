const form = document.getElementById("game-form");
const steps = document.querySelectorAll(".form-step");
const progress = document.querySelector(".progress");
const scoreSpan = document.getElementById("score");
const botao = document.getElementById("avancar");
const final = document.getElementById("final")

let currentStep = 0;
let score = 0;

function showStep(step) {
    steps[currentStep].style.display = "none";
    steps[step].style.display = "block";
    currentStep = step;

    const progressWidth = ((currentStep + 1) / steps.length) * 100;
    progress.style.width = progressWidth + "%";

    if(currentStep == steps.length - 1) {
        final.innerHTML += score;
        botao.style.display = "none";
    }
}

function calculateScore() {
    const timeElapsed = (Date.now() - startTime) / 1000;
    score += 100 - Math.floor(timeElapsed / 5) * 2;
    scoreSpan.textContent = score;
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    calculateScore();
    if (currentStep < steps.length - 1) {
        showStep(currentStep + 1);
        startTime = Date.now();
    } 
});

let startTime = Date.now();
showStep(currentStep);
