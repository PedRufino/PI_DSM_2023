document.addEventListener("DOMContentLoaded", function () {
    var prevScrollpos = window.pageYOffset; // Define a variável prevScrollpos aqui

    window.onscroll = function () {
        var menuContainer = document.getElementById("menu-X");
        var currentScrollPos = window.pageYOffset;

        // Controla o comportamento do menu de navegação
        if (prevScrollpos > currentScrollPos) {
            menuContainer.style.top = "0";
        } else {
            menuContainer.style.top = "-120px";
        }
        prevScrollpos = currentScrollPos;

    };

    var footer = document.querySelector("footer");
    function updateFooter() {
        var pageHeight = document.documentElement.scrollHeight;
        var windowHeight = window.innerHeight;

        if (pageHeight <= windowHeight) {
            footer.style.position = "fixed";
            footer.style.bottom = "0";
            footer.style.width = "100%";
        } else {
            footer.style.bottom = "0";
            footer.style.width = "100%";
        }
    }

    updateFooter();

});