const hamburger = document.getElementById("hamburger");
const navigation = document.querySelector(".nav__navigation");
const overlay = document.querySelector(".main-content");
const close = document.getElementById("close");

hamburger.addEventListener("click", function () {
  navigation.classList.add("open");
  overlay.classList.add("overlay");
  close.style.display = "block";
  hamburger.style.display = "none";
});

close.addEventListener("click", function () {
  navigation.classList.remove("open");
  overlay.classList.remove("overlay");
  close.style.display = "none";
  hamburger.style.display = "block";
});
