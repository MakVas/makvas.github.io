var modal = document.getElementById("myModal");
var timer = document.getElementById("MyClockDisplay");
var span = document.getElementsByClassName("close")[0];

timer.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}