'use strict';

/**
 * @ngdoc function
 * @name smartPointViewsApp.controller:LlamadaLlamandoCtrl
 * @description
 * # LlamadaLlamandoCtrl
 * Controller of the smartPointViewsApp
 */
angular.module('smartPointViewsApp')
  .controller('LlamadaLlamandoCtrl', function ($scope,$routeParams,$log,$interval) {
    $scope.tiempo=60;
    var alto;
    $scope.numero = $routeParams.numero;
    $scope.contar = function(){
        if ( angular.isDefined(alto) ) return;

        alto = $interval(function(){
            if($scope.tiempo>0) {
                $scope.tiempo=$scope.tiempo -1;
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
