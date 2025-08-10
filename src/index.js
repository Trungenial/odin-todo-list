import "./icon.js";
import "./styles/style.css";

//Create show/hide navbar mechanism
const menuToggle = document.getElementById("nav-menu-toggle");
const sidebar = document.getElementById("sidebar-container");

menuToggle.addEventListener("click", () => {
    //switch width of the sidabar
    sidebar.classList.toggle("expanded");

    // update aria attributes
    const isExpanded = menuToggle.getAttribute("aria-expanded") === true;
    menuToggle.setAttribute("aria-expanded", !isExpanded);
});
