// 小导航切换
$(function(){
    $('.h_tab li a').click(function(){
        $(this).addClass('h_color').parent().siblings().children().removeClass('h_color');
    })
})



// 关于我们 路由跳转
var app=angular.module('app',['ui.router']); 
app.config(function($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise("/gywm");
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
    }).state('lxwm',{
        url:'/lxwm',
        templateUrl:'lxwm.html'
    })
})



//投资者关系  路由跳转
var app2=angular.module('app2',['ui.router']); 
app2.config(function($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise("/gsgg");
    $stateProvider.state('gsgg',{
        url:'/gsgg',
        templateUrl:'gsgg.html',
        controller:function ($state) {
            $state.go('gsgg.gsgglist1');
        }
    }).state('gsgg.gsgglist1',{
        url:'/gsgglist1',
        templateUrl:'gsgglist1.html'
    }).state('gsgg.gsgglist2',{
        url:'/gsgglist2',
        templateUrl:'gsgglist2.html'
    }).state('gszc',{
        url:'/gszc',
        templateUrl:'gszc.html',
        controller:function ($state) {
            $state.go('gszc.gszclist');
        }
    }).state('gszc.gszclist',{
        url:'/gszclist',
        templateUrl:'gszclist.html'
    }).state('gszc.gszclist2',{
        url:'/gszclist2',
        templateUrl:'gszclist2.html'
    }).state('gpxx',{
        url:'/gpxx',
        templateUrl:'gpxx.html'
    })
})

