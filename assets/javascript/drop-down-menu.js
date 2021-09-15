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