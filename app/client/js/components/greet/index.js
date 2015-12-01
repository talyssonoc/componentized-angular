import angular from 'angular';

import GreetController from './GreetController';
import GreetDirective from './GreetDirective';

angular
  .module('greet', [])
  .controller('GreetController', GreetController)
  .directive('greet', GreetDirective);

export default 'greet';
