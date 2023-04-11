const var2 = document.getElementById("mobile-menu-page-id");
var2.style.display = "none";

const var1 = document.getElementById("mobile-landing-id");
const header = document.getElementById('header');

function open_mobile_menu() {
    var1.style.backgroundColor = "#6070ff";
    var1.classList.add('blur');
    header.style.backgroundColor = "#6070ff";
    header.classList.add('blur');
    var2.style.display = "block";
}

function mobile_menu_close_func() {
    var2.style.display = "none";
    header.style.backgroundColor = "white";
    var1.style.backgroundColor = "white";
    var1.classList.remove('blur');
    header.classList.remove('blur');
}