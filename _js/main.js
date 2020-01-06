$(document).ready(function () {
    var pageOne = document.getElementById("pageOne");
    var pageTwo = document.getElementById("pageTwo");
    var page = document.getElementById("pageNember");


    $('.clicked').click(function () {

        if (pageOne.style.display === "inline") {
            pageOne.style.display = "none";
            pageTwo.style.display = "inline";
            page.innerHTML = "2/2";
        } else {
            pageOne.style.display = "inline";
            pageTwo.style.display = "none";
            page.innerHTML = "1/2";
        }
    });

});
