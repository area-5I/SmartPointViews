'use strict';

/**
 * @ngdoc function
 * @name smartPointViewsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the smartPointViewsApp
 */
angular.module('smartPointViewsApp')
  .controller('MainCtrl',['$scope','changeColorHeader','$log','$timeout',function ($scope,changeColorHeader,$log,$timeout) {
    $scope.reposo="init";
    changeColorHeader.setColor("inicioHeader");
    $scope.headerColor = function() {
        return changeColorHeader.getColor();
    };
    $scope.blurry=function() {
        return changeColorHeader.getBlurry();
    }
    $timeout(function(){
        //$scope.reposo="initReposo";
        $scope.changePosition="change";
    },4000);
    $timeout(function(){
        $scope.reposo="initReposo";
        $scope.changePosition="";
    },4950);
}]);
