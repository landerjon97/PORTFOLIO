/*
Author: Jonathan Lander
Project: Portfolio
Date: 5/5/17
*/
//an onload in jquery
$(document).ready(function() {
//getting speed
var movementStrength = 25;
//getting length of window
var height = movementStrength / $(window).height();
var width = movementStrength / $(window).width();
//getting background image
$("#back1").mousemove(function(e){
          //getting position of mouse and slightly moving it accordinly with speed
          var pageX = e.pageX - ($(window).width() / 2);
          var pageY = e.pageY - ($(window).height() / 2);
          var newvalueX = width * pageX * -1 - 25;
          var newvalueY = height * pageY * -1 - 50;
          $('#back1').css("background-position", newvalueX+"px     "+newvalueY+"px");
});
$("#back2").mousemove(function(e){
          var pageX = e.pageX - ($(window).width() / 2);
          var pageY = e.pageY - ($(window).height() / 2);
          var newvalueX = width * pageX * -1 - 25;
          var newvalueY = height * pageY * -1 - 50;
          $('#back2').css("background-position", newvalueX+"px     "+newvalueY+"px");
});
$("#back3").mousemove(function(e){
          var pageX = e.pageX - ($(window).width() / 2);
          var pageY = e.pageY - ($(window).height() / 2);
          var newvalueX = width * pageX * -1 - 25;
          var newvalueY = height * pageY * -1 - 50;
          $('#back3').css("background-position", newvalueX+"px     "+newvalueY+"px");
});
$("#back4").mousemove(function(e){
          var pageX = e.pageX - ($(window).width() / 2);
          var pageY = e.pageY - ($(window).height() / 2);
          var newvalueX = width * pageX * -1 - 25;
          var newvalueY = height * pageY * -1 - 50;
          $('#back4').css("background-position", newvalueX+"px     "+newvalueY+"px");
});
});