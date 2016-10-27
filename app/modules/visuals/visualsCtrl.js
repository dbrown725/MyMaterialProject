(function() {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:visualsCtrl
	* @description
	* # visualsCtrl
	* Controller of the app
	*/

  	angular
		.module('visuals')
		.controller('VisualsCtrl', Visuals);

		Visuals.$inject = [];

		/*
		* recommend
		* Using function declarations
		* and bindable members up top.
		*/

		function Visuals() {
			/*jshint validthis: true */
			var vm = this;

		}

})();
