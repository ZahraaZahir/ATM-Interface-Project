const squareInputs = document.querySelectorAll(".square");
let currentFieldIndex = -1;

function handleNumberClick(number) {
  console.log(currentFieldIndex);
  if (currentFieldIndex < 3) {
    currentFieldIndex++;
    if (currentFieldIndex < squareInputs.length) {
      squareInputs[currentFieldIndex].value = number;
    }
  }
}

function deleteActiveDigit() {
  if (currentFieldIndex < squareInputs.length) {
    squareInputs[currentFieldIndex].value = "";
    currentFieldIndex--;
  }
}

function clearPIN() {
  squareInputs.forEach(field => field.value = "");
  currentFieldIndex = -1;
}

function submitPIN() {
  const pin = Array.from(squareInputs).map(field => field.value).join("");
  // alert("PIN submitted: " + pin);
  clearPIN();
  currentFieldIndex = -1;
  window.location.href = "/screens/customization/customization.html";
}