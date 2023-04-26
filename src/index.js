import './style.css';
import displayController from './displayController';
import Gameboard from './Gameboard';

const playerGameboard = Gameboard();
playerGameboard.placeShip(0,0,0,0);
playerGameboard.placeShip(2,2,2,2);
playerGameboard.placeShip(5,5,5,5);
playerGameboard.placeShip(7,7,7,7);

const computerGameboard = Gameboard();
computerGameboard.placeShip(8,1,8,1);
computerGameboard.placeShip(5,3,5,3);
computerGameboard.placeShip(2,6,2,6);
computerGameboard.placeShip(1,8,1,8);

const display = displayController(playerGameboard, computerGameboard);