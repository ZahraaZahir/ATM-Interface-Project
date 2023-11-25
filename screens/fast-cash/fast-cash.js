// const rectangleInputs = document.querySelectorAll(".rectangle");

const returnButton = document.querySelector(".design-button return");
const rectangleField = document.querySelector(".rectangle");

function moveToHomePage() {
  window.location.href = "/screens/home/home.html";
}

function convertCurrency() {
  window.location.href = "/screens/currency-converter/currency-conventer.html";
}

function deleteActiveDigit() {
  if (currentFieldIndex < squareInputs.length) {
    squareInputs[currentFieldIndex].value = "";
    currentFieldIndex--;
  }
}

let currentFieldIndex = 0;

function addDigit(number) {
  if (currentFieldIndex < 10) {
    rectangleField.value += number;
    currentFieldIndex++;
  }
}

function deleteDigit() {
  if (0 < currentFieldIndex) {
    rectangleField.value = rectangleField.value.slice(0, -1);
    currentFieldIndex--;
  }
}

function clearRectangleField() {
  currentFieldIndex = 0;
  rectangleField.value = "";
}