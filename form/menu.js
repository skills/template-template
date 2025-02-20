$('.openbtn').on('click',function(){
    $('.nav, .openbtn').toggleClass("open");
  });

//    // 📌 最初はメニューを非表示
//    openbtn.style.opacity = "0";
//    openbtn.style.pointerEvents = "none";

//    // 📌 スクロールしたらボタンを表示（200px以上）
//    window.addEventListener("scroll", function () {
//        if (window.scrollY > 200) {
//         openbtn.style.opacity = "1";
//         openbtn.style.pointerEvents = "auto";
//        } else {
//         openbtn.style.opacity = "0";
//         openbtn.style.pointerEvents = "none";
//        }
//    });