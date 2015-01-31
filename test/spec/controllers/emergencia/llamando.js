'use strict';

describe('Controller: EmergenciaLlamandoCtrl', function () {

  // load the controller's module
  beforeEach(module('smartPointViewsApp'));

  var EmergenciaLlamandoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EmergenciaLlamandoCtrl = $controller('EmergenciaLlamandoCtrl', {
      $scope: scope
    });
  }));
});
