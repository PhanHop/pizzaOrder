function loadHeader(idHeader){
    let xhttp = new XMLHttpRequest();
    xhttp.onload = function(){
        document.getElementById(idHeader).innerHTML = this.responseText;
    }
    xhttp.open("GET", "./html/header.html");
    xhttp.send();
}
function loadFooter(idFooter){
    let xhttp = new XMLHttpRequest();
    xhttp.onload = function(){
        document.getElementById(idFooter).innerHTML = this.responseText;
    }
    xhttp.open("GET", "./html/footer.html");
    xhttp.send();
}
loadHeader("header");
loadFooter("contact");