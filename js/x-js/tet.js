$(function(){
    $('.h_tab li a').click(function(){
        $(this).addClass('h_color').parent().siblings().children().removeClass('h_color');
    })
})