"use strict";
const menuBtn = document.querySelector(".nav-menu-toggle");
const menuContainerSmallDivice = document.querySelector(
  ".menu-container-small-divice"
);
const closeBtn = document.querySelector(".close-icon");

// باز کردن منو با کلیک روی دکمه منو
menuBtn.addEventListener("click", () => {
  menuContainerSmallDivice.classList.toggle("hidden");
});

// بستن منو با کلیک روی دکمه بستن
closeBtn.addEventListener("click", () => {
  menuContainerSmallDivice.classList.add("hidden");
});

//  👇🏼بستن منو با فشار دادن کلید
//  Esc
// document = html
// keydown - menas : we press any key
document.addEventListener("keydown", (e) => {
  if (
    e.key === "Escape" &&
    //   and if menu not have any hidden class it means is shoying
    !menuContainerSmallDivice.classList.contains("hidden")
  ) {
    menuContainerSmallDivice.classList.add("hidden");
  }
});
