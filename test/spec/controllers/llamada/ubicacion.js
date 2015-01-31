'use strict';

describe('Controller: LlamadaUbicacionCtrl', function () {

  // load the controller's module
  beforeEach(module('smartPointViewsApp'));

  var LlamadaUbicacionCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LlamadaUbicacionCtrl = $controller('LlamadaUbicacionCtrl', {
      $scope: scope
    });
  }));
});
