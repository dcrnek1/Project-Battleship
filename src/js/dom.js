export let buttonRotate = document.querySelector("#rotate");
export let buttonRestart = document.querySelector("#restart");
export let buttonStart = document.querySelector("#start");
export let gameSettings = document.querySelector(".game-settings");
export let shipsSelector = document.querySelector(".ships");
export let shipsShip = document.querySelectorAll(".ships > .ship");
export let gameBoardPlayer = document.querySelector(".gameBoard.player");
export let rowHeaderPlayer = document.querySelector(".gameBoard.player > .row.row-header")
export let gameBoardPc = document.querySelector(".gameBoard.pc");
export let rowHeaderPc = document.querySelector(".gameBoard.pc > .row.row-header")
export let headerShips = document.querySelector(".heading");
export let allGridRows = document.querySelectorAll(".row:not(.row-header)");

//EventListeners
buttonRotate.addEventListener('click', () => {
    shipsSelector.classList.value = shipsSelector.classList.contains('v') ? 'ships h' : 'ships v';
});

function selectShip(shipElement, shipsElement) {
    shipsElement.forEach(e => {
        e.classList.remove('selected');
    })
    shipElement.classList.add('selected');
}



//Functions
export function initializeGrid(gridArray, player) {
    allGridRows.forEach(e => e.remove());
    let HTMLBoard = '';
    gridArray.map((value1, index1) => {
        HTMLBoard += `<div class="row">`
        HTMLBoard += `<div class="header-column">${index1 + 1}</div>`
        value1.map((value2, index2) => {
            HTMLBoard += `<div coord1="${index1}" coord2="${index2}"></div>`
        })
        HTMLBoard += `</div>`
    });
    
    if (player === 'player') {
        rowHeaderPlayer.insertAdjacentHTML("afterEnd", HTMLBoard);
    } else if (player === 'pc') {
        rowHeaderPc.insertAdjacentHTML("afterEnd", HTMLBoard);
    }
}

export function initializeShipSelector(ships) {
    shipsShip.forEach(e => e.remove())
    let HTMLShipsSelector = '';
    Object.entries(ships).map((ship, index) => {
        HTMLShipsSelector += `<div class="ship${ship[1].placedOnBoard === true ? " placed" : ""}" boardCode="${ship[1].boardCode}">`
        for (let i = 0; i < ship[1].length; i++) {
            HTMLShipsSelector += `<div></div>`
        }
        HTMLShipsSelector += `</div>`
    })

    console.log(HTMLShipsSelector);
    shipsSelector.insertAdjacentHTML("afterbegin", HTMLShipsSelector);

    let shipsElement = document.querySelectorAll(".ships > .ship");

    shipsElement.forEach(e1 => {
        e1.addEventListener('click', (e2) => {
            selectShip(e1, shipsElement);
        })
    })
}