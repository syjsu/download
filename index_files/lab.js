/**
 * Created by lzj on 2018/6/8.
 */
$(function () {
    $('img.lazy').lazyload({
        effect: "fadeIn",
        threshold : '10px'
    });
    meunInit();//初始化导航栏的选中
    window.scrollTo(0,0);
    /*初始化用户信息*/
    initUserInfo();
    $('.user-pic').on('mouseover',function () {
        $(this).find('.pic-oper').css('display','block');
        $(this).children('img').css('transform','scale(.95)');
    })
    $('.user-pic').on('mouseout',function () {
        $(this).find('.pic-oper').css('display','none');
        $(this).children('img').css('transform','scale(1)');
    });
    $('.lab-info').css('height',$(window).height());
    $('#toRegister').on('click',function () {
        location.href = ssoServerUrl+'/html/register?redirectUrl='+window.location.href.split('?')[0];
    })
    $('#logout').on('click',function(e){
        e.stopPropagation();
        try{
            CMC.send({url:'http://api.xthinking.net/sso/logout',data:{},callBack:function(){}},{type:'get',withoutHeader: true});
            CMC.send({url:'http://www.s.mfcode.net/client/logout',data:{},callBack:function(){}},{type:'get',withoutHeader: true});
        }catch (e){

        }
        CookieUtil.remove("Authorization");
        CookieUtil.remove("videoToken");
        localStorage.removeItem('UserInfo');
        //移除用户的比赛信息
        localStorage.removeItem('MatchStroage');
        location.reload();
    });
});
window.onbeforeunload = function(){
    //刷新后页面自动回到顶部
    document.documentElement.scrollTop = 0;  //ie下
    document.body.scrollTop = 0;  //非ie
}
var initUserInfo = function(){
    /*var auth1 = $.cookie('authorization','123');
    console.log(auth1);*/
    var auth = decodeURIComponent($.cookie('Authorization'));
    if(!(auth == "undefined" || auth == "")){
        $('.user-login').css('display','none');
        $('.user-pic').css('display','block');
        var userInfo = localStorage.getItem('UserInfo');
        if(userInfo && userInfo != "undefined"){
            userInfo = JSON.parse(userInfo);
            $('.user-pic>.pic>img').attr('src',userInfo.avatar);
            $('.oper-img>img').attr('src',userInfo.avatar);
            $('.oper-name').html(userInfo.nick);
        }else{
            getUserInfo();
        }
    }else{
        $('.user-login').css('display','block');
        $('.user-pic').css('display','none');
    }
};
var userInfoCallBack = function(res){
    if(res.code == '200'){
        var userInfo = JSON.stringify(res.data);
        localStorage.setItem('UserInfo',userInfo);
    }else if(res.code == '403'){
        //权限过期，清除Authorization
        /*$.cookie("Authorization",null,{
            expires:-1,
            path:"/"
        });*/
        CookieUtil.remove("Authorization");
        localStorage.removeItem('UserInfo');
    }
    //location.reload();
};
