var app=angular.module("app",["ui.router"]);
app.config(function($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise("meet")
    $stateProvider.state("meet",{
        url:"/meet",
        templateUrl:"meet.html"
    }).state("telmeeting",{
        url:"/telmeeting",
        templateUrl:"telmeeting.html"
    }).state("direct",{
        url:"/direct",
        templateUrl:"direct.html"
    }).state("intmeeting",{
        url:"/intmeeting",
        templateUrl:"intmeeting.html"
    })

})
