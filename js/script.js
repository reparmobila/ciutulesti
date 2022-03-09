let menuBtn = document.getElementById("menuBtn");
let sidenav = document.getElementById("sidenav");
let menu = document.getElementById("menu");

sidenav.style.right = "-250px"

menuBtn.onclick = function() {
    if (sidenav.style.right == "-250px") {
        sidenav.style.right = "0";
        menu.src = "images/close.png";

    } else {
        sidenav.style.right = "-250px";
        menu.src = "images/menu.png";
    }
}