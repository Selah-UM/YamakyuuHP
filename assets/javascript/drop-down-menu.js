$(function() {
  $(".headNav > li").mouseover(function(){
    // $.ajax({
      // success: function(){
        // $(".headerInner").css('align-items','');
        $(this).find(".subMenu").show();
      // }
    // });
  });
  $(".headNav > li").mouseout(function(){
    // $.ajax({
      // success: function(){
        // $(".headerInner").css('align-items','center');
        $(this).find(".subMenu").hide();
      // }
    // });
  });
});