(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:visualsService
	 * @description
	 * # visualsService
	 * Service of the app
	 */

  	angular
		.module('visuals')
		.factory('VisualsService', Visuals);
		// Inject your dependencies as .$inject = ['$http', 'someSevide'];
		// function Name ($http, someSevide) {...}

		Visuals.$inject = ['$http'];

		function Visuals ($http) {

		}

})();
