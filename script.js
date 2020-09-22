const close = document.getElementById("logo");
const navigation = document.querySelector(".nav__navigation");
const overlay = document.querySelector(".main-content");

logo.addEventListener("click", function () {
  navigation.classList.toggle("open");
  overlay.classList.toggle("overlay");
  console.log("Clicked");
});
