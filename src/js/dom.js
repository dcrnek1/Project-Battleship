import * as main from "../index";

export let buttonRotate = document.querySelector("#rotate");
export let buttonRestart = document.querySelector("#restart");
export let buttonStart = document.querySelector("#start");
export let buttonAutoPlace = document.querySelector("#autoplace");
export let gameSettings = document.querySelector(".game-settings");
export let shipsSelector = document.querySelector(".ships");
export let shipsShip = document.querySelectorAll(".ships > .ship");
export let gameBoardPlayer = document.querySelector(".gameBoard.player");
export let rowHeaderPlayer = document.querySelector(
  ".gameBoard.player > .grid > .row.row-header"
);
export let gameBoardPc = document.querySelector(".gameBoard.pc");
export let rowHeaderPc = document.querySelector(
  ".gameBoard.pc > .grid > .row.row-header"
);
export let headerShips = document.querySelector(".heading");
export let allGridRows = document.querySelectorAll(".row:not(.row-header)");
export let computerGrid = document.querySelectorAll(
  ".gameBoard.player > .grid > .row > div:not(.hit):not(.header-row):not(.header-column, .ship)"
);
export let playerGrid = document.querySelectorAll(
  ".gameBoard.pc > .grid > .row > div:not(.hit):not(.header-row):not(.header-column, .ship)"
);

//EventListeners
buttonRotate.addEventListener("click", () => {
  shipsSelector.classList.value = shipsSelector.classList.contains("v")
    ? "ships h"
    : "ships v";
});

buttonRestart.addEventListener("click", () => {
  main.playerPc.restart();
  main.playerUser.restart();

  initializeGrid(main.playerPc.gameBoard.board, "pc");
  initializeGrid(main.playerUser.gameBoard.board, "player");
  initializeShipSelector(main.playerUser.gameBoard.ships);

  buttonRotate.removeAttribute("disabled");
  buttonAutoPlace.removeAttribute("disabled");
  buttonStart.setAttribute("disabled", "true");

  gameBoardPlayer.classList.add("active");
  gameBoardPc.classList.remove("active");
  main.playerPc.gameBoard.automaticShipPlacement();

  changeInfoMessage(
    "It's your time to place ships on your board. Use drag and drop."
  );
});

buttonAutoPlace.addEventListener("click", () => {
  main.playerUser.gameBoard.automaticShipPlacement();
  initializeGrid(main.playerUser.gameBoard.board, "player");
  initializeShipSelector(main.playerUser.gameBoard.ships);

  buttonRotate.setAttribute("disabled", "true");
  buttonAutoPlace.setAttribute("disabled", "true");
  buttonStart.removeAttribute("disabled");
  changeInfoMessage(
    "Time to start the game by pressing Start game button down there."
  );
});

buttonStart.addEventListener("click", () => {
  gameStart();
});

function clickComputerGrid(element) {
  let isActive = document.querySelector(".gameBoard.pc.active");
  let coord1 = element.target.getAttribute("coord1");
  let coord2 = element.target.getAttribute("coord2");

  if (isActive !== null) {
    let condition = main.playerPc.gameBoard.receiveAttack([coord1, coord2]);
    if (condition) {
      initializeGrid(main.playerPc.gameBoard.board, "pc");
      gameBoardPc.classList.remove("active");
      gameBoardPlayer.classList.add("active");
      if (main.playerPc.gameBoard.checkIfAllShipsSunk()) {
        endGame("You won!");
        gameBoardPlayer.classList.remove("active")
        return true;
      }
    }

    gameBoardPc.classList.remove("active");
    gameBoardPlayer.classList.add("active");

    setTimeout(() => {
      while (attackUserAuto() === false) {}

      initializeGrid(main.playerUser.gameBoard.board, "player");
      gameBoardPc.classList.add('active');
      gameBoardPlayer.classList.remove('active');
      if (main.playerUser.gameBoard.checkIfAllShipsSunk()) {
        endGame("Computer has won :(");
        gameBoardPc.classList.remove("active")
        return true;
      }
    }, 100);
  }
}

//eventHandlers
let draggedElement = null;
export function dragstartHandler(ev) {
  draggedElement = ev.target;
}

export function dragoverHandler(ev) {
  ev.preventDefault();
}

export function dragleaveHandler(ev) {}

export function dropHandler(ev) {
  placeShipOnBoard(
    draggedElement,
    main.playerUser.gameBoard.ships[draggedElement.getAttribute("boardcode")],
    ev.target,
    document.querySelector(".ships").classList[1]
  );
}

