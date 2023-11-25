const returnButton = document.querySelector(".design-button return");
const rectangleField = document.querySelector(".rectangle");

function moveToHomePage() {
  window.location.href = "/screens/home/home.html";
}
function moveToWelcomePage() {
  window.location.href = "/screens/welcome/index.html";
}
function moveToPinPage() {
  window.location.href = "/screens/pin/pin.html";
}

function contactBankFunction() {
  document.getElementById('overlay').style.display = 'block';
  document.getElementById('modal').style.display = 'block';

  setTimeout(function () {
      document.getElementById('overlay').style.display = 'none';
      document.getElementById('modal').style.display = 'none';
  }, 3000);
}