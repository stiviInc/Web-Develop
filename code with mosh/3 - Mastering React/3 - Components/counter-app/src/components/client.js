const _id = new WeakMap();
const _credit = new WeakMap();

export default class Client {
  constructor(id, name, credit) {
    _id.set(this, id);
    this.name = name;
    _credit.set(this, credit);
  }

  get _id() {
    return _id.get(this);
  }

  get _credit() {
    return _credit.get(this);
  }
}
