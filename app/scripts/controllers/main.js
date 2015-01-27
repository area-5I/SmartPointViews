'use strict';

/**
 * @ngdoc function
 * @name smartPointViewsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the smartPointViewsApp
 */
angular.module('smartPointViewsApp')
  .controller('MainCtrl', function ($scope,changeColorHeader,$log,$timeout) {
    $scope.reposo="init";
    changeColorHeader.setColor("inicioHeader");
    $scope.headerColor = function() {
        return changeColorHeader.getColor();
    };
    $timeout(function(){
        //$scope.reposo="initReposo";
        $scope.changePosition="change";
    },4000);
    $timeout(function(){
        $scope.reposo="initReposo";
        $scope.changePosition="";
    },4950);
});
