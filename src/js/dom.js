import * as main from '../index';

export let buttonRotate = document.querySelector("#rotate");
export let buttonRestart = document.querySelector("#restart");
export let buttonStart = document.querySelector("#start");
export let buttonAutoPlace = document.querySelector("#autoplace");
export let gameSettings = document.querySelector(".game-settings");
export let shipsSelector = document.querySelector(".ships");
export let shipsShip = document.querySelectorAll(".ships > .ship");
export let gameBoardPlayer = document.querySelector(".gameBoard.player");
export let rowHeaderPlayer = document.querySelector(
  ".gameBoard.player > .row.row-header"
);
export let gameBoardPc = document.querySelector(".gameBoard.pc");
export let rowHeaderPc = document.querySelector(
  ".gameBoard.pc > .row.row-header"
);
export let headerShips = document.querySelector(".heading");
export let allGridRows = document.querySelectorAll(".row:not(.row-header)");

//EventListeners
buttonRotate.addEventListener("click", () => {
  shipsSelector.classList.value = shipsSelector.classList.contains("v")
    ? "ships h"
    : "ships v";
});

buttonRestart.addEventListener('click', () => {
    main.playerPc.restart();
    main.playerUser.restart();

    initializeGrid(main.playerPc.gameBoard.board, "pc")
    initializeGrid(main.playerUser.gameBoard.board, "player")
    initializeShipSelector(main.playerUser.gameBoard.ships);

    buttonRotate.removeAttribute('disabled');
    buttonAutoPlace.removeAttribute('disabled');
    buttonStart.setAttribute('disabled', 'true')

    
    changeInfoMessage("It is your time to place ships on your board. Use drag and drop.")
})

buttonAutoPlace.addEventListener('click', () => {
    main.playerUser.gameBoard.automaticShipPlacement();
    initializeGrid(main.playerUser.gameBoard.board, "player")
    initializeShipSelector(main.playerUser.gameBoard.ships);
    
    buttonRotate.setAttribute("disabled", "true")
    buttonAutoPlace.setAttribute("disabled", "true")
    buttonStart.removeAttribute("disabled");
    changeInfoMessage("Time to start the game by pressing Start game button down there.")
})

//eventHandlers
let draggedElement = null;
export function dragstartHandler(ev) {
    draggedElement = ev.target;
}

export function dragoverHandler(ev) {
    ev.preventDefault();
}

export function dragleaveHandler(ev) {
    
}

export function dropHandler(ev) {
    placeShipOnBoard(draggedElement, main.playerUser.gameBoard.ships[draggedElement.getAttribute('boardcode')], ev.target, document.querySelector(".ships").classList[1])

}

//Functions
export function initializeGrid(gridArray, player) {
if (!gridArray || !player) return;
  let HTMLBoard = "";
  gridArray.map((value1, index1) => {
    HTMLBoard += `<div class="row">`;
    HTMLBoard += `<div class="header-column">${index1 + 1}</div>`;
    value1.map((value2, index2) => {
        let classes = value2 != 1 ? "ship" : "";
      HTMLBoard += `<div ${classes ? `class="`+ classes + `"` : ``} coord1="${index1}" coord2="${index2}"></div>`;
    });
    HTMLBoard += `</div>`;
  });

  if (player === "player") {
    document.querySelectorAll(".gameBoard.player > .row:not(.row-header)").forEach((e) => e.remove());
    rowHeaderPlayer.insertAdjacentHTML("afterEnd", HTMLBoard);
    let gridCells = document.querySelectorAll(".gameBoard.player > .row > div[coord1]");
    gridCells.forEach((element) => {
      element.addEventListener("dragover", dragoverHandler);
      element.addEventListener("dragleave", dragleaveHandler);
      element.addEventListener("drop", dropHandler);
    });
  } else if (player === "pc") {
    document.querySelectorAll(".gameBoard.pc > .row:not(.row-header)").forEach((e) => e.remove());
    rowHeaderPc.insertAdjacentHTML("afterEnd", HTMLBoard);
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
    e1.addEventListener("click", (e2) => {
      selectShip(e1, shipsElement);
    });
    if (ships[e1.getAttribute("boardcode")].placedOnBoard !== true) {
        e1.addEventListener("dragstart", dragstartHandler);
    }
  });
}

export function placeShipOnBoard(shipElement, shipObject, targetElement, orientation) {
    let coord1 = parseInt(targetElement.getAttribute('coord1'));
    let coord2 = parseInt(targetElement.getAttribute('coord2'));
    main.playerUser.gameBoard.placeShip(shipObject, [coord1, coord2], orientation)
    initializeShipSelector(main.playerUser.gameBoard.ships);
    initializeGrid(main.playerUser.gameBoard.board, "player");
    if (main.playerUser.gameBoard.checkIfAllShipsPlaced()) {
        buttonRotate.setAttribute("disabled", "true")
        buttonAutoPlace.setAttribute("disabled", "true")
        buttonStart.removeAttribute("disabled");
        changeInfoMessage("Time to start the game by pressing Start game button down there.")
    }
}

export function changeInfoMessage(message) {
    document.querySelector(".alert-info").innerHTML = message;
}
