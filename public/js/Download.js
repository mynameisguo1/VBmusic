/**
 * Created by Administrator on 2016/12/4.
 */
$(function(){
   $('.figure_item').click(function(){
       $(this).addClass('figure_opacity').siblings().removeClass('figure_opacity');
       $('.figure_li').eq(($(this).index()-1)).fadeIn().siblings().fadeOut();
   });
    $(window).resize(function(){
        var winW = $(window).width();
        var S_height = (winW*0.48);
        $('.Shuffling_figure').css('height',S_height+'px');
        $('.figure_btn').css('height',winW*0.14+'px');
    });
});