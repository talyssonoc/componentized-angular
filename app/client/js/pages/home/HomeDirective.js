import homeTemplate from './home.html';

class HomeDirective {
  constructor() {
    this.restrict = 'E';
    this.scope = {};
    this.controller = 'HomeController';
    this.controllerAs = 'ctrl';
    this.template = homeTemplate;
  }
}

export default (...args) => new HomeDirective(...args);
