let responsiveMenu = document.getElementById("responsiveMenu");
let menuBtn = document.querySelector(".menuBtn");
let closeMenuBtn = document.querySelector(".closeMenuBtn");
let leftNav = document.querySelector(".leftNav");

function openMenu() {
  responsiveMenu.style.display = "block";
  responsiveMenu.style.marginTop = "25px";
  responsiveMenu.style.textAlign = "center";
  menuBtn.style.display = "none";
  closeMenuBtn.style.display = "inline";
}

function closeMenu() {
  responsiveMenu.style.display = "none";
  menuBtn.style.display = "inline";
  closeMenuBtn.style.display = "none";
}
