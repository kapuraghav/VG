'use strict';

var app;
app = angular.module('vedicApp',['ui.bootstrap'])
    .controller('MainCtrl', function ($scope, $location) {
        $scope.getClass = function(path) {
            if ($location.path().substr(0, path.length) == path) {
                return "active"
            } else {
                return ""
            }
        }
    });
