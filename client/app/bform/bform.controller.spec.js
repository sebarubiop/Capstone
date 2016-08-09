'use strict';

describe('Controller: BformCtrl', function () {

  // load the controller's module
  beforeEach(module('exampleApp'));

  var BformCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BformCtrl = $controller('BformCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
