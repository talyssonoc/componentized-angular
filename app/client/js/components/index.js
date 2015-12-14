import angular from 'angular';

import greet from './greet';
import nameInput from './name-input';

angular.module('components', [greet, nameInput]);

export default 'components';
