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
    it('should dial a key', function () {
        scope.marcar('1');
        expect(scope.numero.length).toBe(1);
    });
    it('should delete a number', function () {
        scope.marcar('2');
        scope.borrar();
        expect(scope.numero.length).toBe(0);
    });
    it('should have no coin to start', function () {
        expect(scope.moneda).toBe(0);
    });
    it('should add a coin', function () {
        scope.ingresoMoneda(1);
        expect(scope.moneda).toBe(1);
    });
});
