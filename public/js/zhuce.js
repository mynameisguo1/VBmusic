/**
 * Created by Administrator on 2016/11/30.
 */
$(function(){
    $('.form_text2').focus(function(){
        $('.input-tip1').html('<span class="span1"><i class="i-def"></i>支持、字母、数字、“-”“_”的组合，4-20个字符</span>');
    });
    $('.form_text2').blur(function(){
        $('.input-tip1 .span1').remove();
    });
    $('.form_text2').change(function(){
        var txt1 = $(this).val();
        var txt1_z = /[A-Za-z0-9-_]+$/;
        if(txt1_z.test(txt1)){
            $('.i-status1').css('display','block');
        }else if(txt1.length == 0){
            $('.i-status1').css('display','none');
        }else{
            $('.i-status1').css('display','none');
            $('.input-tip1').html('<span class="span2"><i class="i-def1"></i>格式错误，仅支持、数字、“-”“_”的组合</span>');
        }
    });
    //密码
    $('.form_pass1').focus(function(){
        $('.input-tip2').html('<span class="span1"><i class="i-def"></i>建议使用字母、数字和符号两种及以上的组合，6-20个字符</span>');
    })
    $('.form_pass1').blur(function(){
        $('.input-tip2 .span1').remove();
    })
    $('.form_pass1').change(function(){
        var txt1 = $(this).val();
        var txt1_z = /[A-Za-z0-9-_/.]+$/;
        if(txt1_z.test(txt1)){
            $('.i-status2').css('display','block');
        }else if(txt1.length == 0){
            $('.i-status2').css('display','none');
        }else{
            $('.i-status2').css('display','none');
            $('.input-tip2').html('<span class="span2"><i class="i-def1"></i>格式错误，仅支持字母、数字和符号的组合</span>');
        }
    });
    //确认密码
    $('.form_pass2').focus(function(){
        $('.input-tip3').html('<span class="span1"><i class="i-def"></i>请再次输入密码</span>');
    })
    $('.form_pass2').blur(function(){
        $('.input-tip3 .span1').remove();
    })
    $('.form_pass2').change(function(){
        var txt1 = $(this).val();
        var txt2 = $('.form_pass1').val();
        if(txt1 == txt2){
            $('.i-status3').css('display','block');
        }else if(txt1.length == 0){
            $('.i-status3').css('display','none');
        }else{
            $('.i-status3').css('display','none');
            $('.input-tip3').html('<span class="span2"><i class="i-def1"></i>两次密码输入不一致</span>');
        }
    });

    var code; //在全局 定义验证码
    function createCode() {
        code = "";
        var codeLength = 4;//验证码的长度
        var selectChar = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z');//所有候选组成验证码的字符，当然也可以用中文的
        for (var i = 0; i < codeLength; i++) {
            var charIndex = Math.floor(Math.random() * 36);
            code += selectChar[charIndex];
        }
        //alert(code);
        $('#yzm span').text(code);
    }
    createCode();
    $('#yzm span').click(function(){
        createCode();
    });
    //3D旋转
    var arr = [];
    var timer = null;
    var aLi = $('.ZC_donghua li');
    for (var i=0; i<aLi.length; i++)
    {
        arr[i]=aLi[i].className;//把对应的class名放进arr中
    }
    function aa(){
        var qq = arr.shift();
        arr.push(qq);
        //alert(arr);
        for(var j = 0;j < arr.length;j++){
            $('.ZC_donghua li')[j].className = arr[j];
        }
    }
    function bb(){
        var qq = arr.pop();
        arr.unshift(qq);
        //alert(arr);
        for(var j = 0;j < arr.length;j++){
            $('.ZC_donghua li')[j].className = arr[j];
        }
    }
    $('#btn_1 p').click(function(){
         aa();
    });
    $('#btn_2 p').click(function(){
        bb();
    });
    $('#btn_3 p').click(function(){
        aa();
    });
    $('#btn_4 p').click(function(){
        bb();
    });
    $('#btn_5 p').click(function(){
        $('.img1').addClass('img1_text');
        setTimeout(function(){
            $('.img4').addClass('img4_test');
        },500)
        setTimeout(function(){
            $('.img4').removeClass('img4_test');
        },2500)
        setTimeout(function(){
            $('.img1').removeClass('img1_text');
        },2800)
    });

    $('.checkbox i').click(function(){
        $('.checkbox i').toggleClass('icon');
    });
});