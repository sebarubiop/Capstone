'use strict';

angular.module('exampleApp.auth', [
  'exampleApp.constants',
  'exampleApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
