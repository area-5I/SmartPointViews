'use strict';

/**
 * @ngdoc function
 * @name smartPointViewsApp.controller:LlamadaLlamandoCtrl
 * @description
 * # LlamadaLlamandoCtrl
 * Controller of the smartPointViewsApp
 */
angular.module('smartPointViewsApp')
  .controller('LlamadaLlamandoCtrl', function ($scope,$stateParams,$log,$interval,$timeout) {
    $scope.tiempo=20;
    var alto;
    $scope.numero = $stateParams.numero;
    $log.debug($stateParams);
    $scope.contar = function(){
        if ( angular.isDefined(alto) ) return;

        alto = $interval(function(){
            if($scope.tiempo>0) {
                $scope.tiempo=$scope.tiempo -1;
                if($scope.tiempo<6) {
                    $scope.tiempoAgotado="alerta";
                    $timeout(function(){
                        $scope.tiempoAgotado="";
                    },500);
                } 
            } else {
                $scope.altoContar();
            }
        },1000);
    };

    $scope.altoContar = function(){
        if (angular.isDefined(alto)) {
            $interval.cancel(alto);
            alto = undefined;
        }
    };

    $scope.$on('$destroy', function() {
        $scope.altoContar();
    });

    $log.debug($scope.numero);
    $log.debug($scope.contador);
    $scope.contar();
});
