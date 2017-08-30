
var app=angular.module('app',['ui.router']); 
app.config(function($stateProvider,$urlRouterProvider){
	$urlRouterProvider.otherwise("/Suggeste");
	$stateProvider.state('FZIndex',{
    	url:'/FZIndex',
        templateUrl:'FZIndex.html'
    })
    .state('AfterService',{
    	url:'/AfterService',
        templateUrl:'AfterSalesService.html'
    })
    .state('Apply',{
        url:'/Apply',
        templateUrl:'Application.html'
    })
    .state('Suggeste',{
        url:'/Suggeste',
        templateUrl:'Suggestions.html'
    })
    .state('Know',{
        url:'/Know',
        templateUrl:'Knowledge.html'
    })
    
})


// 验证码变化	
function random(min,max){
	return parseInt(Math.random()*(++max-min))+min;
};
app.controller('codeChange',function($scope){
	$scope.change=function(){
		$('.applyFormEach .imgChange').attr('src','../../images/q_img/code'+random(1,20)+'.png')
	}
})
$(function(){
	// 服务与支持导航点击效果
    $('.FZnav a').click(function(){
        $(this).addClass('default').siblings().removeClass('default');
    })   
})
