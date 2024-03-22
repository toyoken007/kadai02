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
    if ($('.fv_wrap').height() - 10 < $(this).scrollTop()) {
      $('.header_box').addClass('change-color');
    } else {
      $('.header_box').removeClass('change-color');
    }
  });
});

$(function () {
  const ham = $('#js-hamburger');
  const nav = $('#js_nav');
  const li = $(".nav_ul li");


  ham.on('click', function () { //ハンバーガーメニューをクリックしたら
    ham.toggleClass('active'); // ハンバーガーメニューにactiveクラスを付け外し
    nav.toggleClass('active'); // ナビゲーションメニューにactiveクラスを付け外
    if (ham.hasClass('active') && nav.hasClass('active')) {
      $('body').addClass('scroll_non')
    } else {
      $('body').removeClass('scroll_non')
    }
  });
  li.on('click', function () { //ハンバーガーメニューをクリックしたら
    ham.toggleClass('active'); // ハンバーガーメニューにactiveクラスを付け外し
    nav.toggleClass('active'); // ナビゲーションメニューにactiveクラスを付け外
    $('body').toggleClass('scroll_non')
  });
});


//----------------------------------------------------------------------
//  javascript 関数
//----------------------------------------------------------------------
// var button = document.getElementById('id');
// console.log(button.innerHTML);
