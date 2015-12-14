class NameInputController {
  static $inject = ['eventEmitter'];

  constructor(eventEmitter) {
    this.eventEmitter = eventEmitter;
  }

  keyUp($event) {
    if($event.keyCode === 13) {
      this.eventEmitter.emit('TEXT_CHANGED', this.name);
    }
  }
}

export default NameInputController;
