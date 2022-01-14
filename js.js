
function disapear(){
    document.getElementById("helloscreen").style.display = "none"
    document.getElementById("grid-page").style.display = "block"
}

let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

window.onscroll = function() {scroll()};

let navbar = document.getElementById("navbar");

let sticky = navbar.offsetTop;

function scroll() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}