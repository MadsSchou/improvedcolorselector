"use strict";

window.addEventListener("DOMContentLoaded", setup);

const HTML = {};

function setup() {
  console.log("setup");
  HTML.input = document.querySelector("#colorwheel");
  HTML.colorCodes = document.querySelector("#colorCodes");
  HTML.hexValue = document.querySelector(".hex");
  HTML.rgbValue = document.querySelector(".rgb");
  HTML.cssValue = document.querySelector(".css");
  HTML.hslValue = document.querySelector(".hsl");
  HTML.colorBox = document.querySelector(".color_box");
  HTML.colorBody = document.querySelector("body");

  HTML.hexValue.textContent = `hex: ${HTML.input.value}`;
  HTML.rgbValue.textContent = "rgb: 255, 255, 255";
  HTML.cssValue.textContent = "css: rgb(255, 255, 255)";
  HTML.hslValue.textContent = "hsl: 0, 0, 100";
  HTML.colorBox.style.backgroundColor = `${HTML.input.value}`;

  getColor();
 