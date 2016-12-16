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
    //���Բ��
    var biao_a = [{'1':'阿兰','2':'千古','3':'A'},{'1':'魏新雨','2':'恋人心','3':'B'},{'1':'Trouble Maker','2':'Trouble Maker','3':'C'},{'1':'李晓杰、陈星、程巍、牛朝阳','2':'美人酒','3':'D'},{'1':'颗粒','2':'柔软的光','3':'E'},{'1':'赵真、百灵','2':'好运连连','3':'F'},{'1':'赵真','2':'福门开 好运来','3':'G'},{'1':'黑龙、胡铁','2':'友情岁月','3':'H'},{'1':'徐浩、朱元冰','2':'跟着太阳走','3':'I'},{'1':'星弟','2':'制造浪漫','3':'J'},{'1':'贯诗钦','2':'你明知道','3':'K'},{'1':'贺美琦','2':'成长的约定','3':'L'},{'1':'余枫','2':'爱无以复加','3':'M'},{'1':'江涛','2':'舍不得','3':'N'},{'1':'刘程浩','2':'我只要你一个选择','3':'O'},{'1':'Alan Walker(艾伦·沃克)','2':'Alone','3':'P'},{'1':'周杰伦','2':'蜗牛','3':'Q'},{'1':'常石磊','2':'我我','3':'R'},{'1':'BIGBANG(빅뱅)','2':'BIGBANG 最新数字专辑QQ音乐震撼独家发行','3':'S'},{'1':'ACEMAX-RED','2':'MAXY（火力全开）','3':'T'},{'1':'','2':''},{'1':'','2':''},{'1':'','2':''},{'1':'','2':''},{'1':'','2':''},{'1':'','2':''},{'1':'','2':''},{'1':'','2':''},{'1':'','2':''},{'1':'','2':''},{'1':'','2':''},{'1':'','2':''},{'1':'','2':''},{'1':'','2':''},{'1':'','2':''},{'1':'','2':''},{'1':'','2':''},{'1':'','2':''},{'1':'','2':''},{'1':'','2':''}];
    var biao_b = [{'0':'A'},{'0':'B'},{'0':'C'},{'0':'D'},{'0':'E'},{'0':'F'},{'0':'G'},{'0':'H'},{'0':'I'},{'0':'J'},{'0':'K'},{'0':'L'},{'0':'M'},{'0':'N'},{'0':'O'},{'0':'P'},{'0':'Q'},{'0':'R'},{'0':'S'},{'0':'T'}];
    $('.btn_y').click(function(){
        setTimeout(function(){
            var l = $('.div1').length;
            for(var i = 72;i < 81;i++){
                $('.div1').eq(i).css({'transform':'rotateX(40deg)'});
                $('.div1').eq(i).html('<p class="p_biaoqian">'+biao_b[(i-72)][0]+'</p><p class="p_biaoqian" title='+biao_a[(i-72)][1]+'>'+biao_a[(i-72)][1]+'</p><p class="p_biaoqian" title='+biao_a[(i-72)][2]+'>'+biao_a[(i-72)][2]+'</p>');
            }
            for(var j = 88;j < 99;j++){
                $('.div1').eq(j).css({'transform':'rotateX(40deg)'});
                $('.div1').eq(j).html('<p class="p_biaoqian">'+biao_b[(j-79)][0]+'</p><p class="p_biaoqian" title='+biao_a[(j-79)][1]+'>'+biao_a[(j-79)][1]+'</p><p class="p_biaoqian" title='+biao_a[(j-79)][2]+'>'+biao_a[(j-79)][2]+'</p>');
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
            Tu_pian();
            $('.shi_pin_img').attr('src','public/images/shipin_imgA.jpg');
            //下面代码是添加一个删除标志
            $('.div1').eq(31).html('<i class="my_box_a_i my_box_a_fore4"></i>');
            //下面代码是添加一个添加标志
            $('.div1').eq(32).html('<i class="my_box_a_i my_box_a_fore2"></i>');
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
        function keyDown(e) {
            var keycode = e.which;
            var realkey = String.fromCharCode(e.which);
            if(keycode == 65){
                $('.div1').eq(4).html('<video class="shi_pin" width="620px" height="350px"></video>');
                $('.shi_pin').attr('src','public/images/nvzongtong'+biao_a[0][3]+'.mkv');
                Tu_pian();
                $('.shi_pin_img').attr('src','public/images/shipin_img'+biao_a[0][3]+'.jpg');
            }
            if(keycode == 66){
                $('.div1').eq(4).html('<video class="shi_pin" width="620px" height="350px"></video>');
                $('.shi_pin').attr('src','public/images/nvzongtong'+biao_a[1][3]+'.mkv');
                Tu_pian();
                $('.shi_pin_img').attr('src','public/images/shipin_img'+biao_a[1][3]+'.jpg');
            }
            if(keycode == 67){
                $('.div1').eq(4).html('<video class="shi_pin" width="620px" height="350px"></video>');
                $('.shi_pin').attr('src','public/images/nvzongtong'+biao_a[2][3]+'.mkv');
                Tu_pian();
                $('.shi_pin_img').attr('src','public/images/shipin_img'+biao_a[2][3]+'.jpg');
            }
            if(keycode == 32){
                var music = document.getElementsByClassName('shi_pin')[0];
                if(music.paused){
                    music.play();
                }else{
                    music.pause();
                }
            }
            //alert('keycode:'+keycode+'符号:'+realkey);
        }
        $('body').keydown(keyDown);
        function Tu_pian(){
            for(var i = 0;i<4;i++){
                $('.div1').eq(i).css('overflow','hidden');
                $('.div1').eq(i).html('<img class="shi_pin_img" />');
                $('.shi_pin_img').eq(i).css('left',-i*70+'px');
            }
            for(var j = 17;j<21;j++){
                $('.div1').eq(j).css('overflow','hidden');
                $('.div1').eq(j).html('<img class="shi_pin_img" />');
                $('.shi_pin_img').eq(j-13).css({'left':-(j-17)*70+'px','top':'-90px'});
            }
            for(var p = 34;p<38;p++){
                $('.div1').eq(p).css('overflow','hidden');
                $('.div1').eq(p).html('<img class="shi_pin_img" />');
                $('.shi_pin_img').eq(p-26).css({'left':-(p-34)*70+'px','top':'-180px'});
            }
            for(var u = 51;u<55;u++){
                $('.div1').eq(u).css('overflow','hidden');
                $('.div1').eq(u).html('<img class="shi_pin_img" />');
                $('.shi_pin_img').eq(u-39).css({'left':-(u-51)*70+'px','top':'-270px'});
            }
        }

    });
    //想写一个滚轮事件，然后查了资料，看的恶心，火狐竟然不一样，怕自己忘了，这次就把兼容一起写上了
    function addEvent(obj,xEvent,fn) {
        if(obj.attachEvent){
            obj.attachEvent('on'+xEvent,fn);
        }else{
            obj.addEventListener(xEvent,fn,false);
        }
    }
    //接着利用我们自己封装的函数给div绑定事件，
    var oBody = $('body')[0];
    addEvent(oBody,'mousewheel',onMouseWheel);
    addEvent(oBody,'DOMMouseScroll',onMouseWheel);
    // 当滚轮事件发生时，执行onMouseWheel这个函数
    var aa = 0;
    var move = false;//�ƶ����
    var _x, _y, x = 0,y = 0;//_x,_y�����ؼ����Ͻǵ����λ��
    function onMouseWheel(e) {
        if(e.wheelDelta > 0){
            aa++;
        }else{
            aa--;
        }
        if(aa < -9){
            aa = -9
        }
        $('.rong_qi').css('transform','rotateY('+ x +'deg) rotateX('+ y +'deg) scale('+ (0.1*aa+1)+')');
    }
    //ת��Ч��

    $("body").mousedown(function (e) {
        move = true;
        $('body').css("cursor","default");
        _x = e.pageX - parseInt($('body').offset().left);
        _y = e.pageY - parseInt($('body').offset().top);
    });
    $(document).mousemove(function (e) {
        if (move) {
            x = e.pageX - _x;//�ؼ����Ͻǵ���Ļ���Ͻǵ����λ��
            y = e.pageY - _y;
            $(".rong_qi").css({'transform': 'rotateY('+ x +'deg) rotateX('+ y +'deg) scale('+ (0.1*aa+1)+')'});
            //$(".big_rong_qi").css({'transform': 'rotateY('+ x +'deg) rotateX('+ y +'deg) scale('+ (0.1*aa+1)+')'});
        }
    }).mouseup(function () {
        move = false;
    });
    //下面是下面的歌删除的代码，但是因为不能屏蔽body的键盘事件，所以现在放弃，以后在研究
    $('.div1')[31].onclick = function(){
        $('.shanchu_box').css('display','block');
    };
    $('.shanchu_btn').click(function(){
        var aInput = $('.shanchu_txt').val();
        //alert(aInput);
        var tt = aInput-1;
        //for(var qq = 0;qq<biao_b.length;qq++){
        //    if(aInput == biao_b[qq][0]){
        //        tt = qq;
        //    }
        //}
        biao_a.splice(tt,1);
        for(var aa = 0;aa<biao_a.length;aa++){
            biao_a[aa] = biao_a[aa];
        }
        var l = $('.div1').length;
        for(var i = 72;i < 81;i++){
            $('.div1').eq(i).css({'transform':'rotateX(40deg)'});
            $('.div1').eq(i).html('<p class="p_biaoqian">'+biao_b[(i-72)][0]+'</p><p class="p_biaoqian" title='+biao_a[(i-72)][1]+'>'+biao_a[(i-72)][1]+'</p><p class="p_biaoqian" title='+biao_a[(i-72)][2]+'>'+biao_a[(i-72)][2]+'</p>');
        }
        for(var j = 88;j < 99;j++){
            $('.div1').eq(j).css({'transform':'rotateX(40deg)'});
            $('.div1').eq(j).html('<p class="p_biaoqian">'+biao_b[(j-79)][0]+'</p><p class="p_biaoqian" title='+biao_a[(j-79)][1]+'>'+biao_a[(j-79)][1]+'</p><p class="p_biaoqian" title='+biao_a[(j-79)][2]+'>'+biao_a[(j-79)][2]+'</p>');
        }
    });
    $('.shanchu_btn_g').click(function(){
        $('.shanchu_box').css('display','none');
    });
    //下面代码是添加歌曲的
    $('.div1')[32].onclick = function(){
        $('.shanchu_box1').css('display','block');
    };
    $('.shanchu_btn1').click(function(){
        var aInput1 = $('.shanchu_txt1').val()-1;
        var aInput2 = $('.shanchu_txt2').val();
        var aInput3 = $('.shanchu_txt3').val();
        biao_a.splice(aInput1,0,{'1':aInput2,'2':aInput3});
        for(var aa = 0;aa<biao_a.length;aa++){
            biao_a[aa] = biao_a[aa];
        }
        for(var i = 72;i < 81;i++){
            $('.div1').eq(i).css({'transform':'rotateX(40deg)'});
            $('.div1').eq(i).html('<p class="p_biaoqian">'+biao_b[(i-72)][0]+'</p><p class="p_biaoqian" title='+biao_a[(i-72)][1]+'>'+biao_a[(i-72)][1]+'</p><p class="p_biaoqian" title='+biao_a[(i-72)][2]+'>'+biao_a[(i-72)][2]+'</p>');
        }
        for(var j = 88;j < 99;j++){
            $('.div1').eq(j).css({'transform':'rotateX(40deg)'});
            $('.div1').eq(j).html('<p class="p_biaoqian">'+biao_b[(j-79)][0]+'</p><p class="p_biaoqian" title='+biao_a[(j-79)][1]+'>'+biao_a[(j-79)][1]+'</p><p class="p_biaoqian" title='+biao_a[(j-79)][2]+'>'+biao_a[(j-79)][2]+'</p>');
        }
    });
    $('.shanchu_btn_g1').click(function(){
        $('.shanchu_box1').css('display','none');
    });
});