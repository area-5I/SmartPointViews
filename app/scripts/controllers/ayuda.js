'use strict';

/**
 * @ngdoc function
 * @name smartPointViewsApp.controller:AyudaCtrl
 * @description
 * # AyudaCtrl
 * Controller of the smartPointViewsApp
 */
angular.module('smartPointViewsApp')
  .controller('AyudaCtrl', function ($scope,changeColorHeader) {
    changeColorHeader.setColor("ayudaHeader");
  });
