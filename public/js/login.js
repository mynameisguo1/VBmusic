/**
 * Created by Administrator on 2016/11/29.
 */
$(function(){
    $('.Remember_me').click(function(){
        $('.Remember_div').fadeToggle();
    });
    $('.Remember_div').click(function(){
        $(this).fadeOut();
    });
    //点击GO产生动画
    $('.submit').click(function(){
        $('.login_form').addClass('test');
        setTimeout(function () {
            $('.login_form').addClass('testtwo');
        }, 300);
        if($(window).width() <=768){
            setTimeout(function () {
                $('.yanzheng').show().animate({ top: 180, right: 0 }, {
                    duration: 600,
                    queue: false
                });
                $('.yanzheng').animate({ opacity: 1 }, {
                    duration: 200,
                    queue: false
                }).addClass('visible');
            }, 500);
        }else{
            setTimeout(function () {
                $('.yanzheng').show().animate({ right: -420 }, {
                    duration: 600,
                    queue: false
                });
                $('.yanzheng').animate({ opacity: 1 }, {
                    duration: 200,
                    queue: false
                }).addClass('visible');
            }, 500);
        }
        setTimeout(function () {
            $('.yanzheng').show().animate({ right: 90,top:500 }, {
                duration: 600,
                queue: false
            });
            $('.yanzheng').animate({ opacity: 0 }, {
                duration: 200,
                queue: false
            }).addClass('visible');
            $('.login').removeClass('testtwo');
        }, 2500);
        setTimeout(function () {
            $('.login_form').removeClass('test');
            $('.login_form').removeClass('testtwo');
        }, 2800);
    });
    //手机端点击出现菜单
    $('.nav-inner2').click(function(){
        $('.nav-inner2-ul').slideToggle();
    });
});