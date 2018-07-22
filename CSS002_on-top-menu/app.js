// set menu on top relate by scrolling

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var navbar = document.getElementById("navbar")
    if (document.documentElement.scrollTop > navbar.style.height) {
        navbar.style.position = "fixed"
    }
    else {
        navbar.style.position = "relative"
        console.log(document.documentElement.scrollTop);
    }
}