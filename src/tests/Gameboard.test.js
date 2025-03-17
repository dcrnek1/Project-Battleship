import Gameboard from "../js/GameBoard";

it("should generate 2D array filled with 1 for storing ships and hits", () => {
  let board = new Gameboard();
  expect(board.board).toEqual(new Array(10).fill(null).map(() => new Array(10).fill(1)));
});

it("should generate 5 ships of correct length", () => {
  let board = new Gameboard();
  expect(board.ships.Carrier.length).toEqual(5);
  expect(board.ships.Battleship.length).toEqual(4);
  expect(board.ships.Destroyer.length).toEqual(3);
  expect(board.ships.Submarine.length).toEqual(3);
  expect(board.ships["Patrol Boat"].length).toEqual(2);
});

test("every ship to have a board code (upper first letter of name)", () => {
  let board = new Gameboard();
  expect(board.ships.Carrier.boardCode).toEqual("C");
  expect(board.ships.Battleship.boardCode).toEqual("B");
  expect(board.ships.Destroyer.boardCode).toEqual("D");
  expect(board.ships.Submarine.boardCode).toEqual("S");
  expect(board.ships["Patrol Boat"].boardCode).toEqual("P");
});

it("should not place ship on a board if exceeding bounds", () => {
  let board = new Gameboard();
  expect(board.placeShip(board.ships.Battleship, [0, 7])).toEqual(false);
  expect(board.placeShip(board.ships.Battleship, [0, 6])).toEqual(true);
  expect(board.placeShip(board.ships.Battleship, [7, 0], "v")).toEqual(false);
  expect(board.placeShip(board.ships.Carrier, [6, 9], "v")).toEqual(false);
  expect(board.placeShip(board.ships.Battleship, [6, 0], "v")).toEqual(true);
});

it("should not place ship on a board where other ship is already placed", () => {
  let board = new Gameboard();
  board.board[1][2] = 'C';
  board.board[1][3] = 'C';
  expect(board.placeShip(board.ships.Battleship, [1, 1], "h")).toBe(false);
  expect(board.placeShip(board.ships.Battleship, [0, 2], "v")).toBe(false);
  expect(board.placeShip(board.ships.Battleship, [0, 3], "v")).toBe(false);
  expect(board.placeShip(board.ships.Battleship, [0, 4], "v")).toBe(true);
});

it("should write ship board code onto the board", () => {
  let board = new Gameboard();
  board.placeShip(board.ships.Battleship, [2, 1], "v");
  board.placeShip(board.ships.Carrier, [7, 0], "h");
  expect(board.board[2][1]).toBe(board.ships.Battleship.boardCode);
  expect(board.board[3][1]).toBe(board.ships.Battleship.boardCode);
  expect(board.board[4][1]).toBe(board.ships.Battleship.boardCode);
  expect(board.board[5][1]).toBe(board.ships.Battleship.boardCode);
  expect(board.board[7][0]).toBe(board.ships.Carrier.boardCode);
  expect(board.board[7][1]).toBe(board.ships.Carrier.boardCode);
  expect(board.board[7][2]).toBe(board.ships.Carrier.boardCode);
  expect(board.board[7][3]).toBe(board.ships.Carrier.boardCode);
  expect(board.board[7][4]).toBe(board.ships.Carrier.boardCode);
  expect(board.ships.Battleship.placedOnBoard).toBe(true);
  expect(board.ships.Carrier.placedOnBoard).toBe(true);
  expect(board.ships.Destroyer.placedOnBoard).toBe(false);
});

it("should hit empty cell and change it to zero", () => {
  let board = new Gameboard();
  expect(board.placeShip(board.ships.Battleship, [0, 0], "h")).toBe(true);
  expect(board.receiveAttack([0, 1])).toBe(true);
  expect(board.board[0][1]).toBe("B0");
  expect(board.hits).toBe(1);
  expect(board.receiveAttack([1, 2])).toBe(true);
  expect(board.board[1][2]).toBe(0);
  expect(board.hits).toBe(2);
  expect(board.receiveAttack([1, 2])).toBe(false);
  expect(board.board[1][2]).toBe(0);
  expect(board.hits).toBe(2);
  board.printBoard();
});

it("should check if all ships on board have been sunk", () => {
  let board = new Gameboard();
  board.ships.Battleship.hits = 4;
  expect(board.checkIfAllShipsSunk()).toBe(false);
  board.ships.Carrier.hits = 5;
  expect(board.checkIfAllShipsSunk()).toBe(false);
  board.ships.Destroyer.hits = 3;
  expect(board.checkIfAllShipsSunk()).toBe(false);
  board.ships.Submarine.hits = 3
  expect(board.checkIfAllShipsSunk()).toBe(false);
  board.ships["Patrol Boat"].hits = 2;
  expect(board.checkIfAllShipsSunk()).toBe(true);
});