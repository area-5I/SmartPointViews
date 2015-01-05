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

      $scope.miTexto = "";
      $scope.uppercase = false;
      $scope.shiftActivado = false;

      $scope.teclar = function(t1, t2) {
        if($scope.shiftActivado) {
            if(typeof t2 !== "undefined") {
                $scope.miTexto += t2;
            } else {
                $scope.miTexto += t1.toUpperCase();
            }
            $scope.shift();
        } else {
            $scope.miTexto=$scope.miTexto+t1;
        }
      };

      $scope.shift = function() {
        $scope.shiftActivado = !$scope.shiftActivado;
        if($scope.shiftActivado && $scope.uppercase){
            $scope.casse = "";
        } else if($scope.shiftActivado && !$scope.uppercase) {
            $scope.casse = "uppercase";
        }
        else if(!$scope.shiftActivado && $scope.uppercase){
            $scope.casse = "uppercase";
        } else {
            $scope.casse = "";
        }
      };

      $scope.capslock = function() {
        $scope.uppercase = !$scope.uppercase;
        $scope.casse = $scope.uppercase ? "uppercase" : "";
      };

      $scope.borrar = function(){
        $scope.miTexto=$scope.miTexto.substr(0, $scope.miTexto.length - 1) 
      };
});
