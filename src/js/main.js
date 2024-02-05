'use strict';

//----------------------------------------------------------------------
//  import
//----------------------------------------------------------------------
// import { tab } from "./sub.js";

// tab('.panel-a', '.panel-b', '.panel-c');

//----------------------------------------------------------------------
//  jQuery 関数
//----------------------------------------------------------------------

$(function () {
    $("#img_slider").slick({
      arrows: false,/*矢印有無*/
      dots: false,/*ドット有無*/
      autoplay: true,
      autoplayspeed: 3000,
      pauseOnFocus: false,
      pauseOnHover: false,
      pauseOnDotsHover: false,
      fade: true,
      speed: 3000
  
    });
});

//----------------------------------------------------------------------
//  javascript 関数
//----------------------------------------------------------------------
// var button = document.getElementById('id');
// console.log(button.innerHTML);
