    
var productB=document.getElementById("product_b");
var columnbTop=document.getElementById("column_b_top");
      // function wheel(upFn, downFn) {
      //     window.onmousewheel = getWheelDalta;
      //     if(window.addEventListener) {
      //         window.addEventListener("DOMMouseScroll", getWheelDalta, false);
      //     }
      //     function getWheelDalta(event) {
      //         var event = event || window.event;
      //         var delta = 0;
      //         if (event.wheelDelta) {
      //             delta = event.wheelDelta/120;
      //             if (window.opera) delta = -delta;
      //         } else if (event.detail) {
      //             delta = -event.detail/3;
      //         }
      //         if(delta > 1) {
      //             upFn();
      //         }else {
      //             downFn();
      //         }
      //     }
      // }
      // function wheelUp() {
        
      //     columnbTop.style.display="block";
      // }
      // function wheelDown() {
      //      productB.style.opacity=1;
      //     productB.style.transition="0.5s";
      //     productB.style.transform="translateX(0px)";
      // }
      // wheel(wheelDown,wheelUp);
      window.onscroll=function(){
        var win = /.*chrome.*/i.test(navigator.userAgent) ? document.body : document.documentElement;
        var scrollTop = win.scrollTop;  
        if(scrollTop>=600){
           productB.style.opacity=1;
            productB.style.display="block";
            productB.style.transition="0.5s";
            productB.style.marginLeft="0px";
            columnbTop.style.display="block";
        }if(scrollTop<600){
              columnbTop.style.display="none";
          }
      }
      $(function(){
          //½â¾ö·½°¸
           var bannerB=document.getElementById("banner_b");
            var ua = navigator.userAgent;

          if(ua.lastIndexOf('MSIE 9')!=-1){
            $("#banner_b").remove()
          }
          $(".scheme_b_left_con").find("div").click(function () {
              var i = $(this).index();
              $(this).addClass("scheme_b_left_con_show").siblings().removeClass("scheme_b_left_con_show");
              $(".scheme_b_right").find(".scheme_b_right_node").eq(i).addClass("scheme_b_right_show").siblings().removeClass("scheme_b_right_show");
              $(this).find('span').css({'background-position':'0 '+(i+1)*-25-100+'px'})
          })

          $(".scheme_b_left_tit a").mousemove(function () {
              $(this).attr("style","background:#2869db;color:white")
          })
          $(".scheme_b_left_tit a").mouseout(function () {
              $(this).attr("style","background:#222222;color:#c7c7c7")
          })
          $(".scheme_b_right_node_con a").mousemove(function () {
              $(this).attr("style","border:1px solid #2869db;color:#2869db")
          })
          $(".scheme_b_right_node_con a").mouseout(function () {
              $(this).attr("style","border:1px solid #ccc;color:#666666")
          })
      //    ½â¾ö·½°¸ ends

      //   news ÐÂÎÅÖÐÐÄ
          $(".news_b_con_right").children().eq(0).click(function (){
              var j = $(this).index();
              $(".l_span").eq(1).css("display","none");
              $(".l_span").eq(0).css("display","block");
              $(".l_span").eq(2).css("display","none");
              $(".l-lj").eq(1).css("display","block");
              $(".l-lj").eq(0).css("display","none");
              $(".l-lj").eq(2).css("display","block");
              $(".news_b_con_right_node_cont").eq(0).find("h4").css("display","block");
              $(".news_b_con_right_node_cont").eq(0).find("p").css("display","block");
              $(".news_b_con_right_node_cont").eq(1).find("h4").css("display","none");
              $(".news_b_con_right_node_cont").eq(1).find("p").css("display","none");
              $(".news_b_con_right_node_cont").eq(2).find("h4").css("display","none");
              $(".news_b_con_right_node_cont").eq(2).find("p").css("display","none");


              $(this).children(0).eq(0).addClass("news_b_con_right_node_cont");
              $(".news_b_con_left").find("img").eq(j).addClass("news_b_con_left_img").siblings().removeClass("news_b_con_left_img");
          })
          $(".news_b_con_right").children().eq(1).click(function (){
              var j = $(this).index();
              console.log(this)
              $(".l_span").eq(0).css("display","none");
              $(".l_span").eq(1).css("display","block");
              $(".l_span").eq(2).css("display","none");
              $(".l-lj").eq(0).css("display","block");
              $(".l-lj").eq(1).css("display","none");
              $(".l-lj").eq(2).css("display","block");
              $(".news_b_con_right_node_cont").eq(1).find("h4").css("display","block");
              $(".news_b_con_right_node_cont").eq(1).find("p").css("display","block");
              $(".news_b_con_right_node_cont").eq(0).find("h4").css("display","none");
              $(".news_b_con_right_node_cont").eq(0).find("p").css("display","none");
              $(".news_b_con_right_node_cont").eq(2).find("h4").css("display","none");
              $(".news_b_con_right_node_cont").eq(2).find("p").css("display","none");
              $(this).children(0).eq(0).addClass("news_b_con_right_node_cont");
              $(".news_b_con_left").find("img").eq(j).addClass("news_b_con_left_img").siblings().removeClass("news_b_con_left_img");
          })
          $(".news_b_con_right").children().eq(2).click(function (){
              var j = $(this).index();
              console.log(this);
              $(".l_span").eq(0).css("display","none");
              $(".l_span").eq(2).css("display","block");
              $(".l_span").eq(1).css("display","none");
              $(".l-lj").eq(0).css("display","block");
              $(".l-lj").eq(2).css("display","none");
              $(".l-lj").eq(1).css("display","block");
              $(".news_b_con_right_node_cont").eq(2).find("h4").css("display","block");
              $(".news_b_con_right_node_cont").eq(2).find("p").css("display","block");
              $(".news_b_con_right_node_cont").eq(1).find("h4").css("display","none");
              $(".news_b_con_right_node_cont").eq(1).find("p").css("display","none");
              $(".news_b_con_right_node_cont").eq(0).find("h4").css("display","none");
              $(".news_b_con_right_node_cont").eq(0).find("p").css("display","none");
              $(this).children(0).eq(0).addClass("news_b_con_right_node_cont")
              $(".news_b_con_left").find("img").eq(j).addClass("news_b_con_left_img").siblings().removeClass("news_b_con_left_img");
          })
      //    ÈÈµãÐÂÎÅ ends

          //³É¹¦°¸ÁÐ  starts
          $('.works_b_con').find(".works_b_con_node").mouseover(function () {
              var i = $(this).index();
              $(this).children().eq(0).attr('style','bottom:0;transition:0.3s;');
              $(this).children().eq(1).attr('style','top:0;transition:0.3s;');
          });
          $('.works_b_con').children(".works_b_con_node").mouseout(function () {
              var i = $(this).index();
              $(this).children().eq(0).attr('style','bottom:-240px;transition:0.3s;');
              $(this).children().eq(1).attr('style','top:106px;transition:0.3s;');
          });
          $('.scheme_b_phone_con_nav').find("span").click(function () {
              var i = $(this).index();
              $(".scheme_b_phone_con_show").find("div").eq(i).addClass("scheme_b_phone_con_show_hide").siblings().removeClass("scheme_b_phone_con_show_hide");
          });
          //³É¹¦°¸ÁÐ  ends

      })

  //banner  starts
       
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        loop:true,
        autoplay:1000,
        autoplayDisableOnInteraction:false,
        speed:1000
    });
     var swiper = new Swiper('.swiper-container1', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        direction: 'vertical',
        loop:true,
        autoplay:1000,
        autoplayDisableOnInteraction:false,
        speed:1000
    });
     window.onload=function(){
  //返回顶部

    //返回顶部
    // sidebar_left-ends
    // leave starts
    var falg = document.getElementById('falg_t');
  var leave_t_content = document.getElementsByClassName('leave_t_content')[0];
  var oI = falg.childNodes[0];
  var k = true;
  falg.onclick = function(){
      if(k){
          k=false;
          leave_t_content.style.display = 'none';
          oI.style.background='url(images/leave/nodeMax.png) no-repeat';
      }else{
          k=true;
          leave_t_content.style.display = 'block';
          oI.style.background='url(images/leave/nodeMin.png) no-repeat';
      }
  }

}
$(function(){
  var ua=navigator.userAgent;
  if(ua.lastIndexOf('Trident')!= -1){
    var txtHolder=$("#txt").attr("placeholder");
      var nameHolder=$("#name").attr("placeholder");
      var phoneHolder=$("#phone").attr("placeholder");
      var emialHolder=$("#emial").attr("placeholder");
      var addHolder=$("#add").attr("placeholder");
      $("#txt").val(txtHolder).addClass("hint");
      $("#name").val(nameHolder).addClass("hint");
      $("#phone").val(phoneHolder).addClass("hint");
      $('#emial').val(emialHolder).addClass("hint");
      $('#add').val(addHolder).addClass("hint");
     function change(ele,text){
        $(ele).focus(function(){
            if($(this).val() == text){
                $(this).val("").removeClass("hint");
            }
            return false;
        }).blur(function(){
            if($(this).val().trim() === ""){
                $(this).val(text).addClass("hint");
            }
            return false;
        });
     }
     change("#txt",txtHolder);
     change("#name",nameHolder);
     change("#phone",phoneHolder);
     change("#emial",emialHolder);
     change("#add",addHolder);

  }    

})
      //banner  ends
