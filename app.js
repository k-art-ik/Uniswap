//Account Icon

let account_icon = document.querySelector('.account-icon');
let drop = document.querySelector(".acc-drop");


account_icon.addEventListener("mouseover", showDropdown);
drop.addEventListener("mouseover", showDropdown);
account_icon.addEventListener("mouseout", hideDropdown);
drop.addEventListener("mouseout", hideDropdown);

function showDropdown() {
    drop.classList.remove('hidden');
}

function hideDropdown() {
    drop.classList.add('hidden');
}

// sidebar

let menu = document.querySelector(".hamburger");
let sidebar = document.querySelector(".side-bar");
let undoSidebar = document.querySelector(".undo-sidebar")
let overlay = document.querySelector(".overlay");


menu.addEventListener("click", () => slide("open"));
undoSidebar.addEventListener("click", () => slide("close"));

function slide(action) {
    if (action === "open"){
        sidebar.style.left = 0;
    }else if(action === "close"){
        sidebar.style.left = "-400px";
    }
    overlay.classList.toggle("hidden")
}
