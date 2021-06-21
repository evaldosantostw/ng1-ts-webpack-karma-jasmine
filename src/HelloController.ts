import * as angular from 'angular'

export default angular.module('app2', [])
.controller('HelloController', ['$scope', function HelloControllerController($scope) {
  $scope.greeting = 'Hola!';
}]);
