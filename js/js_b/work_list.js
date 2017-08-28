/**
 * Created by Administrator on 2017/8/27.
 */
//·ÖÒ³
$(function(){
    var w=$(".list_b_con").width();
    var iNow=0;
    var index=0;
    $('.list_b_nav>p:nth-child(4)').click(function(){
            iNow++;
            if(iNow==Math.ceil($(".list_b_con_node").length/3)){
                iNow=Math.ceil($(".list_b_con_node").length/3)-1
            }
        console.log(w)
            $('.list_b_con_center').css('margin-left','-'+w*iNow+'px')
            $('.list_b_nav span').eq(iNow).addClass('list_b_nav_show').siblings().removeClass('list_b_nav_show')

    })
    $('.list_b_nav>p:nth-child(1)').click(function(){

            iNow--;
            if(iNow<=0){
                iNow=0
            }
            $('.list_b_con_center').css('margin-left','-'+w*iNow+'px')
            $('.list_b_nav span').eq(iNow).addClass('list_b_nav_show').siblings().removeClass('list_b_nav_show')


    })
    $('.list_b_nav span').click(function(){


            var i=$('.list_b_nav span').index(this);
            iNow=i;
            index=i;
            $('.list_b_con_center').css('margin-left','-'+w*iNow+'px')
            $('.list_b_nav span').eq(iNow).addClass('list_b_nav_show').siblings().removeClass('list_b_nav_show')

    })
});

