'use strict';

/**
 * @ngdoc function
 * @name smartPointViewsApp.controller:AyudaBuscarCtrl
 * @description
 * # AyudaBuscarCtrl
 * Controller of the smartPointViewsApp
 */
angular.module('smartPointViewsApp')
  .controller('AyudaBuscarCtrl', function ($scope,$stateParams) {
    $scope.servicio=$stateParams.servicio;
  });
