'use strict';

describe('Controller: LlamadaLlamandoCtrl', function () {

  // load the controller's module
  beforeEach(module('smartPointViewsApp'));

  var LlamadaLlamandoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LlamadaLlamandoCtrl = $controller('LlamadaLlamandoCtrl', {
      $scope: scope
    });
  }));
});
