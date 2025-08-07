import menuIcon from "./icons/menu.svg";
import taskHomeIcon from "./icons/task_home.svg";
import supportIcon from "./icons/support.svg";
import accountIcon from "./icons/account.svg";
import addIcon from "./icons/add.svg";
import allTasksIcon from "./icons/all_tasks.svg";
import starIcon from "./icons/star.svg";
import dropdownArrowIcon from "./icons/dropdown_arrow.svg";
import checkboxBlankIcon from "./icons/checkbox_blank.svg";
import horizontalRuleIcon from "./icons/horizontal_rule.svg";
import moreIcon from "./icons/more_vert.svg";
import addTaskIcon from "./icons/add_task.svg";
import dropdownIcon from "./icons/dropdown.svg";

document.getElementById("nav-menu-toggle").src = menuIcon;
document.getElementById("task-icon").src = taskHomeIcon;
document.getElementById("support-toggle").src = supportIcon;
document.getElementById("account-toggle").src = accountIcon;
document.querySelectorAll(".js-sidebar__add-icon").forEach((icon) => {
    icon.src = addIcon;
});
document.getElementById("all-tasks-icon").src = allTasksIcon;
document.getElementById("star-icon").src = starIcon;
document.querySelectorAll(".js-checklist__img").forEach((icon) => {
    icon.src = checkboxBlankIcon;
});
document.getElementById("dropdown-arrow-icon").src = dropdownArrowIcon;
document.querySelectorAll(".js-horizontal-bar").forEach((icon) => {
    icon.src = horizontalRuleIcon;
});
document.querySelectorAll(".js-more-icon").forEach((icon) => {
    icon.src = moreIcon;
});
document.querySelectorAll(".js-add-task-icon").forEach((icon) => {
    icon.src = addTaskIcon;
});
document.querySelectorAll(".js-dropdown-icon").forEach((icon) => {
    icon.src = dropdownIcon;
});
