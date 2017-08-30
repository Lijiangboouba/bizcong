// 小导航切换
$(function(){
    $('.h_tab li a').click(function(){
        $(this).addClass('h_color').parent().siblings().children().removeClass('h_color');
    })
})



// 路由跳转
var app=angular.module('app',['ui.router']); 
app.config(function($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise("/gywm");
    // $urlRouterProvider.otherwise("/jrwm/jrwmInfo");
    $stateProvider.state('gywm',{
        url:'/gywm',
        templateUrl:'gywm.html'
    }).state('zcjy',{
        url:'/zcjy',
        templateUrl:'zcjy.html'
    }).state('qyjs',{
        url:'/qyjs',
        templateUrl:'qyjs.html'
    }).state('hydw',{
        url:'/hydw',
        templateUrl:'hydw.html'
    }).state('qyry',{
        url:'/qyry',
        templateUrl:'qyry.html'
    }).state('qyfc',{
        url:'/qyfc',
        templateUrl:'qyfc.html'
    }).state('jrwm',{
        url:'/jrwm',
        templateUrl:'jrwm.html',
        controller:function ($state) {
            $state.go('jrwm.jrwmInfo');
        }
    }).state('jrwm.jrwmInfo',{
        url:'/jrwmInfo',
        templateUrl:'jrwmInfo.html'
    }).state('jrwm.jrwmInfo2',{
        url:'/jrwmInfo2',
        templateUrl:'jrwmInfo2.html'
    })
})


