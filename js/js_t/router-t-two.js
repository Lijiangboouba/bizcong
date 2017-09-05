var app=angular.module("app",["ui.router"]);
app.config(function($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise("global")
    $stateProvider.state("global",{
        url:"/global",
        templateUrl:"global.html"
    }).state("hardware",{
        url:"/hardware",
        templateUrl:"hardware.html"
    }).state("hr",{
        url:"/hr",
        templateUrl:"hr.html"
    }).state("financial",{
        url:"/financial",
        templateUrl:"financial.html"
    }).state("retail",{
        url:"/retail",
        templateUrl:"retail.html"
    }).state("medical",{
        url:"/medical",
        templateUrl:"medical.html"
    })
})
