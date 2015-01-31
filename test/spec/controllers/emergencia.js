'use strict';

describe('Controller: EmergenciaCtrl', function () {

  // load the controller's module
  beforeEach(module('smartPointViewsApp'));

  var EmergenciaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EmergenciaCtrl = $controller('EmergenciaCtrl', {
      $scope: scope
    });
  }));
});
