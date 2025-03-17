class Ship {
  constructor(length) {
    this.length = length;
    this.hits = 0;
  }

  hit() {
    this.hits = !this.isSunk() ? ++this.hits : this.hits;
  }

  isSunk() {
    return this.hits === this.length ? true : false;
  }
}

export default Ship;
