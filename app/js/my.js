function openNav() {
    let sidebar = document.getElementById("mySidebar");
    sidebar.style.width = "320px";
    sidebar.style.padding = "40px 50px";
    document.getElementById("openbtn").style.display = "none";
}

/* Установите ширину боковой панели на 0, а левое поле содержимого страницы - на 0 */
function closeNav() {
    let sidebar = document.getElementById("mySidebar");
    sidebar.style.width = "0";
    sidebar.style.padding = "0";
    document.getElementById("openbtn").style.display = "flex";
}