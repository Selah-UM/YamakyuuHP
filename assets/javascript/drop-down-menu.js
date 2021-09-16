$(function() {
  $(".headerInner").css('align-items','flex-end');
  $(".headNav > li").mouseover(function(){
    // $.ajax({
    //   success: function(){
        new Promise((resolve) => {
          const item = this;
          $(".headerInner").css('align-items','');
          resolve(item);
        }).then((item) => {
          $(item).find(".subMenu").show();
        });
      // });
  });
  $(".headNav > li").mouseout(function(){
    // $.ajax({
    //   success: function(){
      new Promise((resolve) => {
        const item = this;
        $(".headerInner").css('align-items','flex-end');
        resolve(item);
      }).then((item) => {
        $(item).find(".subMenu").hide();
      });
    //   }
    // });
  });
});

/** 
 * css 変更を反映させるためにはコマンドシフトR
 * 
 * my-website　で　docker　起動しコンソールに入る
 * my-fist に移って python3 -m http.server 8000
 * http://localhost:8000/
 * ブラウザで開ける！
*/