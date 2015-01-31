'use strict';

describe('Controller: AyudaCtrl', function () {

  // load the controller's module
  beforeEach(module('smartPointViewsApp'));

  var AyudaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AyudaCtrl = $controller('AyudaCtrl', {
      $scope: scope
    });
  }));
});
