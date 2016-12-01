$( document ).ready(function() {
$(document).foundation();
$(".owl-carousel").owlCarousel({
  navigation: false,
  pagination: false,
  items: 2,
  itemsDesktop: false,
  itemsDesktopSmall: false, 
  itemsTablet: false,

});
var owl = $(".owl-carousel").data('owlCarousel');

$(".next").on("click", function() {owl.next();});
$(".previous").on("click", function() {owl.prev();});



/* Menu */

$(".mobile-toggle").on("click", function () {
  if(!$(".mobile-toggle").hasClass("secondary-close")) {
  $(this).toggleClass("icon-cross icon-menu-five");
  $("#nav-container").toggleClass("menu-on");
        $("#navbar").toggleClass("navbar-open");  
  } else {
    $("#primary-nav > li > ul.menu-on").toggleClass("menu-on");
    $(".secondary-close").removeClass("secondary-close");
    $("#primary-nav > li > ul > li > ul").removeClass("menu-on"); 

  }
});

$("#primary-nav > li > a").on("click", function() {

  if($(".mobile-toggle").hasClass("icon-menu-five")) {
  $(this).siblings("ul").toggleClass("menu-on");
  $("#menu-overlay").toggleClass("overlay-on");   
  $(".mobile-toggle").toggleClass("secondary-close");
  $(".mobile-toggle").toggleClass("icon-cross icon-menu-five");
  $("#nav-container").toggleClass("menu-on");
  $("#menu-overlay").toggleClass("mobile-overlay-on"); 
  $("#navbar").toggleClass("navbar-open"); 
  }  else {
      if($(this).siblings("ul").hasClass("menu-on")) {
     $(".mobile-toggle").toggleClass("secondary-close");   
     $(this).siblings("ul").toggleClass("menu-on");
     $("#menu-overlay").toggleClass("overlay-on"); 
     } else {
       $("#primary-nav > li > ul").removeClass("menu-on");
      $(this).siblings("ul").toggleClass("menu-on");
        $(".mobile-toggle").addClass("secondary-close");  
     } 

           
  }
});

$("#primary-nav > li > ul > li > a").on("click", function() {
  $(this).siblings("ul").toggleClass("menu-on");
});

$("#primary-nav > li > ul > li > ul").parent().prepend("<i class='float-right icon-arrow-right'></i>");

$(".dropdown-menu").on("click", function() {
  $(this).children("ul").toggleClass("hide");
  $(this).children("i").toggleClass("icon-arrow-right").toggleClass("icon-arrow-down"); 
});

$(".concertina").on("click", function() {
  $(this).children(".concertina-content").slideToggle();
  $(this).find(".concertina-titlebar > i").toggleClass("icon-arrow-up icon-arrow-down"); 
});




$("#tertiary-menu-mobile >.tertiary-menu > li:nth-child(1) > a").append("<i class='float-right icon-cross'></i>");
$("#tertiary-menu-mobile >.tertiary-menu > li:nth-child(2) > a").append("<i class='float-right icon-arrow-right'></i>");
$("#tertiary-menu-mobile >.tertiary-menu > li:nth-child(2)").siblings().addClass("hide");
$("#tertiary-menu-mobile >.tertiary-menu > li:nth-child(2)").on("click", function() {
  $("#tertiary-menu-mobile >.tertiary-menu > li:nth-child(2)").siblings().toggleClass("hide");
  $("#tertiary-menu-mobile >.tertiary-menu > li:nth-child(2)>a>.icon-arrow-right").toggleClass("hide"); 
  $("#tertiary-menu-mobile >.tertiary-menu > li:nth-child(1) > a, .tertiary-menu > li:nth-child(2) > a").addClass("tertiary-border");
});

$("#tertiary-menu-mobile >.tertiary-menu > li > a >.icon-cross").on("click", function() {
  $("#tertiary-menu-mobile >.tertiary-menu > li:nth-child(2)").siblings().toggleClass("hide");
  $("#tertiary-menu-mobile >.tertiary-menu > li:nth-child(2)>a>.icon-arrow-right").toggleClass("hide");
    $(".tertiary-menu > li:nth-child(1) > a, .tertiary-menu > li:nth-child(2) > a").removeClass("tertiary-border");
});
});



