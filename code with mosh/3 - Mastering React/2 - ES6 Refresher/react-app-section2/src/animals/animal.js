const _food = new WeakMap();
const _feed = new WeakMap();

export function testingNamedExports() {
  return "It works";
}

export default class Animal {
  constructor(name, type, food) {
    this.name = name;
    this.type = type;
    _food.set(this, food);
    _feed.set(this, () => `Feeding the ${this.name} with ${_food.get(this)}`);
  }

  feed() {
    return _feed.get(this)();
  }

  move() {
    return `The ${this.name} is moving`;
  }
}
