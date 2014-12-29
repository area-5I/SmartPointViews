'use strict';

/**
 * @ngdoc overview
 * @name smartPointViewsApp
 * @description
 * # smartPointViewsApp
 *
 * Main module of the application.
 */
angular
  .module('smartPointViewsApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/llamadas', {
        templateUrl: 'views/llamadas.html',
        controller: 'LlamadasCtrl'/*,
        resolve: {
            delay: function($q, $timeout) {
                var delay = $q.defer();
                $timeout(delay.resolve, 1000);
                return delay.promise;
            }
        }//Retardo por si se necesita animaciones cuando se pasa de vistas */
      })
      .when('/recarga', {
        templateUrl: 'views/recarga.html',
        controller: 'RecargaCtrl'
      })
      .when('/emergencia', {
        templateUrl: 'views/emergencia.html',
        controller: 'EmergenciaCtrl'
      })
      .when('/ayuda', {
        templateUrl: 'views/ayuda.html',
        controller: 'AyudaCtrl'
      })
      .when('/recarga/recargador/:empresaId', {
        templateUrl: 'views/recarga/recargador.html',
        controller: 'RecargaRecargadorCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
