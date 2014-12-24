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
        controller: 'LlamadasCtrl'
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
      .otherwise({
        redirectTo: '/'
      });
  });
