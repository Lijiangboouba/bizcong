$(function(){
    $('.list_b_con_node>a').mouseover(function () {
        var i=$(".list_b_con_node>a").index(this);
        $('.list_b_con_node>a img').eq(i).attr('style','width:400px;height:250px;transition:0.5s')
    });
    $('.list_b_con_node>a').mouseout(function () {
        var i=$(".list_b_con_node>a").index(this);
        $('.list_b_con_node>a img').eq(i).attr('style','width:368px;height:203px;transition:0.5s')
    });
    $('.banner_b_con>div').click(function () {
        var i=$(".banner_b_con>div").index(this);
        $('.banner_b_con>div').eq(i).addClass("banner_b_con_node").siblings().removeClass("banner_b_con_node");
    });
})