export default class Team {
  constructor() {
    this.players = new Set();
  }

  addPlayer(player) {
    this.players.add(player);
  }

  * [Symbol.iterator]() {
    // это генератор
    // и здесь есть доступ к this
    // остаётся лишь правильно написать yield
    const playersArr = [...this.players];
    for (let i = 0; i < playersArr.length; i += 1) yield playersArr[i];
  }
}
