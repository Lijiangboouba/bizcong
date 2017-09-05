// pc端和移动端二级下拉菜单
var isMobile = /mobi/i.test(navigator.userAgent.toLowerCase());
if (isMobile) {
	$('.h_nav_box').click(function(){
	    $(this).children().eq(1).stop(true).slideToggle(400);	
	})
}else{
	$('.h_nav_box').hover(function(){
	    $(this).children().eq(1).stop(true).slideToggle(400);	
	})
}
// pc端和移动端二级下拉菜单结束

// 头部点击按钮
$(function(){
	var xx=0;
	$('.h_pic').click(function(){	
		if (xx==0) {
			$(this).children().eq(0).css({'transform':'rotate(45deg) translateY(2px)','transition':'0.5s'});
			$(this).children().eq(1).css('display','none');
			$(this).children().eq(2).css({'transform':'rotate(-45deg) translateY(-1px)','transition':'0.5s'});
			$('.h_nav').css({'right':'0','transition':'0.5s'})
			xx++;
		}else{
			$(this).children().eq(0).css({'transform':'none','transition':'0.5s'});
			$(this).children().eq(1).css('display','block');
			$(this).children().eq(2).css({'transform':'none','transition':'0.5s'});
			$('.h_nav').css({'right':'-50%','transition':'0.5s'})
			xx=0;
		}
	})
})
// 头部点击按钮结束



//翻译点击
function sure () {
	var bt1 = document.getElementById('bt1');
	var bt2 = document.getElementById('bt2');
	bt1.style.backgroundColor="#fff";
	bt2.style.backgroundColor="#222";
	bt1.onclick=function(){
		bt1.style.backgroundColor="#fff";
		bt1.style.color="#000";
		bt2.style.backgroundColor="#222";
		bt2.style.color="#fff";
	}
	bt2.onclick=function(){
		bt1.style.backgroundColor="#222";
		bt1.style.color="#fff";
		bt2.style.backgroundColor="#fff";
		bt2.style.color="#000";
	}
}
sure()
// 翻译点击结束
// footer -starts

$(function(){
	var isMobileon = /mobi/i.test(navigator.userAgent.toLowerCase());
	if (isMobileon) {
		$('.WX').click(function(){
			var ISnone=$(this).children().eq(0).css('display');
			if(ISnone == 'none'){
				$(this).children().eq(0).css('display','block');
				$('.footerNav').find('.mask').fadeIn();
			}else{
					$(this).children().eq(0).css('display','none');
				$('.footerNav').find('.mask').fadeOut();
			}
		})
		$('.FooterClose').click(function(){
			$('.WX .WXbox').css('display','none');
			$('.footerNav').find('.mask').fadeOut();
		})
	}else{		
		$('.WX').hover(function(){
			$(this).children().eq(0).css('display','block');
		},function(){
			$(this).children().eq(0).css('display','none');
		})
	}
})
// footer_end
// sidebar_left-starts
$(function(){
	$('.column_b_wx').mouseover(function(){
		$(".column_b_wx_con").stop(true).animate({
               right:"0"
         },300);
    })
    $('.column_b_wx').mouseout(function(){
    	$(".column_b_wx_con").stop(true).animate({
               right:"-152px"
         },300);
    })
    $('.column_b_phone').mouseover(function(){
    	$(".column_b_phone_con").stop(true).animate({
               right:"0px"
         },300);
    })
    $('.column_b_phone').mouseout(function(){
    	$(".column_b_phone_con").stop(true).animate({
               right:"-230px"
         },200);
    })
    $('.column_b_search').mouseover(function(){
    	$(".column_b_search_con").stop(true).animate({
               right:"0px"
         },200);
    })
    $('.column_b_search').mouseout(function(){
    	$(".column_b_search_con").stop(true).animate({
               right:"-152px"
         },300);
    })
    $('.column_b_top').mouseover(function(){
    	$(".column_b_top_con").stop(true).animate({
               right:"0px"
         },100);
    })
    $('.column_b_top').mouseout(function(){
    	$(".column_b_top_con").stop(true).animate({
               right:"-54px"
         },100);
    })

     $(".column_b_top").click(function(){
        $("body,html").animate({
            scrollTop:0
        },500);
    });
})




// leave ends
