'use strict';

/**
 * @ngdoc function
 * @name smartPointViewsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the smartPointViewsApp
 */
angular.module('smartPointViewsApp')
  .controller('MainCtrl', function ($scope,changeColorHeader,$log) {
    changeColorHeader.setColor("inicioHeader");
    $scope.headerColor = function() {
        return changeColorHeader.getColor();
    };
});
