'use strict';

angular.module('exampleApp')
  .factory('ExampleService', function($resource) {
    return $resource('/api/things/:id',{
        id: '@id'
      },{
        update: {
          method:'PUT'
        },
        paged: {
          method:'GET'
        }
      });
});
