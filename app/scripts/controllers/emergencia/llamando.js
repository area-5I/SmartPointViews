'use strict';

/**
 * @ngdoc function
 * @name smartPointViewsApp.controller:EmergenciaLlamandoCtrl
 * @description
 * # EmergenciaLlamandoCtrl
 * Controller of the smartPointViewsApp
 */
angular.module('smartPointViewsApp')
  .controller('EmergenciaLlamandoCtrl', function ($scope,$stateParams) {
      $scope.seleccionar=function(index){
          $scope.seleccion=index;
      }
      $scope.seleccionado=function(){
          return $scope.seleccion; 
        };
      $scope.tipoEmergencia=$stateParams.tipoEmergencia;
      $scope.emergencias={
        "hospital":[
            {nombre:"LOS OLIVOS",
                telefono:"4790932",
                direccion:"Av.America #456"},
            {nombre:"UNIVALLE",
                telefono:"4898893",
                direccion:"Av. Panamericana #654"},
            {nombre:"SAN PEDRO",
                telefono:"4565454",
                direccion:"Av. Tumusla #434"}],
        "bomberos":[
            {nombre:"SAR FAB",
                telefono:"4654343",
                direccion:"Av. Recoleta #344"},
            {nombre:"PRETORIANOS",
                telefono:"489892",
                direccion:"Av. Circunvalacion #233"},
            {nombre:"PEST CONTROL",
                telefono:"4356765",
                direccion:"Av. America #188"}],
        "policia":[
            {nombre:"FELCC",
                telefono:"4655655",
                direccion:"Av. Esteban Arce"},
            {nombre:"FELCV",
                telefono:"4777777",
                direccion:"Av. Independencia"},
            {nombre:"HOMICIDIOS",
                telefono:"4565555",
                direccion:"Av. Dominical"}]
      }
      $scope.showDetail=function() {
        
      }
  });
