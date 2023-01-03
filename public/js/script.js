$(document).ready(function () {
// Hamburger
  const hamburger = $('#hamburger');
  $(hamburger).click(function (e) {
    $(hamburger).toggleClass("hamburger-active");
    e.preventDefault();
  });
// darkmode
const gelap = $("#darkmode")
$(gelap).click(function (e) { 
    $('html').toggleClass("dark");
    e.preventDefault();
    
});
});
