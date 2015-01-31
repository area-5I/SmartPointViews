'use strict';

describe('Controller: LlamadasCtrl', function () {

  // load the controller's module
  beforeEach(module('smartPointViewsApp'));

  var LlamadasCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LlamadasCtrl = $controller('LlamadasCtrl', {
      $scope: scope
    });
  }));
});
