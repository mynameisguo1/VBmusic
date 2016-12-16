/**
 * Created by Administrator on 2016/12/7.
 */
$(function(){
    $('.wish_btn').click(function(){
        $('.wish_box').show();
    });
    $('.wish_guanbi').click(function(){
        $('.wish_box').hide();
    });
    $('.wish_tijiao').click(function(){
        $('.wish_box').hide();
        var aDiv = $('<div class="newDiv"></div>');
        var aDiv_p1 = $('<p class="newDiv_p1"></p>');
        var aDiv_p2 = $('<p class="newDiv_p2"></p>');
        var aDiv_p3 = $('<p class="newDiv_p3"></p>');
        var aDiv_p4 = $('<p class="newDiv_p4"></p>');
        aDiv_p1.text($('.input1').val());
        aDiv_p1.appendTo(aDiv);
        aDiv_p2.text($('.wish_inner').val());
        aDiv_p2.appendTo(aDiv);
        aDiv_p3.text(show());
        aDiv_p3.appendTo(aDiv);
        aDiv_p4.appendTo(aDiv);
        aDiv.appendTo($('.wish_show'));
        function show(){
            var mydate = new Date();
            var str = mydate.getHours()+':'; //获取当前小时数(0-23)
            str+=mydate.getMinutes(); //获取当前分钟数(0-59)
            return str;
        }
        var ran_l = Math.random()*940;
        var ran_t = Math.random()*170;
        aDiv.css({'left':ran_l+'px','top':ran_t+'px'});
    });
    $('.wish_show').on('click','.newDiv_p4',function(){
        $(this).parent().remove();
    });
    var move=false;//移动标记
    var _x,_y;//鼠标离控件左上角的相对位置
    var aa= 0 ;
    $(".wish_show").on('mousedown','.newDiv',function(e){
        move=true;
        aa = $(this).index();
        _x=e.pageX-parseInt($(this).css("left"));
        _y=e.pageY-parseInt($(this).css("top"));
    });
    $(document).mousemove(function(e){
        e.preventDefault();
        if(move){
            var x=e.pageX-_x;//控件左上角到屏幕左上角的相对位置
            var y=e.pageY-_y;
            $(".newDiv").eq(aa).css({"top":y,"left":x});
        }
    }).mouseup(function(){
        move=false;
    });
});