const _idStudent = new WeakMap();
const _score = new WeakMap();

export default class Student {
  constructor(idSutdent, name, score) {
    _idStudent.set(this, idSutdent);
    this.name = name;
    _score.set(this, score);
  }

  get _idStudent() {
    return _idStudent.get(this);
  }

  get _score() {
    return _score.get(this);
  }
}
