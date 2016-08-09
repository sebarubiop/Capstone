'use strict';

angular.module('exampleApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('bform', {
        url: '/bform/:id',
        templateUrl: 'app/bform/bform.html',
        controller: 'BformCtrl'
      });
  });
