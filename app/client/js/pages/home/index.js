import angular from 'angular';

import HomeController from './HomeController';
import HomeDirective from './HomeDirective';

angular
  .module('home', [])
  .controller('HomeController', HomeController)
  .directive('home', HomeDirective);

export default 'home';
