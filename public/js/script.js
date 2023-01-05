$(document).ready(function () {

// scroll event
const header = $('header');
const top = $('#toTop');
$(window).scroll(function() {    
    let scroll = $(window).scrollTop();
    // navbar fixed
    if (scroll >= 1) {
        $(header).addClass("navbar-fixed");
    } else {
        $(header).removeClass("navbar-fixed");
    };
    // scroll ToTop
    if (scroll >=1500){
      $(top).removeClass("hidding");
    }else{
      $(top).addClass("hidding");
    };
});

// Hamburger
const hamburger = $('#hamburger');
const navMenu = $('#nav-menu') 
  $(hamburger).click(function (e) {
    $(hamburger).toggleClass("hamburger-active");
    $(navMenu).slideToggle("slow");
    e.preventDefault();
  });
// Hamburger close belum di buat


// darkmode
const dark = $('#dark')
$(dark).click(function (e) { 
  $('#terang').toggleClass('hidden');
  $('#gelap').toggleClass('hidden');
  $('html').toggleClass('dark');
  e.preventDefault();
  
});


});

