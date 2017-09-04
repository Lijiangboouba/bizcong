 
   var bannerB=document.getElementById("banner_b");
            var ua = navigator.userAgent;

          if(ua.lastIndexOf('MSIE 9')!=-1){
            $("#banner_b").attr('style','display:none;')
          }
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