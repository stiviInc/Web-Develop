import Animal from "./animal";

export default class Dog extends Animal {
  constructor(name, type, food, race) {
    super(name, type, food);
    this.race = race;
  }

  move() {
    return `The dog moves on 4 legs`;
  }

  bark() {
    return `The dog is barking`;
  }
}
