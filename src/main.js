const tickRate = 1000 / 30; // 30 FPS
let clickStrength = 1;
let score = 100;

let chocolate = new Building('Chocolate', 0.1, 15);
let sugar = new Building('Sugar', 1, 100);

let cookieMaker = new CookieMaker ('CookieMaker', 100, chocolate);

function scorePlusPlus() {
    score += clickStrength;
}

function incScore() {
    score += chocolate.cps;
    score += sugar.cps;
}

function updateButtons() {
    chocolate.buttonState();
    sugar.buttonState();
    cookieMaker.buttonState();
}

function updatePage() {
    incScore();
    updateButtons();
    document.getElementById('score').innerHTML =
        '$' + Math.floor(score).toLocaleString();
}

setInterval(updatePage, tickRate);
