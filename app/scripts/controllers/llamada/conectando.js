'use strict';

/**
 * @ngdoc function
 * @name smartPointViewsApp.controller:LlamadaConectandoCtrl
 * @description
 * # LlamadaConectandoCtrl
 * Controller of the smartPointViewsApp
 */
angular.module('smartPointViewsApp')
  .controller('LlamadaConectandoCtrl',['$scope','$stateParams','$timeout','$location',function ($scope,$stateParams, $timeout, $location) {
      $scope.numero = $stateParams.numero;
      $scope.colgar = function() {
        //Aqui para terminar la llamada.
        $location.path('/llamadas');
      };
      $timeout(function() {
        $location.path('/llamada/llamando/'+$scope.numero);
      }, 5000);
  }]);
