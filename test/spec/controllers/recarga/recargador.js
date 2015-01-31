'use strict';

describe('Controller: RecargaRecargadorCtrl', function () {

  // load the controller's module
  beforeEach(module('smartPointViewsApp'));

  var RecargaRecargadorCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RecargaRecargadorCtrl = $controller('RecargaRecargadorCtrl', {
      $scope: scope
    });
  }));
});
