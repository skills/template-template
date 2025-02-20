$('.openbtn').on('click',function(){
    $('.nav, .openbtn').toggleClass("open");
  });

   // 📌 最初はメニューを非表示
   menuBtn.style.opacity = "0";
   menuBtn.style.pointerEvents = "none";

   // 📌 スクロールしたらボタンを表示（200px以上）
   window.addEventListener("scroll", function () {
       if (window.scrollY > 200) {
           menuBtn.style.opacity = "1";
           menuBtn.style.pointerEvents = "auto";
       } else {
           menuBtn.style.opacity = "0";
           menuBtn.style.pointerEvents = "none";
       }
   });