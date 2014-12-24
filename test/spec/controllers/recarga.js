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

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
