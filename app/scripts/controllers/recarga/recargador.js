'use strict';

/**
 * @ngdoc function
 * @name smartPointViewsApp.controller:RecargaRecargadorCtrl
 * @description
 * # RecargaRecargadorCtrl
 * Controller of the smartPointViewsApp
 */
angular.module('smartPointViewsApp')
  .controller('RecargaRecargadorCtrl', function ($scope,$routeParams) {

      $scope.empresaId = $routeParams.empresaId;
  });