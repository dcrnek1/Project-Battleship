import Gameboard from "./GameBoard";

class Player {
  constructor(type) {
    this.type = type;
    this.gameBoard = new Gameboard();
  }

  restart() {
    this.gameBoard = new Gameboard();
  }
}

export default Player;