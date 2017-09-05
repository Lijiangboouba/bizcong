/* 服务与支持 */
var app=angular.module('app',['ui.router']); 
app.config(function($stateProvider,$urlRouterProvider){
	$urlRouterProvider.otherwise("/FZIndex");
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
    .state('Science',{
        url:'/Science',
        templateUrl:'Science.html'
    })
    // 科普知识  路由
    .state('Scon1',{
        url:'/Scon1',
        templateUrl:'ScienceInfo1.html'
    })
    .state('Scon2',{
        url:'/Scon2',
        templateUrl:'ScienceInfo2.html'
    })
    .state('Scon3',{
        url:'/Scon3',
        templateUrl:'ScienceInfo3.html'
    })
    .state('Scon4',{
        url:'/Scon4',
        templateUrl:'ScienceInfo4.html'
    })
    .state('Scon5',{
        url:'/Scon5',
        templateUrl:'ScienceInfo5.html'
    })
    .state('Scon6',{
        url:'/Sco1n6',
        templateUrl:'ScienceInfo6.html'
    })
    
})


// 申请试用 验证码变化	
function random(min,max){
	return parseInt(Math.random()*(++max-min))+min;
};
app.controller('codeChange',function($scope){
	$scope.change=function(){
		$('.applyFormEach .imgChange').attr('src','../../images/q_img/code'+random(1,20)+'.png')
	}
})

$(function(){
    // 服务与支持 导航点击效果
    $('.FZnav a').click(function(){
        $(this).addClass('default').siblings().removeClass('default');
    })
})


/*石涛（请您留言）*/
var falg = document.getElementById('falg_t');
var leave_t_content = document.getElementsByClassName('leave_t_content')[0];
var oI = falg.childNodes[0];
var k = true;
falg.onclick = function(){
    if(k){
        k=false;
        leave_t_content.style.display = 'none';
        oI.style.background='url(../../images/leave/nodeMax.png) no-repeat';
    }else{
        k=true;
        leave_t_content.style.display = 'block';
        oI.style.background='url(../../images/leave/nodeMin.png) no-repeat';
    }
}





















