'use strict';

angular.module('vedicApp', ['ui.event'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      }).when('/demo',{
         templateUrl:'views/Demo/demo.html',
         controller: 'DemoCtrl'
        })
      .otherwise({
        redirectTo: '/'
      });
  });
