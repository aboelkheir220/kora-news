$(function () {
    'use strict';
    //nav-bar
$('.navbar .container .collapse ul li .nav-link').hover(function(){
   $(this).css({"font-size":"30px" , "color":"red"});
});
$('.navbar .container .collapse ul li .nav-link').mouseleave(function(){
   $(this).css({"font-size":"20px" , "color":"white"});
});
    //news
$('.news .card').hover(function(){
    $(this).css("opacity",1);
})
$('.news .card').mouseleave(function(){
    $(this).css("opacity",".6");
})
    //league
$('.league h3').hover(function(){
    $(this).css({"color":"#dce0a4" , "font-size":"50px"})
});
 $('.league h3').mouseleave(function(){
    $(this).css({"color":"white" , "font-size":"40px"})
});
$('.league h4').hover(function(){
    $(this).css({"color":"#31cc44" , "font-size":"40px"})
});
$('.league h4').mouseleave(function(){
    $(this).css({"color":"white" , "font-size":"30px"})
});
$('.league p').hover(function(){
    $(this).css({"color":"#52edf5" , "font-size":"22px"})
});
$('.league p').mouseleave(function(){
    $(this).css({"color":"white" , "font-size":"18px"})
});
});