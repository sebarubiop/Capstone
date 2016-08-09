'use strict';

angular.module('exampleApp')
  .controller('BformCtrl', function ($scope, $stateParams, ExampleService) {
    ExampleService.get({id:$stateParams.id}, function(bform){
      $scope.bform = bform;
    });

    $scope.goBack = function(){
    window.history.back();
    };

    $scope.editReason = function(reas){
      $scope.editingReason = reas;
    };

    $scope.undoReasonEdit = function(){
      $scope.editingReason = undefined;
    }

  });
