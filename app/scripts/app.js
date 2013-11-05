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
            }).when('/AboutScholar',{
                templateUrl:'views/Partial/AboutScholar.html',
                controller: 'PartialCtrl'
            }).when('/BasisOfVedicLiterature',{
                templateUrl:'views/Partial/BasisOfVedicLiterature.html',
                controller: 'PartialCtrl'
            }).when('/demo',{
                templateUrl:'views/Partial/demo.html',
                controller: 'PartialCtrl'
            }).when('/demo',{
                templateUrl:'views/Partial/demo.html',
                controller: 'PartialCtrl'
            }).when('/demo',{
                templateUrl:'views/Partial/demo.html',
                controller: 'PartialCtrl'
            }).when('/demo',{
                templateUrl:'views/Partial/demo.html',
                controller: 'PartialCtrl'
            }).when('/demo',{
                templateUrl:'views/Partial/demo.html',
                controller: 'PartialCtrl'
            }).when('/demo',{
                templateUrl:'views/Partial/demo.html',
                controller: 'PartialCtrl'
            }).when('/demo',{
                templateUrl:'views/Partial/demo.html',
                controller: 'PartialCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
