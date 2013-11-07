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
            }).when('/aboutScholar',{
                templateUrl:'views/Partials/aboutScholar.html',
                controller: 'PartialsCtrl'
            }).when('/BasisOfVedicLiterature',{
                templateUrl:'views/Partials/BasisOfVedicLiterature.html',
                controller: 'PartialsCtrl'
            }).when('/feedback',{
                templateUrl:'views/Partials/feedback.html',
                controller: 'PartialsCtrl'
            }).when('/fermats',{
                templateUrl:'views/Partials/Fermats.html',
                controller: 'PartialsCtrl'
            }).when('/ganitsutras',{
                templateUrl:'views/Partials/ganitsutras.html',
                controller: 'PartialsCtrl'
            }).when('/glimpses',{
                templateUrl:'views/Partials/Glimpses.html'
            }).when('/goldbachs',{
                templateUrl:'views/Partials/goldbachs.html',
                controller: 'PartialsCtrl'
            }).when('/publishedbooks',{
                templateUrl:'views/Partials/publishedbooks.html',
                controller: 'PartialsCtrl'
            }).when('/scriptures',{
                templateUrl:'views/Partials/scriptures.html',
                controller: 'PartialsCtrl'
            }).when('/timeandspace',{
                templateUrl:'views/Partials/timeandspace.html',
                controller: 'PartialsCtrl'
            }).when('/vedicmathematicslinks',{
                templateUrl:'views/Partials/vedicmathematicslinks.html',
                controller: 'PartialsCtrl'
            }).when('/vmanswers',{
                templateUrl:'views/Partials/vmanswers.html',
                controller: 'PartialsCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
