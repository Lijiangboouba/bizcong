/**
 * Created by Administrator on 2017/8/28.
 */
var app=angular.module("app",["ui.router"]);
app.config(function($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise("all_b")
    $stateProvider.state("all_b",{
        url:"/all_b",
        templateUrl:"all_b.html"
    }).state("video_b",{
        url:"/video_b",
        templateUrl:"video_b.html"
    }).state("phone_b",{
        url:"/phone_b",
        templateUrl:"phone_b.html"
    }).state("live_b",{
        url:"/live_b",
        templateUrl:"live_b.html"
    }).state("meeting",{
        url:"/meeting",
        templateUrl:"meeting.html"
    }).state("details_b",{
        url:"/details_b",
        templateUrl:"details_b.html"
    })

})
