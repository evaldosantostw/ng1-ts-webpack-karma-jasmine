import * as angular from 'angular';
import 'angular-mocks';
import PasswordController from '../src/PasswordController';


describe('example  heytest', function() {
  let $controller: any;
  let $rootScope: any;

  beforeEach(() => {
    angular.mock.module('app')
  });

  beforeEach(() => {
    angular.mock.inject(function(_$controller_, _$rootScope_, _$compile_){
      // The injector unwraps the underscores (_) from around the parameter names when matching
      $controller = _$controller_;
      $rootScope = _$rootScope_;
    })
  });

  describe('$scope.grade', function() {
    var $scope, controller;

    beforeEach(function() {
      $scope = $rootScope.$new();
      // or
      // $scope = {}
      controller = $controller('PasswordController', { $scope: $scope });
    });

    it('sets the strength to "strong" if the password length is >8 chars', function() {
      $scope.password = 'longerthaneightchars';
      $scope.grade();
      expect($scope.strength).toEqual('strong');
    });

    it('sets the strength to "weak" if the password length <3 chars', function() {
      $scope.password = 'a';
      $scope.grade();
      expect($scope.strength).toEqual('weak');
    });
  });
});