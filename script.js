"use strict";

window.addEventListener("DOMContentLoaded", start);

function start(evt) {
  addEventListeners();
}

function addEventListeners() {
  document.querySelector("#my_color_picker").addEventListener("input", getColor);
}

function getColor(evt) {
  showSelectedColor(evt.target.value);
}

function showSelectedColor(hexValue) {
  //   console.log(hexColor);
  document.querySelector("#color_on_display").style.backgroundColor = hexValue;

  const HEXColor = hexValue;
  const RGBColor = hexToRGB(HEXColor);
  const HSLColor = RGBToHSL(RGBColor.r, RGBColor.g, RGBColor.b);
  showHEX(HEXColor);
  showRGB(RGBColor);
  showHSL(HSLColor);
  //   console.log("RGBColor", RGBColor);
  //   //   RGBToHSL(34, 255, 10);
  //   console.log("HSL", RGBToHSL(RGBColor.r, RGBColor.g, RGBColor.b));
}

//View

function showHEX(color) {
  document.querySelector("#hex").textContent = `HEX: ${color}`;
}
function showRGB(color) {
  document.querySelector("#rgb").textContent = `RGB: r: ${color.r} g: ${color.g} b: ${color.b}`;
}
function showHSL(color) {
  document.querySelector("#hsl").textContent = `HSL: h: ${Math.round(color.h)} s: ${Math.round(color.s)}% l: ${Math.round(color.l)}%`;
}

//controller
function hexToRGB(hexColor) {
  const r = parseInt(hexColor.substring(1, 3), 16);
  const g = parseInt(hexColor.substring(3, 5), 16);
  const b = parseInt(hexColor.substring(5, 7), 16);

  return { r, g, b };
}

function RGBToHSL(r, g, b) {
  r /= 255;
  g /= 255;
  b /= 255;

  let h, s, l;

  const min = Math.min(r, g, b);
  const max = Math.max(r, g, b);

  if (max === min) {
    h = 0;
  } else if (max === r) {
    h = 60 * (0 + (g - b) / (max - min));
  } else if (max === g) {
    h = 60 * (2 + (b - r) / (max - min));
  } else if (max === b) {
    h = 60 * (4 + (r - g) / (max - min));
  }

  if (h < 0) {
    h = h + 360;
  }

  l = (min + max) / 2;

  if (max === 0 || min === 1) {
    s = 0;
  } else {
    s = (max - l) / Math.min(l, 1 - l);
  }
  // multiply s and l by 100 to get the value in percent, rather than [0,1]
  s *= 100;
  l *= 100;

  console.log("hsl(%f,%f%,%f%)", h, s, l); // just for testing
  return { H, s, l };
}
