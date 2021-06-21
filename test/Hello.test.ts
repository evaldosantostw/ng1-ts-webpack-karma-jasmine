import * as angular from 'angular';
import 'angular-mocks';

describe('HelloController', function() {
  let $controller: any;
  let $rootScope: any;
  let template: any;
  let $compile: any;

  beforeEach(() => {
    angular.mock.module('app2')
  });

  beforeEach(() => {
    angular.mock.module('templates')
  })

  beforeEach(() => {
    angular.mock.inject(function($templateCache,_$compile_,_$rootScope_, _$controller_){
      // // The injector unwraps the underscores (_) from around the parameter names when matching
      $controller = _$controller_;
      $rootScope = _$rootScope_;
      
      template = $templateCache.get('src/HelloWorld.template.html');
      $compile = _$compile_;
    })
  });

  describe('$scope.greeting', function() {
    var $scope, controller, element;

    beforeEach(function() {
      $scope = $rootScope.$new();
      // or
      // $scope = {}

      element = $compile(template)($scope);
      controller = $controller('HelloController', { $scope: $scope, $element: element });
    });

    it('has an empty message', function() {
      
      expect($scope.greeting).toEqual('Hola!');

      $scope.$digest();

      // expect($scope.message).toEqual('HelloWorld');

      expect(element.html().trim()).toEqual('hey Hello Hola!')
    });
  });
});