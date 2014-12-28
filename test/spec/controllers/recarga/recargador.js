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

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
