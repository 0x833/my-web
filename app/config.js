webApp = angular.module('ninjaApp', ['ngRoute'] );

webApp.config(['$routeProvider', function ($routeProvider) {
    'use strict';
   $routeProvider
	   .when('/', {
	       templateUrl: '/pages/main.htm',
	   })
	   .when('/about', {
	   	   templateUrl: '/pages/about.htm',
	   	   controller: 'introController'
	   })
	   .when('/store', {
	   		templateUrl: '/pages/store.htm'
	   })
	   .when('/code', {
	   		templateUrl: '/pages/code.htm'
	   })
	   .when('/projects', {
	   		templateUrl: '/pages/projects.htm'
	   });
}]);