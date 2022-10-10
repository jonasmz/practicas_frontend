function menuToggle(){
    var menuBox = document.getElementById('nav-menu');
    menuBox.classList.toggle("show");
    // if(menuBox.style.display === "block"){
    //     menuBox.style.display = "none";
    // }else{
    //     menuBox.style.display = "block";
    // }
}
var menu = document.getElementById('toggle-menu');
menu.addEventListener('click', menuToggle, false);
/*si la pantalla tiene mas de 992px remuevo la clase show del elemento menu */
window.onresize = function () {
    winWidth = window.innerWidth;
    if(winWidth >= 992){
        var menu = document.getElementById('nav-menu');
        menu.classList.remove('show');
    }
}
