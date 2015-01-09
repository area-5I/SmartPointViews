'use strict';

/**
 * @ngdoc function
 * @name smartPointViewsApp.controller:EmergenciaLlamandoCtrl
 * @description
 * # EmergenciaLlamandoCtrl
 * Controller of the smartPointViewsApp
 */
angular.module('smartPointViewsApp')
  .controller('EmergenciaLlamandoCtrl', function ($scope,$stateParams) {
      $scope.tipoEmergencia=$stateParams.tipoEmergencia;
  });
