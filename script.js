"use strict";

const top_bar1 = document.querySelector(".top_bar1");
const top_bar2 = document.querySelector(".top_bar2");
const mobile_window = document.querySelector(".mobile_window");

window.addEventListener("load", start);

function start() {
  mobile_window.addEventListener("click", changeProject);
  top_bar1.addEventListener("click", clickedTopBar1);
  top_bar2.addEventListener("click", clickedTopBar2);
}

// function changeProject() {
//   document.querySelector("#mobile_project1").src = "assets/mobile_project_1_2.webp";
//   mobile_window.removeEventListener("click", start);
//   start();
// }

// function changePhoto() {}

function clickedTopBar1() {
  document.querySelector("#project1_img").src = "assets/dogg_design.webp";
  top_bar1.style.backgroundColor = "#FAEBFF";
  top_bar2.style.backgroundColor = "white";
  top_bar1.style.zIndex = "2";
  top_bar2.style.zIndex = "0";
}

function clickedTopBar2() {
  document.querySelector("#project1_img").src = "assets/pink_grid.png";
  top_bar2.style.backgroundColor = "#FAEBFF";
  top_bar1.style.backgroundColor = "white";
  top_bar1.style.zIndex = "0";
  top_bar2.style.zIndex = "2";
}
