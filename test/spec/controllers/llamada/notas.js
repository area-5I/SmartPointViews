'use strict';

describe('Controller: LlamadaNotasCtrl', function () {

  // load the controller's module
  beforeEach(module('smartPointViewsApp'));

  var LlamadaNotasCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LlamadaNotasCtrl = $controller('LlamadaNotasCtrl', {
      $scope: scope
    });
  }));
});
