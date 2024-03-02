diceAmountSelector = document.getElementById("diceAmountSelector");
rollBtn = document.getElementById("rollBtn");
resultText = document.getElementById("resultText");
diceHolder = document.getElementById("diceHolder");

let toRoll = 0, rolledNs = [];
diceHolder.style.visibility = "hidden";

rollBtn.onclick = function () {
    toRoll = diceAmountSelector.value;
    rolledNs = [];
    document.querySelectorAll("#diceHolder img")
        .forEach(img => img.remove());
    diceHolder.style.visibility = "visible";

    if (isNaN(toRoll) || (receivedInput = "")) {
        diceAmountSelector.value = "";
        window.alert("Invalid Input (non-numeric). Try again");
        diceHolder.style.visibility = "hidden";
        resultText.textContent = "";
    }
    else if (Number(toRoll) > 100 || Number(toRoll) <= 0) {
        diceAmountSelector.value = "";
        window.alert("Invalid Input (number out-of-bounds). Try again");
        diceHolder.style.visibility = "hidden";
        resultText.textContent = "";
    }
    else {
        toRoll = Number(toRoll);

        for (let i = 0; i < toRoll; i++) {
            rolledNs.push(Math.floor(Math.random() * 6) + 1);
            dieX = document.createElement("img");
            dieX.src = `assets/die${rolledNs[i]}.png`;
            diceHolder.appendChild(dieX);
        }
        resultText.textContent = "Dice: " + [...rolledNs].join(", ");
    }
}
