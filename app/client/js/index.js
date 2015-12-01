import angular from 'angular';

import components from 'components';
import directives from 'directives';
import services from 'services';
import pages from 'pages';

const app = angular.module('componentizedApp', [
  components,
  directives,
  services,
  pages
]);
