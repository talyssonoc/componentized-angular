import angular from 'angular';

import BlogInfoController from './BlogInfoController';
import BlogInfoDirective from './BlogInfoDirective';

angular
  .module('blogInfo', [])
  .controller('BlogInfoController', BlogInfoController)
  .directive('blogInfo', BlogInfoDirective);

export default 'blogInfo';
