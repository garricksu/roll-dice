
let diceBox = document.getElementById("dice__container");
let rollButton = document.getElementById("dice__button")
let diceNumber = Math.floor(Math.random() * 6 + 1);
let diceImage = document.createElement("IMG");
diceImage.setAttribute("id", "dice__img")




let displayDice = function(diceNumber) {
    switch (diceNumber) {
        case 1:
            diceImage.setAttribute("src", "/images/" + diceNumber + ".png");
            diceImage.setAttribute("alt", "Dice " + diceNumber);
        case 2:
            diceImage.setAttribute("src", "/images/" + diceNumber + ".png");
            diceImage.setAttribute("alt", "Dice " + diceNumber);
        case 3:
            diceImage.setAttribute("src", "/images/" + diceNumber + ".png");
            diceImage.setAttribute("alt", "Dice " + diceNumber);
        case 4:
            diceImage.setAttribute("src", "/images/" + diceNumber + ".png");
            diceImage.setAttribute("alt", "Dice " + diceNumber);
        case 5:
            diceImage.setAttribute("src", "/images/" + diceNumber + ".png");
            diceImage.setAttribute("alt", "Dice " + diceNumber);
        case 6:
            diceImage.setAttribute("src", "/images/" + diceNumber + ".png");
            diceImage.setAttribute("alt", "Dice " + diceNumber);
    }
    diceBox.appendChild(diceImage);
}

let rollDice = function() {
    rollButton.setAttribute("class", "disabled");
    rollButton.disabled = true;
    let counter = 0
    let numberOfRolls = Math.floor(Math.random()*3 + 5)
    let frame = setInterval(displayRoll, 500)
    displayRoll();
    let rollsCompleted = setInterval(function () {
        counter++;
        console.log(counter)
        if (counter === numberOfRolls) {
            clearInterval(frame);
            clearInterval(rollsCompleted)
            rollButton.classList.remove("disabled");
            rollButton.disabled = false;
        }
    }, 500)
}

function displayRoll() {
    diceNumber = Math.floor(Math.random() * 6 + 1);
    displayDice(diceNumber);
}




displayDice(diceNumber);
console.log(rollButton)

