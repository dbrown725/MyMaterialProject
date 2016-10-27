(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.test:visualsTest
	 * @description
	 * # visualsTest
	 * Test of the app
	 */

	describe('visuals test', function () {
		var controller = null, $scope = null;

		beforeEach(function () {
			module('my-material-project');
		});

		beforeEach(inject(function ($controller, $rootScope) {
			$scope = $rootScope.$new();
			controller = $controller('VisualsCtrl', {
				$scope: $scope
			});
		}));

		it('Should controller must be defined', function () {
			expect(controller).toBeDefined();
		});

	});
})();
