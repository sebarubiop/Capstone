(function(angular, undefined) {
'use strict';

angular.module('exampleApp.constants', [])

.constant('appConfig', {userRoles:['guest','user','admin']})

;
})(angular);