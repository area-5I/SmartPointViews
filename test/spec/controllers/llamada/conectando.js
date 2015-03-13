'use strict';

describe('Controller: LlamadaConectandoCtrl', function () {

  // load the controller's module
  beforeEach(module('smartPointViewsApp'));

  var LlamadaConectandoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LlamadaConectandoCtrl = $controller('LlamadaConectandoCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
  });
});
