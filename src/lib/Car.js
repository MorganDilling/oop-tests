const Instance = require('./Instance');
const Door = require('./Door');

module.exports = class Car extends Instance {
  constructor(parent, doors) {
    super(parent);
    this.Locked = false;

    for (let i = 0; i < doors; i++) {
      new Door(this)
    }

  }

  Lock() {
    this.Children.forEach(child => {
      if (child.IsA(Door)) {
        child.Lock();
      }
    })
    this.Locked = true
    this.Changed.Fire('Locked');
  }

  Unlock() {
    this.Children.forEach(child => {
      if (child.IsA(Door)) {
        child.Unlock();
      }
    })
    this.Locked = false
    this.Changed.Fire('Locked');
  }
}