//Functions
export function initializeGrid(gridArray, player) {
  if (!gridArray || !player) return;
  let HTMLBoard = "";
  gridArray.map((value1, index1) => {
    HTMLBoard += `<div class="row">`;
    HTMLBoard += `<div class="header-column">${index1 + 1}</div>`;
    value1.map((value2, index2) => {
      let classes =
        value2 !== 1
          ? value2 !== 0
            ? typeof value2 === "string"
              ? player === "player"
                ? value2.endsWith("0")
                  ? "ship hit"
                  : "ship"
                : value2.endsWith("0")
                ? "ship hit"
                : ""
              : ""
            : "hit"
          : "";
      HTMLBoard += `<div ${
        classes ? `class="` + classes + `"` : ``
      } coord1="${index1}" coord2="${index2}"></div>`;
    });
    HTMLBoard += `</div>`;
  });

  if (player === "player") {
    document
      .querySelectorAll(".gameBoard.player > .grid > .row:not(.row-header)")
      .forEach((e) => e.remove());
    rowHeaderPlayer.insertAdjacentHTML("afterEnd", HTMLBoard);
    let gridCells = document.querySelectorAll(
      ".gameBoard.player > .grid > .row > div[coord1]"
    );
    gridCells.forEach((element) => {
      element.addEventListener("dragover", dragoverHandler);
      element.addEventListener("dragleave", dragleaveHandler);
      element.addEventListener("drop", dropHandler);
    });
  } else if (player === "pc") {
    document
      .querySelectorAll(".gameBoard.pc > .grid > .row:not(.row-header)")
      .forEach((e) => e.remove());
    rowHeaderPc.insertAdjacentHTML("afterEnd", HTMLBoard);
    let gridCells = document.querySelectorAll(
      ".gameBoard.pc > .grid > .row > div[coord1]:not([class])"
    );
    gridCells.forEach((gridCell) => {
      gridCell.addEventListener("click", clickComputerGrid);
    });
  }
}

export function initializeShipSelector(ships) {
  document.querySelectorAll(".ships > .ship").forEach((e) => e.remove());
  let HTMLShipsSelector = "";
  Object.entries(ships).map((ship, index) => {
    HTMLShipsSelector += `<div draggable="${
      ship[1].placedOnBoard === true ? "false" : "true"
    }" class="ship${
      ship[1].placedOnBoard === true ? " placed" : ""
    }" boardCode="${ship[1].boardCode}">`;
    for (let i = 0; i < ship[1].length; i++) {
      HTMLShipsSelector += `<div></div>`;
    }
    HTMLShipsSelector += `</div>`;
  });

  shipsSelector.insertAdjacentHTML("afterbegin", HTMLShipsSelector);

  let shipsElement = document.querySelectorAll(".ships > .ship");

  shipsElement.forEach((e1) => {
    if (ships[e1.getAttribute("boardcode")].placedOnBoard !== true) {
      e1.addEventListener("dragstart", dragstartHandler);
    }
  });
}

export function placeShipOnBoard(
  shipElement,
  shipObject,
  targetElement,
  orientation
) {
  let coord1 = parseInt(targetElement.getAttribute("coord1"));
  let coord2 = parseInt(targetElement.getAttribute("coord2"));
  main.playerUser.gameBoard.placeShip(
    shipObject,
    [coord1, coord2],
    orientation
  );
  initializeShipSelector(main.playerUser.gameBoard.ships);
  initializeGrid(main.playerUser.gameBoard.board, "player");
  if (main.playerUser.gameBoard.checkIfAllShipsPlaced()) {
    buttonRotate.setAttribute("disabled", "true");
    buttonAutoPlace.setAttribute("disabled", "true");
    buttonStart.removeAttribute("disabled");
    changeInfoMessage(
      "Time to start the game by pressing Start game button down there."
    );
  }
}

export function changeInfoMessage(message) {
  document.querySelector(".alert-info").innerHTML = message;
}

function gameStart() {
  buttonAutoPlace.setAttribute("disabled", "true");
  buttonRotate.setAttribute("disabled", "true");
  buttonStart.setAttribute("disabled", "true");
  changeInfoMessage("Game has started. Try to hit ship on Computer board when it's your turn");

  gameBoardPlayer.classList.remove("active");
  gameBoardPc.classList.add("active");
}

function attackUserAuto() {
  let coord1 = Math.floor(Math.random() * 10);
  let coord2 = Math.floor(Math.random() * 10);

  return main.playerUser.gameBoard.receiveAttack([coord1, coord2]);
}

function endGame(message) {
  changeInfoMessage(message);
}
