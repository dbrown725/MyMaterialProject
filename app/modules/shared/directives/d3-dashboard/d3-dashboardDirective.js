(function() {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:d3-dashboardDirective
	* @description
	* # d3-dashboardDirective
	* Directive of the app
	*/

	angular
		.module('my-material-project')
		.directive('d3-dashboard', d3-dashboard);

		function d3-dashboard () {

			var directive = {
				link: link,
				restrict: 'EA',
				controller: 'D3-dashboardCtrl',
				
				templateUrl:'app/modules/shared/directives/d3-dashboard/d3-dashboard.html',
				
			}

			return directive;

			function link(scope, element, attrs) {
				// write your code here
			}

		}

})();
