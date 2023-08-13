"use strict";

const readBtn = document.querySelector(".mark-read");
const readIcon = document.querySelectorAll(".notification-icon");
const alertCount = document.querySelector(".alert-count");

readBtn.addEventListener("click", () => {
  readIcon.forEach((icon) => {
    icon.classList.add("read");
  });
  alertCount.textContent = "0";
});
