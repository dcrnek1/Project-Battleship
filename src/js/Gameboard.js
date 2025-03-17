

import Ship from "./Ship.js";

class Gameboard {
  constructor() {
    this.board = new Array(10).fill(null).map(() => new Array(10).fill(1)); //1 = free, 0 = missed shot
    this.ships = {
      "Carrier": new Ship(5, "C"), //C = Placed ship, C0 = Hit ship
      "Battleship": new Ship(4, "B"),
      "Destroyer": new Ship(3, "D"),
      "Submarine": new Ship(3, "S"),
      "Patrol Boat": new Ship(2, "P")
    };
  }

  /** @param {Ship} ship*/
  placeShip(ship, coordinates, orientation = "h") { //h = horizontal, v = vertical
    //For given coordinate and ship length check:
    if(orientation === "h" && ship.length + coordinates[1] <= 10) { // 1. Horizontal - If length + x is bigger than 10 [y, x] x (horiz) coordinates then return false
      if (this.checkFreeSpaces(coordinates, ship.length, orientation)) {
        for (let i = coordinates[1]; i < ship.length + coordinates[1]; i++) {
          this.board[coordinates[0]][i] = ship.boardCode;
        }
        return true;
      } else {
        return false
      }
    } else if (orientation === "v" && ship.length + coordinates[0] <= 10) { // 3. Vertical - If length + y is bigger than 10 [y, x] y (vertical) coordinates then return false
      if (this.checkFreeSpaces(coordinates, ship.length, orientation)) {
        for (let i = coordinates[0]; i < ship.length + coordinates[0]; i++) {
          this.board[i][coordinates[1]] = ship.boardCode;
        }
        return true;
      } else {
        return false
      }
    } else {
      return false;
    }
  }

  checkFreeSpaces(coords, length, orientation) {
    if (orientation === "h") {// 2. Horizontal - If any cell is not 1 then return false (ship l = 2, coords= [2,1]) check for [2,1], [2,2]
      for (let i = coords[1]; i < coords[1] + length; i++) {
        if (this.board[coords[0]][i] !== 1) {
          return false
        }
      }
      return true;
    } else if (orientation === "v") { // 4. Vertical - If any cell is not 1 then return false (ship l = 2, coords= [2,1]) check for [2,1], [3,1]
      for (let i = coords[0]; i < coords[0] + length; i++) {
        if (this.board[i][coords[1]] !== 1) {
          return false
        }
      }
      return true;
    }
  }

  printBoard() {
    let x = "";
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        x = x + this.board[i][j] + '  ';
      }
      x = x + '\n';
    }
    console.log(x);
  }
}

export default Gameboard;