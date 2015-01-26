'use strict';

/**
 * @ngdoc function
 * @name smartPointViewsApp.controller:LlamadaNotasCtrl
 * @description
 * # LlamadaNotasCtrl
 * Controller of the smartPointViewsApp
 */
angular.module('smartPointViewsApp')
  .controller('LlamadaNotasCtrl', function ($scope) {
      $scope.modalShown=false;
      $scope.imprimirTexto=function() {
          $scope.modalShown=!$scope.modalShown;
      };
      $scope.miTexto = "";
});
