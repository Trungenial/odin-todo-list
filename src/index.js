import "./icon.js";
import "./styles/style.css";

const menuToggle = document.getElementById("nav-menu-toggle");
const sidebar = document.getElementById("sidebar-container");
const mainBoard = document.getElementById("main-board");

menuToggle.addEventListener("click", () => {
    sidebar.classList.toggle("expanded");

    const isExpanded = menuToggle.getAttribute("aria-expanded") === true;
    menuToggle.setAttribute("aria-expanded", !isExpanded);
});
