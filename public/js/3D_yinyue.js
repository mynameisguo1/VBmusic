/**
 * Created by Administrator on 2016/12/9.
 */
$(function() {
    var oDiv = $('.rong_qi');
    for (var j = 0; j < 6; j++) {
        for (var i = 0; i < 17; i++) {
            var aDiv = $('<div class="div1"></div>');
            var Ma_ran = Math.random() * 2000 - 500;
            var Ma_ran1 = Math.random() * 2000 - 500;
            var Ma_scale = Math.random();
            aDiv.css({'left': Ma_ran + 'px', 'top': Ma_ran1 + 'px', 'transform': 'scale(' + Ma_scale + ') rotateX(0deg)'});
            aDiv.appendTo(oDiv);
        }
    }
    setTimeout(function () {
        var oDiv1 = $('.div1');
        var a = 0;
        var b = 0;
        for (var i = 0; i < oDiv1.length; i++) {
            oDiv1.eq(i).css({'left': (a % 17) * 70 + 'px', 'top': b * 90 + 'px', 'transform': 'scale(1) rotateX(0deg)'});
            a++;
            b = parseInt(a / 17);
        }
    }, 2000);
    //ת��Ч��
    var move = false;//�ƶ����
    var _x, _y;//_x,_y�����ؼ����Ͻǵ����λ��
    $("body").mousedown(function (e) {
        move = true;
        $('body').css("cursor","default");
        _x = e.pageX - parseInt($('body').offset().left);
        _y = e.pageY - parseInt($('body').offset().top);
    });
    $(document).mousemove(function (e) {
        if (move) {
            var x = e.pageX - _x;//�ؼ����Ͻǵ���Ļ���Ͻǵ����λ��
            var y = e.pageY - _y;
            $(".rong_qi").css({'transform': 'rotateY('+ x +'deg) rotateX('+ y +'deg)'});
            $(".big_rong_qi").css({'transform': 'rotateY('+ x +'deg) rotateX('+ y +'deg)'});
        }
    }).mouseup(function () {
        move = false;
    });
    //���Բ��
    $('.btn_y').click(function(){
        var biao_a = [{'0':'A','1':'阿兰','2':'千古'},{'0':'B','1':'魏新雨','2':'恋人心'},{'0':'C','1':'高安、姜楠','2':'梁祝情'},{'0':'D','1':'李晓杰、陈星、程巍、牛朝阳','2':'美人酒'},{'0':'E','1':'颗粒','2':'柔软的光'},{'0':'F','1':'赵真、百灵','2':'好运连连'},{'0':'G','1':'赵真','2':'福门开 好运来'},{'0':'H','1':'黑龙、胡铁','2':'友情岁月'},{'0':'I','1':'徐浩、朱元冰','2':'跟着太阳走'},{'0':'J','1':'星弟','2':'制造浪漫'},{'0':'K','1':'贯诗钦','2':'你明知道'},{'0':'L','1':'贺美琦','2':'成长的约定'},{'0':'M','1':'余枫','2':'爱无以复加'},{'0':'N','1':'江涛','2':'舍不得'},{'0':'O','1':'刘程浩','2':'我只要你一个选择'},{'0':'P','1':'Alan Walker(艾伦·沃克)','2':'Alone'},{'0':'Q','1':'周杰伦','2':'蜗牛'},{'0':'R','1':'常石磊','2':'我我'},{'0':'S','1':'BIGBANG(빅뱅)','2':'BIGBANG 最新数字专辑QQ音乐震撼独家发行'},{'0':'T','1':'ACEMAX-RED','2':'MAXY（火力全开）'}];
        setTimeout(function(){
            var l = $('.div1').length;
            for(var i = 72;i < 81;i++){
                $('.div1').eq(i).css({'transform':'rotateX(40deg)'});
                $('.div1').eq(i).html('<p class="p_biaoqian">'+biao_a[(i-72)][0]+'</p><p class="p_biaoqian" title='+biao_a[(i-72)][1]+'>'+biao_a[(i-72)][1]+'</p><p class="p_biaoqian" title='+biao_a[(i-72)][2]+'>'+biao_a[(i-72)][2]+'</p>');
            }
            for(var j = 88;j < 99;j++){
                $('.div1').eq(j).css({'transform':'rotateX(40deg)'});
                $('.div1').eq(j).html('<p class="p_biaoqian">'+biao_a[(j-79)][0]+'</p><p class="p_biaoqian" title='+biao_a[(j-79)][1]+'>'+biao_a[(j-79)][1]+'</p><p class="p_biaoqian" title='+biao_a[(j-79)][2]+'>'+biao_a[(j-79)][2]+'</p>');
            }
        },3000);
        setTimeout(function(){
            $('.shi_pin').eq(0).css({'left':'0px','top':'0'});
            for(var i = 4;i < 13;i++){
                $('.div1').eq(i).css({'background':'none'});
            }
            for(var j = 21;j < 30;j++){
                $('.div1').eq(j).css({'background':'none'});
            }
            for(var q = 38;q < 47;q++){
                $('.div1').eq(q).css({'background':'none'});
            }
            for(var w = 55;w < 64;w++){
                $('.div1').eq(w).css({'background':'none'});
            }
        },2000);
        setTimeout(function(){
            $('.div1').eq(4).html('<video class="shi_pin" width="620px" height="350px" src="public/images/nvzongtongA.mkv"></video>');
        },5500);
        $('.div1').on('click','.shi_pin',function(){
            var music = document.getElementsByClassName('shi_pin')[0];
            if(music.paused){
                music.play();
            }else{
                music.pause();
            }
        });
        //������
        //for(var j = 0;j < 4;j++){
        //    for(var i = 0;i < 4;i++){
        //        $('.div1').eq(i+j*4).css({'left':i*70+'px','top':j*70+'px'});
        //        $('.div1').eq(i+j*4).appendTo($('.rong_qi1'));
        //    }
        //}
        //for(var j = 0;j < 4;j++){
        //    for(var i = 0;i < 4;i++){
        //        $('.div1').eq(i+j*4).css({'left':i*70+'px','top':j*70+'px'});
        //        $('.div1').eq(i+j*4).appendTo($('.rong_qi2'));
        //    }
        //}
        //for(var j = 0;j < 4;j++){
        //    for(var i = 0;i < 4;i++){
        //        $('.div1').eq(i+j*4).css({'left':i*70+'px','top':j*70+'px'});
        //        $('.div1').eq(i+j*4).appendTo($('.rong_qi3'));
        //    }
        //}
        //for(var j = 0;j < 4;j++){
        //    for(var i = 0;i < 4;i++){
        //        $('.div1').eq(i+j*4).css({'left':i*70+'px','top':j*70+'px'});
        //        $('.div1').eq(i+j*4).appendTo($('.rong_qi4'));
        //    }
        //}
        //for(var j = 0;j < 4;j++){
        //    for(var i = 0;i < 4;i++){
        //        $('.div1').eq(i+j*4).css({'left':i*70+'px','top':j*70+'px'});
        //        $('.div1').eq(i+j*4).appendTo($('.rong_qi5'));
        //    }
        //}
        //for(var j = 0;j < 4;j++){
        //    for(var i = 0;i < 4;i++){
        //        $('.div1').eq(i+j*4).css({'left':i*70+'px','top':j*70+'px'});
        //        $('.div1').eq(i+j*4).appendTo($('.rong_qi6'));
        //    }
        //}

    });
    function keyDown(e) {
        var keycode = e.which;
        var realkey = String.fromCharCode(e.which);
        if(keycode == 65){
            $('.div1').eq(4).html('<video class="shi_pin" width="620px" height="350px" src="public/images/nvzongtongA.mkv"></video>');
        }
        if(keycode == 66){
            $('.div1').eq(4).html('<video class="shi_pin" width="620px" height="350px" src="public/images/nvzongtongB.mkv"></video>');
        }
    }
    document.onkeydown = keyDown;
});