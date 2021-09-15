$(function() {
  $(".headNav > li").mouseover(function(){
    $.ajax({
      success: function(){
        // $(".headerInner").css('align-items','');
        $(".headNav > li").find(".subMenu").show();
      }
    });
  });
  $(".headNav > li").mouseout(function(){
    $.ajax({
      success: function(){
        // $(".headerInner").css('align-items','center');
        $(".headNav > li").find(".subMenu").hide();
      }
    });
  });
});

/** 
 * my-website　で　docker　起動しコンソールに入る
 * my-fist に移って python3 -m http.server 8000
 * http://localhost:8000/
 * ブラウザで開ける！
*/