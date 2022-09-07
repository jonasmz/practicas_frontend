function menuToggle(){
    var menuBox = document.getElementById('nav-menu');
    if(menuBox.style.display === "block"){
        menuBox.style.display = "none";
    }else{
        menuBox.style.display = "block";
    }
}
var menu = document.getElementById('toggle-menu');
menu.addEventListener('click', menuToggle, false);