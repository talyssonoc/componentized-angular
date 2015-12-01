import greetTemplate from './greet.html';

class GreetDirective {
  constructor() {
    this.restrict = 'E';
    this.scope = {};

    this.controller = 'GreetController';
    this.controllerAs = 'ctrl';

    this.bindToController = {
      name: '='
    };

    this.template = greetTemplate;
  }
}

export default (...args) => new GreetDirective(...args);