import './css/style.css';
import * as dom from './js/dom';
import Player from './js/Player';

//Gameplay
//Create new player (PC and Player)
export let playerUser = new Player('user');
export let playerPc = new Player('pc');

//Initialize player and pc grid and ship selector
dom.initializeGrid(playerUser.gameBoard.board, 'player');
dom.initializeGrid(playerPc.gameBoard.board, 'pc');
playerPc.gameBoard.automaticShipPlacement();
dom.initializeShipSelector(playerUser.gameBoard.ships);
