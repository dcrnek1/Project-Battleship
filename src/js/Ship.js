class Ship {
  constructor(length, boardCode) {
    this.length = length;
    this.hits = 0;
    this.boardCode = boardCode ? boardCode : undefined;
  }

  hit() {
    this.hits = !this.isSunk() ? ++this.hits : this.hits;
  }

  isSunk() {
    return this.hits === this.length ? true : false;
  }
}

export default Ship;
