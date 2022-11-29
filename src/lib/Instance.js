const Event = require('./Event');

module.exports = class Instance {
  constructor(parent) {
    this._children = [];
    this._parent = parent;
    
    if (parent) {
      parent._children.push(this);
    }

    this.Changed = new Event();
  }

  IsA(Class) {
    return this instanceof Class
  }

  set Parent(parent) {
    if (parent) {
      parent.children.push(this);
    }
    else {
      this._parent._children = this._parent._children.filter(child => child !== this);
    }
    this._parent = parent;

    this.changed.Fire('Parent');
  }

  get Parent() {
    return this._parent;
  }

  get Children() {
    return this._children;
  }
}