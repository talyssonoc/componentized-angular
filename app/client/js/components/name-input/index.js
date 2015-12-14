import angular from 'angular';

import NameInputController from './NameInputController';
import NameInputDirective from './NameInputDirective';

angular
  .module('nameInput', [])
  .controller('NameInputController', NameInputController)
  .directive('nameInput', NameInputDirective);

export default 'nameInput';
