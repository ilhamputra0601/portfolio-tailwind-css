$(document).ready(function () {

// Navbar Fixed
const header = $('header');
$(window).scroll(function() {    
    let scroll = $(window).scrollTop();
    if (scroll >= 1) {
        $(header).addClass("navbar-fixed");
    } else {
        $(header).removeClass("navbar-fixed");
    }
});

// Hamburger
const hamburger = $('#hamburger');
const navMenu = $('#nav-menu') 
  $(hamburger).click(function (e) {
    $(hamburger).toggleClass("hamburger-active");
    $(navMenu).toggleClass("hidden");
    e.preventDefault();
  });

// darkmode
const gelap = $("#darkmode")
$(gelap).click(function (e) { 
    $('html').toggleClass("dark");
    e.preventDefault();
    
});
});
