/*新闻动态*/
var NewsEvents=angular.module('NewsEvents',['ui.router']); 
NewsEvents.config(function($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise("/Medio");
    $stateProvider.state('Medio',{
        url:'/Medio',
        templateUrl:'Medio.html'
    })
    $stateProvider.state('New',{
        url:'/New',
        templateUrl:'New.html'
    })
    $stateProvider.state('BBC',{
        url:'/BBC',
        templateUrl:'BBC.html'
    })
    //媒体报道
    .state('Medio1',{
        url:'/Medio1',
        templateUrl:'Medio1.html'
    })
    .state('Medio2',{
        url:'/Medio2',
        templateUrl:'Medio2.html'
    })
    .state('Medio3',{
        url:'/Medio3',
        templateUrl:'Medio3.html'
    })
    .state('Medio4',{
        url:'/Medio4',
        templateUrl:'Medio4.html'
    })
    .state('Medio5',{
        url:'/Medio5',
        templateUrl:'Medio5.html'
    })
    .state('Medio6',{
        url:'/Medio6',
        templateUrl:'Medio6.html'
    })
    //公司新闻
    .state('New1',{
        url:'/New1',
        templateUrl:'New1.html'
    })
    .state('New2',{
        url:'/New2',
        templateUrl:'New2.html'
    })
    .state('New3',{
        url:'/New3',
        templateUrl:'New3.html'
    })
    .state('New4',{
        url:'/New4',
        templateUrl:'New4.html'
    })
    .state('New5',{
        url:'/New5',
        templateUrl:'New5.html'
    })
    .state('New6',{
        url:'/New6',
        templateUrl:'New6.html'
    })
    //BBC俱乐部
    .state('BBC1',{
        url:'/BBC1',
        templateUrl:'BBC1.html'
    })
    .state('BBC2',{
        url:'/BBC2',
        templateUrl:'BBC2.html'
    })
    .state('BBC3',{
        url:'/BBC3',
        templateUrl:'BBC3.html'
    })
    .state('BBC4',{
        url:'/BBC4',
        templateUrl:'BBC4.html'
    })
    .state('BBC5',{
        url:'/BBC5',
        templateUrl:'BBC5.html'
    })
})
$(function(){    
    // 新闻动态 导航点击效果
    $('.NEnav a').click(function(){
        $(this).addClass('default').siblings().removeClass('default');
    })
})

$(function(){
    //科普知识 时间hove变蓝色效果
    $('.SconRightDate').click(function(){
        alert(1)
        $(this).find('a').css('color','#246fee');            
    },function(){
        alert(2)
        $(this).find('a').css('color','#757575');            
    })

    //科普知识 页脚点击 效果
    function reload(){
        /*window.location.href=window.location.href; 
        window.location.reload; */
        $('.PageFooter .click').eq(index).addClass('Select').siblings().removeClass('Select');  
        $('.ScienceCon .Scon').eq(index).addClass('SconBlock').siblings().removeClass('SconBlock'); 
    }
    var index = 0;
    $('.PageFooter .click').click(function(){
        index = $(this).index()-1;  
        reload();
    })
    $('.PageFooter .prev').click(function(){
        index--;
        if(index <= 0){
            index=0;
        }   
        reload();
    })
    $('.PageFooter .next').click(function(){
        index++;
        if(index >= 1){
            index=1;
        }   
        reload();
    })

    // console.log($('.ScienceCon a'))
    $('.ScienceCon a').click(function(){
        alert(1)
        window.location.href=window.location.href; 
        window.location.reload; 
    })
})