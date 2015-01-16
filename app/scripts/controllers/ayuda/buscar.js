'use strict';

/**
 * @ngdoc function
 * @name smartPointViewsApp.controller:AyudaBuscarCtrl
 * @description
 * # AyudaBuscarCtrl
 * Controller of the smartPointViewsApp
 */
angular.module('smartPointViewsApp')
  .controller('AyudaBuscarCtrl', function ($scope,$stateParams) {
    $scope.servicio=$stateParams.servicio;
    $scope.search={name:""};
    if($scope.servicio=="codigos") {
        $scope.servicios=[
        {name:"Andorra",code:"ad",number:777},
        {name:"United Arab Emirates",code:"ae",number:333},
        {name:"Afghanistan",code:"af",number:333},
        {name:"Antigua And Barbuda",code:"ag",number:777},
        {name:"Anguilla",code:"ai",number:333},
        {name:"Albania",code:"al",number:444},
        {name:"Armenia",code:"am",number:222},
        {name:"Netherlands Antilles",code:"an",number:444},
        {name:"Angola",code:"ao",number:333},
        {name:"Argentina",code:"ar",number:333},
        {name:"American Samoa",code:"as",number:222},
        {name:"Austria",code:"at",number:555},
        {name:"Australia",code:"au",number:222},
        {name:"Aruba",code:"aw",number:333},
        {name:"Aaland",code:"ax",number:777},
        {name:"Azerbaijan",code:"az",number:333},
        {name:"Bosnia And Herzegovina",code:"ba",number:333},
        {name:"Basque",code:"basque",number:222},
        {name:"Barbados",code:"bb",number:222},
        {name:"Bangladesh",code:"bd",number:333},
        {name:"Belgium",code:"be",number:222},
        {name:"Burkina Faso",code:"bf",number:222},
        {name:"Bulgaria",code:"bg",number:777},
        {name:"Bahrain",code:"bh",number:111},
        {name:"Burundi",code:"bi",number:666},
        {name:"Benin",code:"bj",number:222},
        {name:"Bermuda",code:"bm",number:111},
        {name:"Brunei",code:"bn",number:555},
        {name:"Bolivia",code:"bo",number:888},
        {name:"Brazil",code:"br",number:222},
        {name:"Bahamas",code:"bs",number:111},
        {name:"Chile",code:"cl",number:222},
        {name:"Cameroon",code:"cm",number:888},
        {name:"China",code:"cn",number:222},
        {name:"Colombia",code:"co",number:222}
        ];
    } else if($stateParams.servicio=='restaurantes') {
        $scope.servicios=[];
    } else if($stateParams.servicio=='mecanicos') {
        $scope.servicios=[];
    
    } else if($stateParams.servicio=='taxis') {
        $scope.servicios=[];
    }

      $scope.uppercase = false;
      $scope.shiftActivado = false;

      $scope.teclar = function(t1, t2) {
        if($scope.shiftActivado) {
            if(typeof t2 !== "undefined") {
                $scope.search.name += t2;
            } else {
                $scope.search.name += t1.toUpperCase();
            }
            $scope.shift();
        } else {
            $scope.search.name=$scope.search.name+t1;
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
        $scope.search.name=$scope.search.name.substr(0, $scope.search.name.length - 1) 
      };
  });
