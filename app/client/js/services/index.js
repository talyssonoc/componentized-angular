import angular from 'angular';

import getName from './getName';
import eventEmitter from './eventEmitter';

angular.module('services', [])
  .factory('getName', getName)
	.factory('eventEmitter', eventEmitter);

export default 'services';
