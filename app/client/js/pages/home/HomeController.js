class HomeController {
  static $inject = ['getName'];

  constructor(getName) {
    this.name = getName();
  }
}

export default HomeController;