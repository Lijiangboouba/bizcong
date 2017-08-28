// 小导航切换
$(function(){
    $('.h_tab li a').click(function(){
        $(this).addClass('h_color').parent().siblings().children().removeClass('h_color');
    })
})


// 3D翻转效果
$(function(){
    $('.btn').click(function(){
        $('.h_eventswiper').css({'transform-origin':'50% 50% -118px', 'transform': 'translate3d(0px, 0px, 0px) rotateX(90deg) rotateY(0deg)','transition-duration':' 0ms'})
    })
})

var app=angular.module('app',['ui.router']); 
app.config(function($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise("/gywm");
    $stateProvider.state('gywm',{
        url:'/gywm',
        templateUrl:'gywm.html'
    })
    .state('zcjy',{
        url:'/zcjy',
        templateUrl:'zcjy.html'
    })
    .state('qyjs',{
        url:'/qyjs',
        templateUrl:'qyjs.html'
    })
    .state('hydw',{
        url:'/hydw',
        templateUrl:'hydw.html'
    })
    .state('qyry',{
        url:'/qyry',
        templateUrl:'qyry.html'
    })
})
