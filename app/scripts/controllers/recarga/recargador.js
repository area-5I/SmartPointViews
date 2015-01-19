'use strict';

/**
 * @ngdoc function
 * @name smartPointViewsApp.controller:RecargaRecargadorCtrl
 * @description
 * # RecargaRecargadorCtrl
 * Controller of the smartPointViewsApp
 */
angular.module('smartPointViewsApp')
  .controller('RecargaRecargadorCtrl', function ($scope,$stateParams) {

      $scope.empresaId = $stateParams.empresaId;
      $scope.modalShown = false;
      $scope.toggleModal = function() {
          $scope.modalShown = !$scope.modalShown;
      };
  });
