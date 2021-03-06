/*
	Copyright (c) 2016 eBay Software Foundation.
	Licensed under the Apache License, Version 2.0 (the "License");
	you may not use this file except in compliance with the License.
	You may obtain a copy of the License at

	    http://www.apache.org/licenses/LICENSE-2.0

	Unless required by applicable law or agreed to in writing, software
	distributed under the License is distributed on an "AS IS" BASIS,
	WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	See the License for the specific language governing permissions and
	limitations under the License.
 */
define(['angular', 'angularMocks', 'js/controllers/health-ctrl'],
  function(angular, mocks, HealthCtrl) {
    describe('Test /js/controllers/health-ctrl.js', function(){
      	beforeEach(function(){
	        module('app.controllers');
	        module('app.services');
      	});
    	var $scope, $rootScope, $controller, $httpBackend, $config, $location, toaster, $timeout, $route;

	    beforeEach(inject(function(_$rootScope_ , _$controller_, _$httpBackend_, _$config_, _$location_, _$timeout_){
	    	$rootScope = _$rootScope_;
	    	$controller = _$controller_;
	        $httpBackend = _$httpBackend_;
	        $config = _$config_;
	        $location = _$location_;
	        $timeout = _$timeout_;
	        toaster = {};
	        $route = {};
	    }));

        beforeEach(function(){
          	$scope =  $rootScope.$new();
	        controller = $controller('HealthCtrl', {$scope: $scope, $route: $route, toaster: toaster });
        });

        describe("if the controller of HealthCtrl exists",function(){
        	it('controller exists', function(){
	          	expect(controller).toBeDefined();
	        });
        })

        describe("check if parameters are available",function(){

	        it('$scope.value and $config.value should be right', function(){
	          	expect($config.uri.heatmap).toBeTruthy();
	        });

      	})

      	describe("httpGet $config.uri.dbtree test",function(){
	        beforeEach(function(){
	            $httpBackend.when('GET', $config.uri.heatmap).respond([1,2,3]);
	            $httpBackend.flush();
	        });

	        it('http response', function(){
	          // expect($scope.dbList).toBeTruthy();
	        });

	      	afterEach(function() {
	        	$httpBackend.verifyNoOutstandingExpectation();
	        	$httpBackend.verifyNoOutstandingRequest();
	      	});
	    })


    });
  }
)
