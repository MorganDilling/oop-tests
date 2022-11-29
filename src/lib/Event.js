class Listener {
  constructor (callback, context) {
    this.callback = callback
    this.context = context
    this.id = Math.random().toString(36).substring(2, 9);
  }

  Disconnect () {
    this.callback = null
    this.context._listeners = this.context._listeners.filter(listener => listener.id !== this.id)
  }

  _fire (...args) {
    if (this.callback) {
      this.callback(...args)
    }
  }
}

module.exports = class Event {
  
  constructor() {
    this._listeners = [];
  }
  
  Connect(callback) {
    const listener = new Listener(callback, this);
    this._listeners.push(listener);
    return listener
  }
  
  Fire(...args) {
    this._listeners.forEach(listener => listener._fire(...args));
  }
}