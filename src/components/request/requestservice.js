'use strict';

angular.module('hw12')
  .factory('requestService', function ($http) {
    return {
      sendRequest: function (url) {
        return $http.get(url);
      }
    };
  });
