const colorBox = document.getElementById("colorBox");
const hexCode = document.getElementById("hexCode");
const rgbCode = document.getElementById("rgbCode");
const generateBtn = document.getElementById("generateBtn");
const copyBtn = document.getElementById("copyBtn");
const message = document.getElementById("message");


function getRandomNumber() {
    return Math.floor(Math.random() * 256);
}


function generateColor() {

    const red = getRandomNumber();
    const green = getRandomNumber();
    const blue = getRandomNumber();

    const rgb = `rgb(${red}, ${green}, ${blue})`;

    const hex = "#" +
        red.toString(16).padStart(2, "0") +
        green.toString(16).padStart(2, "0") +
        blue.toString(16).padStart(2, "0");

    colorBox.style.backgroundColor = rgb;

    hexCode.textContent = hex.toUpperCase();

    rgbCode.textContent = `RGB(${red}, ${green}, ${blue})`;

    message.textContent = "";
}


function copyHexCode() {

    navigator.clipboard.writeText(hexCode.textContent);

    message.textContent = "HEX code copied!";
}


generateBtn.addEventListener("click", generateColor);

copyBtn.addEventListener("click", copyHexCode);


generateColor();