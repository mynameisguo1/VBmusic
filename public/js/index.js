/**
 * Created by Administrator on 2016/11/25.
 */
$(function(){
    //轮播上面的倒计时
    //function GetRTime(){
    //    var EndTime= new Date('2017/08/23 00:00:00');
    //    var NowTime = new Date();
    //    var t =EndTime.getTime() - NowTime.getTime();
    //    var d=Math.floor(t/1000/60/60/24);
    //    var h=Math.floor(t/1000/60/60%24);
    //    var m=Math.floor(t/1000/60%60);
    //    var s=Math.floor(t/1000%60);
    //
    //    $('.days').find('.number').html(d);
    //    $('.hours').find('.number').html(h);
    //    $('.minutes').find('.number').html(m);
    //    $('.secs').find('.number').html(s);
    //}
    //setInterval(GetRTime,0);
    //轮播
    var timer = null;
    var aLi = $('.lunBo li');
    var num = 0;
    var mum = 0;
    $('.lunBo ul').css('width',aLi.length*aLi.width() + 'px');
    var a_a = $('.pointBox').find('a');
    $('.pointBox').css('width',a_a.length*(a_a.width()+20) + 'px');
    function lunBo(){
        num++;
        if(num >=5){
            $('.lunBo ul').css('left','0');
            num = 1;
        }
        $('.lunBo ul').stop().animate({'left':-num*aLi.width() + 'px'});
        mum++;
        a_a.eq(mum%4).addClass('pointBox-a').siblings().removeClass('pointBox-a');
    }
    timer = setInterval(lunBo,3000);
    $('.lunBo').hover(function(){
        clearInterval(timer);
        $('.tabLeft').show();
        $('.tabRight').show();
    },function(){
        timer = setInterval(lunBo,3000);
        $('.tabLeft').hide();
        $('.tabRight').hide();
    });
    $('.tabLeft').click(function(){
        if(num <=0){
            num = 4;
            $('.lunBo ul').css('left',-num*aLi.width() + 'px');
        }
        $('.lunBo ul').stop().animate({'left':-(num-1)*aLi.width() + 'px'});
        num--;
        mum--;
        a_a.eq(mum%4).addClass('pointBox-a').siblings().removeClass('pointBox-a');

    });
    $('.tabRight').click(function(){
        lunBo();
    });
    $('.pointBox a').hover(function(){
        var _this = $(this).index();
        $(this).addClass('pointBox-a').siblings().removeClass('pointBox-a');
        $('.lunBo ul').stop().animate({'left':-_this*aLi.width() + 'px'});
        num = _this;
        mum = _this;
    });
    //友情链接
    //var speed = 0;
    //var timer1 = null;
    //$('.friends-inner ul').css('width',$('.friends-inner li').width()*24+'px');
    //function Friends(){
    //    if(speed >= 600){
    //        $('.friends-inner ul').css('left','0');
    //        speed = 0;
    //    }
    //    $('.friends-inner ul').css({'left':-2*speed + 'px'});
    //    speed++;
    //}
    //timer1 = setInterval(Friends,20);
    //$('.friends').hover(function(){
    //    clearInterval(timer1);
    //},function(){
    //    timer1 = setInterval(Friends,20);
    //});
    //歌手动画
    //var Singer_li = $('.Singer-inner li');
    //Singer_li.hover(function(){
    //    Singer_li.find('img').stop().animate({'width':'110%','height':'110%'},500);
    //},function(){
    //    Singer_li.find('img').stop().animate({'width':'100%','height':'100%'},500);
    //})
    var Sing_li = $('.Singer-li');
    var n = 0;
    $('.Singer-ul1').css('width',Sing_li.length*(Sing_li.width()+25)+'px');
    $('.Singer-l').click(function(){
        n--;
        if(n<=-6){
            $('.Singer-ul1').css('left','0');
            n = -1;
        }
        $('.Singer-ul1').stop().animate({'left':n*(Sing_li.width()+25)+'px'});
    });
    $('.Singer-r').click(function(){
        n++;
        if(n>=1){
            $('.Singer-ul1').css('left',-5*(Sing_li.width()+25)+'px');
            n = -4;
        }
        $('.Singer-ul1').stop().animate({'left':n*(Sing_li.width()+25)+'px'});
    });
    //轮播图随页面宽度变化
    $(window).resize(function(){
        $('.pointBox').css('width',a_a.length*(a_a.width()+20) + 'px');
        $('html').css('font-size',100/1349*$('html')[0].clientWidth+'px');
        var winH = $('body').width();
        $('.lunBo img').css('width',winH+'px');
        $('.lunBo').css('height',$('.lunBo img').height()+'px');
    });


    //手机端点击出现菜单
    $('.nav-inner2').click(function(){
        $('.nav-inner2-ul').slideToggle();
    });
    //ajax
    var friend_ul = $('.friends-yy-ul');
    $.ajax({
        url:"login.txt",
        type:"get",
        success:function(data){
            var xml = JSON.parse(data);
            for(var i = 0;i < 5;i++){
                var a1 = xml[i].id;
                //alert(a1);
                var a2 = xml[i].time;
                //alert(a2);
                var oLi = $('<li></li>');
                oLi.html('<span class="yy-p1"><a href="javascript:;">'+a1+'</a></span><span class="yy-p2">'+a2+'</span>');
                oLi.appendTo(friend_ul);
            }
        }
    });
    //排行榜动画
    //$('.list-fore').hover(function(){
    //    $(this).stop().siblings().addClass('testr');
    //    $(this).stop().removeClass('testr');
    //    $('.list-fore-bg').css('opacity','0.3');
    //},function(){
    //    $('.list-fore').stop().removeClass('testr');
    //    $('.list-fore-bg').stop().css('opacity','0');
    //})
});
