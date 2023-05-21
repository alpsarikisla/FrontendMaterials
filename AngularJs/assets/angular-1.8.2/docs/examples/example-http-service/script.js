(function(angular) {
  'use strict';
angular.module('httpExample', [])
  .config(['$sceDelegateProvider', function($sceDelegateProvider) {
    // We must add the JSONP endpoint that we are using to the trusted list to show that we trust it
    $sceDelegateProvider.trustedResourceUrlList([
      'self',
      'https://angularjs.org/**'
    ]);
  }])
  .controller('FetchController', ['$scope', '$http', '$templateCache',
    function($scope, $http, $templateCache) {
      $scope.method = 'GET';
      $scope.url = 'http-hello.html';

      $scope.fetch = function() {
        $scope.code = null;
        $scope.response = null;

        $http({method: $scope.method, url: $scope.url, cache: $templateCache}).
          then(function(response) {
            $scope.status = response.status;
            $scope.data = response.data;
          }, function(response) {
            $scope.data = response.data || 'Request failed';
            $scope.status = response.status;
        });
      };

      $scope.updateModel = function(method, url) {
        $scope.method = method;
        $scope.url = url;
      };
    }]);
})(window.angular);