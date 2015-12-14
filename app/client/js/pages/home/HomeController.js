class HomeController {
  static $inject = ['getName', 'eventEmitter'];

  constructor(getName, eventEmitter) {
    this.name = getName();

    eventEmitter.on('TEXT_CHANGED', (event, name) => {
      this.name = name;
    });
  }
}

export default HomeController;
