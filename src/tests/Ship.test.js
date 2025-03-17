import Ship from "../js/Ship";

it("should initialize with 0 hits and false sunk", () => {
  let ship = new Ship(3);
  expect(ship.hits).toBe(0);
  expect(ship.length).toBe(3);
  expect(ship.isSunk()).toBe(false);
});

it("should increase hits on hit() call", () => {
  let ship = new Ship(3);
  ship.hit();
  ship.hit();
  expect(ship.hits).toBe(2);
  expect(ship.isSunk()).toBe(false);
});

it("shouldnt increase hits if sunk", () => {
  let ship = new Ship(3);
  ship.hit();
  ship.hit();
  expect(ship.hits).toBe(2);
  expect(ship.isSunk()).toBe(false);
  ship.hit();
  expect(ship.hits).toBe(3);
  expect(ship.isSunk()).toBe(true);
  ship.hit();
  expect(ship.hits).toBe(3);
  expect(ship.isSunk()).toBe(true);
});