/**
 * Created by Administrator on 2016/12/8.
 */
$(function(){
    $('.title_a').click(function(){
        var aa = $('.span1_right li');
        aa.removeClass('li_01');
        for(var i = 0;i < aa.length;i++){
            var bb = 'li_item0'+(i+1);
            aa.eq(i).addClass(bb);
        }
    });
    $('#hua_yu').click(function(){
        var huaYu = $('.hua_yu');
        $('.span1_right li').siblings().addClass('li_01');
        huaYu.removeClass('li_01');
        for(var i = 0;i < huaYu.length;i++){
            var aa = 'li_item0'+(i+1);
            huaYu.removeClass('li_item08');
            huaYu.removeClass('li_item09');
            huaYu.eq(i).addClass(aa);
        }
    });
    $('#ri_han').click(function(){
        var riHan = $('.ri_han');
        $('.span1_right li').siblings().addClass('li_01');
        riHan.removeClass('li_01');
        for(var i = 0;i < riHan.length;i++){
            var aa = 'li_item0'+(i+1);
            riHan.removeClass('li_item03');
            riHan.removeClass('li_item07');
            riHan.eq(i).addClass(aa);
        }
    });
    $('#ou_mei').click(function(){
        var ouMei = $('.ou_mei');
        $('.span1_right li').siblings().addClass('li_01');
        ouMei.removeClass('li_01');
        for(var i = 0;i < ouMei.length;i++){
            var aa = 'li_item0'+(i+1);
            ouMei.removeClass('li_item04');
            ouMei.removeClass('li_item05');
            ouMei.removeClass('li_item06');
            ouMei.eq(i).addClass(aa);
        }
    });
});