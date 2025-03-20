import Ship from "./Ship.js";

class Gameboard {
  constructor() {
    this.board = new Array(10).fill(null).map(() => new Array(10).fill(1)); //1 = free, 0 = missed shot
    this.ships = {
      C: new Ship(5, "C"), //C = Placed ship, C0 = Hit ship
      B: new Ship(4, "B"),
      D: new Ship(3, "D"),
      S: new Ship(3, "S"),
      P: new Ship(2, "P"),
    };
    this.hits = 0;
  }

  /** @param {Ship} ship*/
  placeShip(ship, coordinates, orientation = "h") {
    //h = horizontal, v = vertical
    //For given coordinate and ship length check:
    if (orientation === "h" && ship.length + coordinates[1] <= 10) {
      // 1. Horizontal - If length + x is bigger than 10 [y, x] x (horiz) coordinates then return false
      if (this.checkFreeSpaces(coordinates, ship.length, orientation)) {
        for (let i = coordinates[1]; i < ship.length + coordinates[1]; i++) {
          this.board[coordinates[0]][i] = ship.boardCode;
        }
        ship.placedOnBoard = true;
        return true;
      } else {
        return false;
      }
    } else if (ship !== undefined && orientation === "v" && ship.length + coordinates[0] <= 10) {
      // 3. Vertical - If length + y is bigger than 10 [y, x] y (vertical) coordinates then return false
      if (this.checkFreeSpaces(coordinates, ship.length, orientation)) {
        for (let i = coordinates[0]; i < ship.length + coordinates[0]; i++) {
          this.board[i][coordinates[1]] = ship.boardCode;
        }
        ship.placedOnBoard = true;
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  checkFreeSpaces(coords, length, orientation) {
    if (orientation === "h") {
      // 2. Horizontal - If any cell is not 1 then return false (ship l = 2, coords= [2,1]) check for [2,1], [2,2]
      for (let i = coords[1]; i < coords[1] + length; i++) {
        if (this.board[coords[0]][i] !== 1) {
          return false;
        }
      }
      return true;
    } else if (orientation === "v") {
      // 4. Vertical - If any cell is not 1 then return false (ship l = 2, coords= [2,1]) check for [2,1], [3,1]
      for (let i = coords[0]; i < coords[0] + length; i++) {
        if (this.board[i][coords[1]] !== 1) {
          return false;
        }
      }
      return true;
    }
  }

  receiveAttack(coordinates) {
    //All board codes for ships
    let shipBoardCodes = Object.entries(this.ships).reduce(
      (prev, current, index, array) => {
        return prev + current[1].boardCode;
      },
      ""
    );
    // if its 1 then change it to 0
    if (this.board[coordinates[0]][coordinates[1]] === 1) {
      this.board[coordinates[0]][coordinates[1]] = 0;
      this.hits = this.hits + 1;
      return true;
    } else if (
      shipBoardCodes.includes(this.board[coordinates[0]][coordinates[1]])
    ) {
      // If it is ship board code
      let ship = Object.values(this.ships).find(
        (ship) => ship.boardCode === this.board[coordinates[0]][coordinates[1]]
      );
      // - Increment ship hit count
      ship.hit();
      // - Exchange to ship boardcode + 0
      this.board[coordinates[0]][coordinates[1]] = ship.boardCode + "0";
      this.hits = this.hits + 1;
      return true;
    } else {
      return false;
    }
  }

  checkIfAllShipsSunk() {
    //Reduces an object array in a way that if only one isSunk() is false, function returns false
    return Object.entries(this.ships).reduce(
      (prev, current, index, array) => {
        return prev === false ? false : current[1].isSunk()
      },
      true
    );
  }

  checkIfAllShipsPlaced() {
    return Object.values(this.ships).reduce((prev, current, index, array) => {
      return prev === false ? false : current.placedOnBoard;
    }, true)
  }

  automaticShipPlacement() {
    Object.values(this.ships).forEach((ship) => {
      while (ship.placedOnBoard === false) {
        let coord1 = Math.floor(Math.random() * 10);
        let coord2 = Math.floor(Math.random() * 10);
        let orientationArray = ["h", "v"];
        let randomOrientationIndex = Math.floor(Math.random() * orientationArray.length);
        let orientation = orientationArray[randomOrientationIndex]
        this.placeShip(ship,[coord1, coord2], orientation);
      }
    })
  }

  printBoard() {
    let x = "";
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        x = x + this.board[i][j] + "  ";
      }
      x = x + "\n";
    }
    console.log(x);
  }
}

export default Gameboard;
