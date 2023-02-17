"use strict";

window.addEventListener("DOMContentLoaded", start);

function start(evt) {
  addEventListeners();
}

function addEventListeners() {
  document.querySelector("#my_color_picker").addEventListener("input", getColor);
}

function getColor(evt) {
  showSelectedColor;
  evt.target.value;
}

function showSelectedColor(hexColor) {
  console.log(hexColor);
  document.querySelector("#color_on_display").style.backgroundColor = hexColor;
  console.log(hexToRGB(hexColor));
}
//#a55555
function hexToRGB(hexColor) {
  const r = parseInt(hexColor.substring(1, 3), 16);
  const g = parseInt(hexColor.substring(3, 5), 16);
  const b = parseInt(hexColor.substring(5, 7), 16);

  return r, g, b;
}
