/**
 * Created by Administrator on 2015/10/28.
 */
$(function(){
   $(".nav_one li").click(function () {
       $(this).addClass("on");
       $(this).siblings().removeClass("on");

   })
});