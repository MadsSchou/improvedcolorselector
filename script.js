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
}
