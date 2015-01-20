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
      $scope.moneda=0;
      $scope.numero="";
      $scope.marcar=function(teclaPulsada) {
        $scope.numero=$scope.numero.concat(teclaPulsada);
      }
      $scope.borrar=function() {
        $scope.numero=$scope.numero.slice(0,$scope.numero.length-1);
      }
  });
