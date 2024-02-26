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

$(function () {
  $(window).on('scroll', function () {
    if ($('.fv_wrap').height() < $(this).scrollTop()) {
      $('.header_box').addClass('change-color');
      console.log("aaaaaa");
    } else {
      $('.header_box').removeClass('change-color');
      console.log("bbbbbbb");
    }
  });
});

//----------------------------------------------------------------------
//  javascript 関数
//----------------------------------------------------------------------
// var button = document.getElementById('id');
// console.log(button.innerHTML);
