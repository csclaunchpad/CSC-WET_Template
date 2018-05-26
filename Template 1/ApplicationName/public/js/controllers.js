"use strict";

// This file contains all functionality that goes along with a page. The controller that goes along with a page is defined in app.js

var app = angular.module("YOURAppNAMEHERE.controllers", ['ngRoute', 'ngMaterial']);

//------------------ Home Controller --------------------
app.controller('HomeCtrl', ['$scope', '$window', "translationService", function($scope, $window, translationService) {

    // Anything affecting the front-end is stored here
    $scope.pageElements = translationService.translate("home.html")
	
}]);

//------------------ Login Controller --------------------
app.controller('LoginCtrl', ['$scope', '$window', "translationService", function($scope, $window, translationService) {

    // Anything affecting the front-end is stored here
    $scope.pageElements = translationService.translate("Login.html")

}]);

//------------------ Page1 Controller --------------------
app.controller('Page1Ctrl', ['$scope', '$window', "translationService", function($scope, $window, translationService) {
   
    $scope.user = {
        firstName: "",
        lastName: "",
        level: "",
        post: "",
        unit: "",
        region: "",
        institution: ""
    }
   
    // Anything affecting the front-end is stored here
    $scope.pageElements = translationService.translate("Page1.html")
   
}]);


