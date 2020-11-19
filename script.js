"use strict";

const top_bar1 = document.querySelector(".top_bar1");
const top_bar2 = document.querySelector(".top_bar2");
const mobile_window = document.querySelector(".mobile_window");
const burger = document.querySelector("#burger");
const navLinks = document.querySelector(".nav-links");

window.addEventListener("load", start);

function start() {
  burger.addEventListener("click", clickedBurger);
}

function clickedBurger() {
  burger.classList.toggle("change");
  navLinks.classList.toggle("hide");
}

// function changeProject() {
//   document.querySelector("#mobile_project1").src = "assets/mobile_project_1_2.webp";
//   mobile_window.removeEventListener("click", start);
//   start();
// }

// function changePhoto() {}

// function clickedTopBar1() {
//   document.querySelector("#project1_img").src = "assets/dogg_design.webp";
//   top_bar1.style.backgroundColor = "#FAEBFF";
//   top_bar2.style.backgroundColor = "white";
//   top_bar1.style.zIndex = "2";
//   top_bar2.style.zIndex = "0";
// }

// function clickedTopBar2() {
//   document.querySelector("#project1_img").src = "assets/pink_grid.png";
//   top_bar2.style.backgroundColor = "#FAEBFF";
//   top_bar1.style.backgroundColor = "white";
//   top_bar1.style.zIndex = "0";
//   top_bar2.style.zIndex = "2";
// }

// function onClickMenu() {
//   let burgerState = true;
//   isMenuOpen(burgerState);
// }

// function isMenuOpen(value) {
//   if (burgerState === true) {
//     return true;
//   } else {
//     return false;
//   }
// }
