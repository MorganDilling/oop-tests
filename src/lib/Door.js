const Instance = require('./Instance');

module.exports = class Door extends Instance {
  constructor(parent) {
    super(parent);
    this.Locked = false;
    this.Closed = true;
  }

  Open() {
    if (!this.Locked) {
      this.Changed.Fire('Closed');
      this.Closed = false;
    }
  }

  Close() {
    this.Changed.Fire('Closed');
    this.Closed = true;
  }

  Lock() {
    this.Changed.Fire('Locked');
    this.Locked = true;
  }

  Unlock() {
    this.Changed.Fire('Locked');
    this.Locked = false;
  }
}