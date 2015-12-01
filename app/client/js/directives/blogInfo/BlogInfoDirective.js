class BlogInfoDirective {
  constructor() {
    this.restrict = 'A';

    this.controller = 'BlogInfoController';
    this.controllerAs = 'blog';
  }
}

export default (...args) => new BlogInfoDirective(...args);
