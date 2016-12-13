/**
 * Created by Administrator on 2016/12/2.
 */
$(function(){
    $('.song_content').on('click','.song',function(){
        var cc = $('.song_position').remove();
        cc.appendTo($('.song_content'));
        var arr = ['song_1','song_2','song_3','song_4','song_5'];
        var _this = $(this).index();
        $(this).remove();
        $('body').append($(this).remove());
        for(var i = 0;i < 6;i++){
            $('.song').removeClass('song_position_1');
            $('.song').removeClass('song_position');
            $('.song').removeClass('song_'+(i+1));
            $('.song').eq(i).addClass(arr[i]);
        }
        $(this)[0].className = '';
        $(this).addClass('song_position');
        $(this).addClass('song');
        $(this).addClass('song_1');
        setTimeout(function(){
            $('.song_position').addClass('song_position_1');
        },1);

        $('.song_content').css({'transform':'rotate('+(4)*2+'deg) translateX('+(4)*200+'px)'});
        setTimeout(function(){
            $('.song_inner').removeClass('song_inner_1');
            $('.song_position').find('.song_inner').addClass('song_inner_1');
        },1000);
    });
    $('body').on("click",".song_inner_btn",function(ev){
        ev.stopPropagation();
        $('.song_inner').removeClass('song_inner_1');
        setTimeout(function(){
            var cc = $('.song_position').remove();
            cc.appendTo($('.song_content'));
            var arr = ['song_1','song_2','song_3','song_4','song_5','song_6'];
            for(var i = 0;i < 7;i++){
                $('.song').removeClass('song_position_1');
                $('.song').removeClass('song_position');
                $('.song').removeClass('song_'+(i+1));
                $('.song').eq(i).addClass(arr[i]);
            }
            $('.song_content').css({'transform':'rotate(0deg) translateX(0px)'});
        },1000);

    });
});