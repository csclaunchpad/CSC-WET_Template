"use strict";

var app = angular.module("YOURAppNAMEHERE", ['ngRoute', 'YOURAppNAMEHERE.controllers']);

//When the appropriate URL is present, inject the file indicated by it's templateUrl property into ng-view in index.html (Which is always displayed)
app.config(["$routeProvider", function($routeProvider) {
		
    $routeProvider

    // routeProvider for htmlpages/home.html
    .when("/home", {
        controller: "HomeCtrl",
        templateUrl: "../partials/home.html"
    })

    .when("/Login", {
        controller: "LoginCtrl",
        templateUrl: "../partials/Login.html"
    })

    .when("/Page1", {
        controller: "Page1Ctrl",
        templateUrl: "../partials/Page1.html"
    })    


    // Whenever none of the above .when method calls occur, run this .otherwise method instead (This should always be the application's initial landing page)
    .otherwise({redirectTo: "/home"});
}]);
