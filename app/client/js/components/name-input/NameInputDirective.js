import nameInputTemplate from './name-input.html';

class NameInputDirective {
  constructor() {
    this.restrict = 'E';
    this.scope = {};

    this.controller = 'NameInputController';
    this.controllerAs = 'ctrl';

    this.bindToController = {
      name: '@'
    };

    this.template = nameInputTemplate;
  }
}

export default (...args) => new NameInputDirective(...args);
