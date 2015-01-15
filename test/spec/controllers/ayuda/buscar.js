'use strict';

describe('Controller: AyudaBuscarCtrl', function () {

  // load the controller's module
  beforeEach(module('smartPointViewsApp'));

  var AyudaBuscarCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AyudaBuscarCtrl = $controller('AyudaBuscarCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
