'use strict';

/**
 * @ngdoc function
 * @name smartPointViewsApp.controller:LlamadasCtrl
 * @description
 * # LlamadasCtrl
 * Controller of the smartPointViewsApp
 */
angular.module('smartPointViewsApp')
  .controller('LlamadasCtrl', function ($scope) {
      $scope.numero="";
      $scope.marcar=function(teclaPulsada) {
        $scope.numero=$scope.numero.concat(teclaPulsada);
      }
      $scope.borrar=function() {
        $scope.numero=$scope.numero.slice(0,$scope.numero.length-1);
      }
  });