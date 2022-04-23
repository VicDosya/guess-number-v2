const paraGame = document.getElementById('paraGame');
const inputGame = document.getElementById('inputGame');
const gameButton = document.getElementById('gameButton');
const resultText = document.getElementById('resultText');
const triesText = document.getElementById('triesText');


//Send the server the client's guess//
const sendInputGuess = async (guessNumber) => {
    const response = await fetch("/ping/" + guessNumber);
    const result = await response.json();
    resultText.innerText = result.message;
};
gameButton.addEventListener("click", () => {
    sendInputGuess(inputGame.value);
});