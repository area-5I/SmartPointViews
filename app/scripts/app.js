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
    'ngAnimate',
    'ui.router'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .state('about', {
        url:'/about',
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .state('llamadas', {
        url:'/llamadas',
        templateUrl: 'views/llamadas.html',
        controller: 'LlamadasCtrl'
      })
      .state('recarga', {
        url:'/recarga',
        templateUrl: 'views/recarga.html',
        controller: 'RecargaCtrl'
      })
      .state('emergencia', {
        url:'/emergencia',
        templateUrl: 'views/emergencia.html',
        controller: 'EmergenciaCtrl'
      })
      .state('emergencia.llamando', {
        url:'/llamando/:tipoEmergencia',
        templateUrl: 'views/emergencia/llamando.html',
        controller: 'EmergenciaLlamandoCtrl'
      })
      .state('ayuda', {
        url:'/ayuda',
        templateUrl: 'views/ayuda.html',
        controller: 'AyudaCtrl'
      })
      .state('ayuda.buscar', {
          url:'/bucar/:servicio',
          templateUrl: 'views/ayuda/buscar.html',
          controller: 'AyudaBuscarCtrl'
      })
      .state('recarga.recargador', {
        url:'/:empresaId',
        templateUrl: 'views/recarga/recargador.html',
        controller: 'RecargaRecargadorCtrl'
      })
      .state('llamando', {
        url:'/llamada/llamando/:numero',
        templateUrl: 'views/llamada/llamando.html',
        controller: 'LlamadaLlamandoCtrl'
      })
      .state('llamando.notas', {
        url:'/notas',
        templateUrl: 'views/llamada/notas.html',
        controller: 'LlamadaNotasCtrl'
      })
      .state('llamando.juegos', {
        url:'/juegos',
        templateUrl: 'views/llamada/juegos.html'
      })
      .state('llamando.ubicacion', {
        url:'/ubicacion',
        templateUrl: 'views/llamada/ubicacion.html',
        controller: 'LlamadaUbicacionCtrl'
      })
      .state('llamando.hextris', {
        url:'/hextris',
        templateUrl: 'views/llamada/hextris.html'
      });
  })
    .service('changeColorHeader', function ($log) {
        var property = "inicioHeader";

        return {
            getColor:function () {
                return property;
            },
            setColor:function (value) {
                property = value;
                $log.debug(property);
            }
        };
    })
    .directive('myCurrentTime', function($timeout, dateFilter) {
        return function(scope, element, attrs) {
            var format, timeoutId;
            function updateTime() {
                element.text(dateFilter(new Date(),"HH:mm:ss '|' MM/dd/yy"));
            }
            function updateLater() {
                timeoutId = $timeout(function() {
                    updateTime();
                    updateLater();
                }, 1000);
            }
            element.bind('$destroy', function() {
            $timeout.cancel(timeoutId);
        });
        updateLater();
    }

    })
    .directive('modalDialog', function() {
        return {
            restrict: 'E',
            scope: {
                show: '='
            },
            replace: true,
            transclude: true,
            link: function(scope, element, attrs) {
                scope.tipemodal = attrs.tipemodal;
                scope.dialogStyle = {};
                if (attrs.width)
                    scope.dialogStyle.width = attrs.width;    
                if (attrs.height)
                    scope.dialogStyle.height = attrs.height;
                    scope.hideModal = function() {
                        scope.show = false;
                    };
                },
            template: "<div class='ng-modal' ng-show='show'><div class='ng-modal-overlay' ng-click='hideModal()'></div><div class='ng-modal-dialog {{tipemodal}}' ng-style='dialogStyle'><div class='ng-modal-close' ng-click='hideModal()'>X</div><div class='ng-modal-dialog-content' ng-transclude></div></div></div>"
            };
    });
