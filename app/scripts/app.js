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
            }).when('/feedback',{
                templateUrl:'views/Partial/feedback.html',
                controller: 'PartialCtrl'
            }).when('/fermats',{
                templateUrl:'views/Partial/Fermats.html',
                controller: 'PartialCtrl'
            }).when('/ganitsutras',{
                templateUrl:'views/Partial/ganitsutras.html',
                controller: 'PartialCtrl'
            }).when('/glimpses',{
                templateUrl:'views/Partial/glimpses.html',
                controller: 'PartialCtrl'
            }).when('/goldbachs',{
                templateUrl:'views/Partial/goldbachs.html',
                controller: 'PartialCtrl'
            }).when('/publishedbooks',{
                templateUrl:'views/Partial/publishedbooks.html',
                controller: 'PartialCtrl'
            }).when('/scriptures',{
                templateUrl:'views/Partial/scriptures.html',
                controller: 'PartialCtrl'
            }).when('/timeandspace',{
                templateUrl:'views/Partial/timeandspace.html',
                controller: 'PartialCtrl'
            }).when('/vedicmathematicslinks',{
                templateUrl:'views/Partial/vedicmathematicslinks.html',
                controller: 'PartialCtrl'
            }).when('/vmanswers',{
                templateUrl:'views/Partial/vmanswers.html',
                controller: 'PartialCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
