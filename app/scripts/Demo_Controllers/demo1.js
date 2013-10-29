//$("btn").focus();
//angular.element("#myinput").focus();
//angular.element( document.querySelector( '#myinput' )).focus();
angular.module('vedicApp').controller('DemoCtrl', function ($scope){
    angular.element("#myinput").focus();
    $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
    ];
    $scope.blurCallback = function () {
        console.log("Working");
        //alert('Goodbye');
    };
    $scope.myfocus = function(){
        angular.element("#myinput").focus();
    };
});
