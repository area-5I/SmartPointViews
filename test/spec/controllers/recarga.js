'use strict';

describe('Controller: RecargaCtrl', function () {

  // load the controller's module
  beforeEach(module('smartPointViewsApp'));

  var RecargaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RecargaCtrl = $controller('RecargaCtrl', {
      $scope: scope
    });
  }));
});
