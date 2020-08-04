export default class Person {
  constructor(name, type, attack, defence) {
    this.name = name;
    this.type = type;
    this.attack = attack;
    this.defence = defence;

    this.health = 50;
    this.level = 1;
  }
}
