'use strict';

/**
 * @ngdoc function
 * @name smartPointViewsApp.controller:LlamadaLlamandoCtrl
 * @description
 * # LlamadaLlamandoCtrl
 * Controller of the smartPointViewsApp
 */
angular.module('smartPointViewsApp')
  .controller('LlamadaLlamandoCtrl', function ($scope,$routeParams,$log) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.numero = $routeParams.numero;
    $log.debug($scope.numero);
  });
