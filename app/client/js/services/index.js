import angular from 'angular';

import getName from './getName';

angular.module('services', [])
	.factory('getName', getName);

export default 'services';