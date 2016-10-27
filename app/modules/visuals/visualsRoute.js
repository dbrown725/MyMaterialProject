'use strict';

/**
 * @ngdoc function
 * @name app.route:visualsRoute
 * @description
 * # visualsRoute
 * Route of the app
 */

angular.module('visuals')
	.config(['$stateProvider', function ($stateProvider) {
		
		$stateProvider
			.state('home.visuals', {
				url:'/visuals',
				templateUrl: 'app/modules/visuals/visuals.html',
				controller: 'VisualsCtrl',
				controllerAs: 'vm'
			});

		
	}]);
