"use strict";angular.module("smartPointViewsApp",["ngAnimate","ui.router"]).config(["$stateProvider","$urlRouterProvider",function(a,b){b.otherwise("/home"),a.state("home",{url:"/home",templateUrl:"views/main.html",controller:"MainCtrl"}).state("about",{url:"/about",templateUrl:"views/about.html",controller:"AboutCtrl"}).state("llamadas",{url:"/llamadas",templateUrl:"views/llamadas.html",controller:"LlamadasCtrl"}).state("recarga",{url:"/recarga",templateUrl:"views/recarga.html",controller:"RecargaCtrl"}).state("emergencia",{url:"/emergencia",templateUrl:"views/emergencia.html",controller:"EmergenciaCtrl"}).state("emergencia.llamando",{url:"/llamando/:tipoEmergencia",templateUrl:"views/emergencia/llamando.html",controller:"EmergenciaLlamandoCtrl"}).state("ayuda",{url:"/ayuda",templateUrl:"views/ayuda.html",controller:"AyudaCtrl"}).state("ayuda.buscar",{url:"/bucar/:servicio",templateUrl:"views/ayuda/buscar.html",controller:"AyudaBuscarCtrl"}).state("recarga.recargador",{url:"/:empresaId",templateUrl:"views/recarga/recargador.html",controller:"RecargaRecargadorCtrl"}).state("llamando",{url:"/llamada/llamando/:numero",templateUrl:"views/llamada/llamando.html",controller:"LlamadaLlamandoCtrl"}).state("llamando.notas",{url:"/notas",templateUrl:"views/llamada/notas.html",controller:"LlamadaNotasCtrl"}).state("llamando.juegos",{url:"/juegos",templateUrl:"views/llamada/juegos.html"}).state("llamando.ubicacion",{url:"/ubicacion",templateUrl:"views/llamada/ubicacion.html",controller:"LlamadaUbicacionCtrl"}).state("llamando.hextris",{url:"/hextris",templateUrl:"views/llamada/hextris.html"})}]).service("changeColorHeader",["$log",function(){var a="inicioHeader",b="";return{getColor:function(){return a},setColor:function(c){a=c,b="inicioHeader"==c?"":"withBlurry"},getBlurry:function(){return b}}}]).directive("myCurrentTime",["$timeout","dateFilter",function(a,b){return function(c,d){function e(){d.text(b(new Date,"HH:mm:ss"))}function f(){g=a(function(){e(),f()},1e3)}var g;d.bind("$destroy",function(){a.cancel(g)}),f()}}]).directive("modalDialog",function(){return{restrict:"E",scope:{show:"="},replace:!0,transclude:!0,link:function(a,b,c){a.tipemodal=c.tipemodal,a.dialogStyle={},c.width&&(a.dialogStyle.width=c.width),c.height&&(a.dialogStyle.height=c.height),a.hideModal=function(){a.show=!1}},template:"<div class='ng-modal' ng-show='show'><div class='ng-modal-overlay' ng-click='hideModal()'></div><div class='ng-modal-dialog {{tipemodal}}' ng-style='dialogStyle'><div class='ng-modal-dialog-content' ng-transclude></div></div></div>"}}).directive("keyboard",function(){return{restrict:"E",scope:{inputText:"=inputText",showkeyboardPanel:"=showKeyboardPanel"},link:function(a,b,c){a.showkeyboard=!0,a.changeKeyboard=function(){a.showkeyboard=!a.showkeyboard},a.uppercase=!1,a.shiftActivado=!1,a.teclar=function(b){a.shiftActivado?(a.inputText+=b.toUpperCase(),a.shift()):a.inputText=a.inputText+b},a.shift=function(){a.shiftActivado=!a.shiftActivado,a.casse=a.shiftActivado&&$scope.uppercase?"":a.shiftActivado&&!a.uppercase?"uppercase":!a.shiftActivado&&a.uppercase?"uppercase":""},a.capslock=function(){a.uppercase=!a.uppercase,a.casse=a.uppercase?"uppercase":""},a.borrar=function(){a.inputText=a.inputText.substr(0,a.inputText.length-1)},a.executeExec=function(){a.execute.exec()},a.execute="find"==c.typeExecute?{name:"buscar",exec:function(){a.showkeyboardPanel=!1}}:{name:"Intro",exec:function(){a.teclar("\n")}}},templateUrl:"views/templates/keyboard.html"}}),angular.module("smartPointViewsApp").controller("MainCtrl",["$scope","changeColorHeader","$log","$timeout",function(a,b,c,d){a.reposo="init",b.setColor("inicioHeader"),a.headerColor=function(){return b.getColor()},a.blurry=function(){return b.getBlurry()},d(function(){a.changePosition="change"},4e3),d(function(){a.reposo="initReposo",a.changePosition=""},4950)}]),angular.module("smartPointViewsApp").controller("AboutCtrl",["$scope",function(){}]),angular.module("smartPointViewsApp").controller("LlamadasCtrl",["$scope","$location","changeColorHeader","$timeout",function(a,b,c,d){c.setColor("llamadasHeader"),a.numero="",a.moneda=0,a.marcar=function(b){a.numero=a.numero.concat(b)},a.borrar=function(){a.numero=a.numero.slice(0,a.numero.length-1)},a.llamarNumero=function(){b.path("/llamada/llamando/"+a.numero)},a.ingresoMoneda=function(b){a.moneda+=b,a.ingresandomoneda="active",d(function(){a.ingresandomoneda=""},500)},d(function(){a.ingresoMoneda(1)},4e3),d(function(){a.ingresoMoneda(2)},8e3)}]),angular.module("smartPointViewsApp").controller("RecargaCtrl",["$scope","changeColorHeader",function(a,b){b.setColor("recargasHeader")}]),angular.module("smartPointViewsApp").controller("EmergenciaCtrl",["$scope","changeColorHeader",function(a,b){b.setColor("emergenciaHeader")}]),angular.module("smartPointViewsApp").controller("AyudaCtrl",["$scope","changeColorHeader",function(a,b){b.setColor("ayudaHeader")}]),angular.module("smartPointViewsApp").controller("RecargaRecargadorCtrl",["$scope","$stateParams","$timeout",function(a,b,c){a.empresaId=b.empresaId,a.successShow=!1,a.loadShow=!1,a.nocreditShow=!1,a.moneda=0,a.numero="",a.marcar=function(b){a.numero=a.numero.concat(b)},a.borrar=function(){a.numero=a.numero.slice(0,a.numero.length-1)},a.ingresoMoneda=function(b){a.moneda+=b,a.ingresandomoneda="active",c(function(){a.ingresandomoneda=""},500)},a.recargar=function(){a.successShow=!0,c(function(){a.successShow=!1,a.loadShow=!0},2e3),c(function(){a.loadShow=!1,a.nocreditShow=!0},4e3),c(function(){a.nocreditShow=!1},6e3)},c(function(){a.ingresoMoneda(1)},4e3),c(function(){a.ingresoMoneda(2)},8e3)}]),angular.module("smartPointViewsApp").controller("LlamadaLlamandoCtrl",["$scope","$stateParams","$log","$interval","$timeout",function(a,b,c,d,e){a.tiempo=20;var f;a.numero=b.numero,c.debug(b),a.contar=function(){angular.isDefined(f)||(f=d(function(){a.tiempo>0?(a.tiempo=a.tiempo-1,a.tiempo<6&&(a.tiempoAgotado="alerta",e(function(){a.tiempoAgotado=""},500))):a.altoContar()},1e3))},a.altoContar=function(){angular.isDefined(f)&&(d.cancel(f),f=void 0)},a.$on("$destroy",function(){a.altoContar()}),c.debug(a.numero),c.debug(a.contador),a.contar()}]),angular.module("smartPointViewsApp").controller("LlamadaNotasCtrl",["$scope",function(a){a.modalShown=!1,a.imprimirTexto=function(){a.modalShown=!a.modalShown},a.miTexto="",a.showkeyboardPanel=!0,a.hideKeyboard=function(){a.showkeyboardPanel=!a.showkeyboardPanel}}]),angular.module("smartPointViewsApp").controller("EmergenciaLlamandoCtrl",["$location","$stateParams","$location",function(a,b,c){a.seleccionar=function(b){a.seleccion=b},a.seleccionado=function(b){return a.seleccion==b},a.tipoEmergencia=b.tipoEmergencia,a.emergencias={hospital:[{nombre:"LOS OLIVOS",telefono:"4790932",direccion:"Av.America #456"},{nombre:"UNIVALLE",telefono:"4898893",direccion:"Av. Panamericana #654"},{nombre:"SAN PEDRO",telefono:"4565454",direccion:"Av. Tumusla #434"}],bomberos:[{nombre:"SAR FAB",telefono:"4654343",direccion:"Av. Recoleta #344"},{nombre:"PRETORIANOS",telefono:"489892",direccion:"Av. Circunvalacion #233"},{nombre:"PEST CONTROL",telefono:"4356765",direccion:"Av. America #188"}],policia:[{nombre:"FELCC",telefono:"4655655",direccion:"Av. Esteban Arce"},{nombre:"FELCV",telefono:"4777777",direccion:"Av. Independencia"},{nombre:"HOMICIDIOS",telefono:"4565555",direccion:"Av. Dominical"}]},a.llamar=function(b){c.path("/llamada/llamando/"+a.emergencias[a.tipoEmergencia][b].telefono)},a.llamandoClick=!1,a.emergencia=function(){a.llamandoClick=!0},a.colgar=function(){a.llamandoClick=!1}}]),angular.module("smartPointViewsApp").controller("AyudaBuscarCtrl",["$scope","$stateParams",function(a,b){a.servicio=b.servicio,a.showKeyboardpanel=!1,a.statesShow=!1,a.serviceShow=!1,a.search={name:""},"codigos"==a.servicio?a.servicios=[{name:"Andorra",code:"ad",number:77},{name:"United Arab Emirates",code:"ae",number:3333},{name:"Afghanistan",code:"af",number:333},{name:"Antigua And Barbuda",code:"ag",number:777},{name:"Anguilla",code:"ai",number:333},{name:"Albania",code:"al",number:444},{name:"Armenia",code:"am",number:222},{name:"Netherlands Antilles",code:"an",number:444},{name:"Angola",code:"ao",number:333},{name:"Argentina",code:"ar",number:333},{name:"American Samoa",code:"as",number:222},{name:"Austria",code:"at",number:555},{name:"Australia",code:"au",number:222},{name:"Aruba",code:"aw",number:333},{name:"Aaland",code:"ax",number:777},{name:"Azerbaijan",code:"az",number:333},{name:"Bosnia And Herzegovina",code:"ba",number:333},{name:"Basque",code:"basque",number:222},{name:"Barbados",code:"bb",number:222},{name:"Bangladesh",code:"bd",number:333},{name:"Belgium",code:"be",number:222},{name:"Burkina Faso",code:"bf",number:222},{name:"Bulgaria",code:"bg",number:777},{name:"Bahrain",code:"bh",number:111},{name:"Burundi",code:"bi",number:666},{name:"Benin",code:"bj",number:222},{name:"Bermuda",code:"bm",number:111},{name:"Brunei",code:"bn",number:555},{name:"Bolivia",code:"bo",number:888},{name:"Brazil",code:"br",number:222},{name:"Bahamas",code:"bs",number:111},{name:"Chile",code:"cl",number:222},{name:"Cameroon",code:"cm",number:888},{name:"China",code:"cn",number:222},{name:"Colombia",code:"co",number:222}]:"restaurantes"==b.servicio?(a.icon="restaurant",a.servicios=[{name:"Dumbo",number:4702020,direccion:"Av. Ayacucho #440"},{name:"Globos",number:4702020,direccion:"Av. Ayacucho #440"},{name:"Elis",number:4702020,direccion:"Av. Ayacucho #440"},{name:"Doña jacinta",number:4702020,direccion:"Av. Ayacucho #440"},{name:"Don Pepe",number:4702020,direccion:"Av. Ayacucho #440"},{name:"Chaqueno",number:4702020,direccion:"Av. Ayacucho #440"},{name:"El manantial",number:4702020,direccion:"Av. Ayacucho #440"},{name:"Aroma",number:4702020,direccion:"Av. Ayacucho #440"},{name:"El Gordo",number:4702020,direccion:"Av. Ayacucho #440"},{name:"King Don",number:4702020,direccion:"Av. Ayacucho #440"},{name:"CasaBlanca",number:4702020,direccion:"Av. Ayacucho #440"},{name:"Pollos kikiriki",number:4702020,direccion:"Av. Ayacucho #440"},{name:"Pollos Kokoroko",number:4702020,direccion:"Av. Ayacucho #440"},{name:"El Rey",number:4702020,direccion:"Av. Ayacucho #440"},{name:"Wistupiku",number:4702020,direccion:"Av. Ayacucho #440"}]):"mecanicos"==b.servicio?(a.icon="mecanico",a.servicios=[{name:"Don Luis",number:79732456,direccion:"Av. Circuvalacion #567"},{name:"El Choco",number:79732456,direccion:"Av. Circuvalacion #567"},{name:"Hnos Vargas",number:79732456,direccion:"Av. Circuvalacion #567"},{name:"Don German",number:79732456,direccion:"Av. Circuvalacion #567"},{name:"El Chascas",number:79732456,direccion:"Av. Circuvalacion #567"},{name:"Don Fernando",number:79732456,direccion:"Av. Circuvalacion #567"},{name:"Lupe",number:79732456,direccion:"Av. Circuvalacion #567"},{name:"El Gringo",number:79732456,direccion:"Av. Circuvalacion #567"}]):"taxis"==b.servicio&&(a.icon="taxi",a.servicios=[{name:"Ciudad Jardin",number:4787989,direccion:"Av. Panamericana #122"},{name:"San Pedro",number:4787989,direccion:"Av. Panamericana #122"},{name:"Bolivar",number:4787989,direccion:"Av. Panamericana #122"},{name:"Amancayas",number:4787989,direccion:"Av. Panamericana #122"},{name:"Kantuta",number:4787989,direccion:"Av. Panamericana #122"},{name:"Express",number:4787989,direccion:"Av. Panamericana #122"},{name:"Teleferico",number:4787989,direccion:"Av. Panamericana #122"},{name:"kochalita",number:4787989,direccion:"Av. Panamericana #122"}]),a.hideKeyboard=function(){a.showKeyboardpanel=!1},a.togglekeyboard=function(){a.showKeyboardpanel=!a.showKeyboardpanel},a.deleteX=function(){a.search.name="",a.deleteShow="false"},a.selectItem=function(b){a.selectedItem=a.servicios[b],"codigos"==a.servicio?a.statesShow=!0:a.serviceShow=!0},a.itemSelected=-1,a.selectService=function(b){a.itemSelected=a.itemSelected==b?-1:b},a.animateService=function(b){return b==a.itemSelected?"information":""}}]),angular.module("smartPointViewsApp").controller("LlamadaUbicacionCtrl",["$scope","$timeout",function(a,b){a.animacion="animate",b(function(){a.animacion=""},3e3)}]);