

angular.module('vedicApp').controller('DemoCtrl', function ($scope){
    $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
    ];
    $scope.blurCallback = function () {
        console.log("Working");
        //alert('Goodbye');
    };
});
