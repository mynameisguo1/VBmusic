/**
 * Created by Administrator on 2016/12/1.
 */
$(function(){
    //歌曲单导入
    var oUl = $('.my_main_list_ul2');
    $.ajax({
        url:"my_music.txt",
        type:"get",
        success:function(data){
            var xml = JSON.parse(data);
            for(var i = 0;i < xml.length;i++){
                var song = xml[i].song;
                var singer = xml[i].singer;
                var time = xml[i].time;
                var oLi = $('<li class="mg_main_li01"></li>');
                var oDiv = $('<div class="my_main_list_ul1"></div>');
                var aDiv1 = $('<div class="my_ul1_li1"><input class="my_ul1_check" type="checkbox"/></div>');
                var aDiv2 = $('<div class="my_ul1_li2"></div>');
                var aSpan = $('<span class="my_ul1_txt"></span>');
                var aDiv3 = $('<div class="my_ul1_li3"></div>');
                var aDiv4 = $('<div class="my_ul1_li4"></div>');
                var aDiv5 = $('<i class="my_main_list_line"></i>');
                aDiv1.appendTo(oDiv);
                aSpan.html(song);
                aSpan.appendTo(aDiv2);
                aDiv2.appendTo(oDiv);
                aDiv3.html(singer);
                aDiv3.appendTo(oDiv);
                aDiv4.html(time);
                aDiv4.appendTo(oDiv);
                oDiv.appendTo(oLi);
                aDiv5.appendTo(oLi);
                oLi.appendTo(oUl);

            }

        }
    });
    //点击歌曲事件
    var oName = $('#song_name');
    var oSinger = $('#song_singer');
    var oAlbum = $('#song_album');
    var oPlay_info = $('.play_music_info');
    var oPlay_time = $('.play_music_time');
    var oPlay_play = $('.play_progress_play');
    var btn_xia = 0;
    var timer = null;
    oUl.on('click','.my_ul1_txt',function(){
        $('.my_btn_stop').addClass('my_btn_start');
        var _this = $('.my_ul1_txt').index(this);
        btn_xia = _this;
        clearInterval(timer);
        //alert(_this);
        var timeIndex = 0;
        $.ajax({
            url:"my_music.txt",
            type:"get",
            success:function(data){
                var xml = JSON.parse(data);
                var oUrl = xml[_this].url;
                var aName = xml[_this].song;
                var aSinger = xml[_this].singer;
                var aAlbum = xml[_this].album;
                var aTime = xml[_this].time;
                var m_Time = 100/(Number(xml[_this].m_time));
                var v_Url = xml[_this].vurl;
                //alert(m_Time);
                var pic_img = $('.my_box_info_pic').attr('src',oUrl);
                oName.html('歌曲名:<a href="javascript:;">'+ aName +'</a>');
                oSinger.html('歌手名:<a href="javascript:;">'+ aSinger +'</a>');
                oAlbum.html('专辑名:<a href="javascript:;">'+ aAlbum +'</a>');
                oPlay_info.html('<a href="javascript:;">'+ aName +'</a>-<a href="javascript:;">'+ aSinger +'</a>');
                //oPlay_play.stop().css("width",'0%');
                //oPlay_play.animate({"width":"100%"},m_Time);
                $('.source').attr("src",v_Url);
                //clearInterval(timer);
                function a_time(){
                    if(timeIndex == m_Time*100){
                        clearInterval(timer);
                    }
                    var minutes = parseInt((timeIndex % 3600) / 60);
                    var seconds = parseInt(timeIndex % 60);
                    minutes = minutes < 10 ? "0" + minutes : minutes;
                    seconds = seconds < 10 ? "0" + seconds : seconds;
                    oPlay_time.text(minutes + ":" + seconds + "/" + aTime);
                    oPlay_play.css('width',m_Time*timeIndex+'%');
                    timeIndex++;
                    zanTing = timeIndex;
                }
                timer = setInterval(a_time,1000);
            }
        });
    });
    //暂停按钮
    var video = $(".source");
    video.trigger("play");//for auto play
    video.addClass('play');//for check pause or play add a class
    $('.my_btn_stop').click(function() {
        if (video.hasClass('pause')) {
            video.trigger("play");
            video.removeClass('pause');
            video.addClass('play');
            $(this).addClass('my_btn_start');
            $.ajax({
                url:"my_music.txt",
                type:"get",
                success:function(data){
                    var xml = JSON.parse(data);
                    var aTime = xml[btn_xia].time;
                    var m_Time = 100/(Number(xml[btn_xia].m_time));
                    function a_time(){
                        if(zanTing == m_Time*100){
                            clearInterval(timer);
                        }
                        var minutes = parseInt((zanTing % 3600) / 60);
                        var seconds = parseInt(zanTing % 60);
                        minutes = minutes < 10 ? "0" + minutes : minutes;
                        seconds = seconds < 10 ? "0" + seconds : seconds;
                        oPlay_time.text(minutes + ":" + seconds + "/" + aTime);
                        oPlay_play.css('width',m_Time*zanTing+'%');
                        zanTing++;
                    }
                    timer = setInterval(a_time,1000);
                }
            });
        } else {
            video.trigger("pause");
            video.removeClass('play');
            video.addClass('pause');
            oPlay_play.stop();
            $(this).removeClass('my_btn_start');
            clearInterval(timer);
        }
    });
    //点击下一曲
    $('.my_btn_bottom').click(function(){
        $('.my_btn_stop').addClass('my_btn_start');
        video.removeClass('pause');
        btn_xia += 1;
        var timeIndex = 0;
        clearInterval(timer);
        //clearInterval(timer);
        //alert(_this);
        $.ajax({
            url:"my_music.txt",
            type:"get",
            success:function(data){
                var xml = JSON.parse(data);
                var oUrl = xml[btn_xia].url;
                var aName = xml[btn_xia].song;
                var aSinger = xml[btn_xia].singer;
                var aAlbum = xml[btn_xia].album;
                var aTime = xml[btn_xia].time;
                var m_Time = 100/(Number(xml[btn_xia].m_time));
                var v_Url = xml[btn_xia].vurl;
                //alert(m_Time);
                var pic_img = $('.my_box_info_pic').attr('src',oUrl);
                oName.html('歌曲名:<a href="javascript:;">'+ aName +'</a>');
                oSinger.html('歌手名:<a href="javascript:;">'+ aSinger +'</a>');
                oAlbum.html('专辑名:<a href="javascript:;">'+ aAlbum +'</a>');
                oPlay_info.html('<a href="javascript:;">'+ aName +'</a>-<a href="javascript:;">'+ aSinger +'</a>');
                //oPlay_play.stop().css("width",'0%');
                //oPlay_play.animate({"width":"100%"},m_Time);
                $('.source').attr("src",v_Url);
                //clearInterval(timer);
                function a_time(){
                    var minutes = parseInt((timeIndex % 3600) / 60);
                    var seconds = parseInt(timeIndex % 60);
                    minutes = minutes < 10 ? "0" + minutes : minutes;
                    seconds = seconds < 10 ? "0" + seconds : seconds;
                    oPlay_time.text(minutes + ":" + seconds + "/" + aTime);
                    oPlay_play.css('width',m_Time*timeIndex+'%');
                    timeIndex++;
                    zanTing = timeIndex;
                }
                timer = setInterval(a_time,1000);
            }
        });
        if(btn_xia >= 5){
            btn_xia = 0;
        }
    });
    //点击上一曲
    $('.my_btn_top').click(function(){
        $('.my_btn_stop').addClass('my_btn_start');
        video.removeClass('pause');
        clearInterval(timer);
        btn_xia -= 1;
        if(btn_xia < 0){
            btn_xia = 4;
        }
        var timeIndex = 0;
        //clearInterval(timer);
        //alert(_this);
        $.ajax({
            url:"my_music.txt",
            type:"get",
            success:function(data){
                var xml = JSON.parse(data);
                var oUrl = xml[btn_xia].url;
                var aName = xml[btn_xia].song;
                var aSinger = xml[btn_xia].singer;
                var aAlbum = xml[btn_xia].album;
                var aTime = xml[btn_xia].time;
                var m_Time = 100/(Number(xml[btn_xia].m_time));
                var v_Url = xml[btn_xia].vurl;
                //alert(m_Time);
                var pic_img = $('.my_box_info_pic').attr('src',oUrl);
                oName.html('歌曲名:<a href="javascript:;">'+ aName +'</a>');
                oSinger.html('歌手名:<a href="javascript:;">'+ aSinger +'</a>');
                oAlbum.html('专辑名:<a href="javascript:;">'+ aAlbum +'</a>');
                oPlay_info.html('<a href="javascript:;">'+ aName +'</a>-<a href="javascript:;">'+ aSinger +'</a>');
                //oPlay_play.stop().css("width",'0%');
                //oPlay_play.animate({"width":"100%"},m_Time);
                $('.source').attr("src",v_Url);
                //clearInterval(timer);
                function a_time(){
                    var minutes = parseInt((timeIndex % 3600) / 60);
                    var seconds = parseInt(timeIndex % 60);
                    minutes = minutes < 10 ? "0" + minutes : minutes;
                    seconds = seconds < 10 ? "0" + seconds : seconds;
                    oPlay_time.text(minutes + ":" + seconds + "/" + aTime);
                    oPlay_play.css('width',m_Time*timeIndex+'%');
                    timeIndex++;
                    zanTing = timeIndex;
                }
                timer = setInterval(a_time,1000);
            }
        });
    });
    //点击清空列表
    $('.fore5_a').click(function(){
        if(confirm('是否删除歌曲')){
            $('.mg_main_li01').remove();
        }
    });
    //点击多选框，打勾
    oUl.on('click','.my_ul1_li1',function(){
        $(this).toggleClass('mg_ul2_li1');
    });
    //删除打勾的歌曲
    $('.fore4_a').click(function(){
        if($('.my_ul1_li1').hasClass('mg_ul2_li1')){
            if(confirm('是否删除歌曲')){
                $('.mg_ul2_li1').parent().parent().remove();
            }
        }
    });
    //点击歌曲上的勾，下面全部打勾
    $('.my_ul2_li2')
});
