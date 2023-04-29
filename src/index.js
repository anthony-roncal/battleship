import './style.css';
import displayController from './displayController';
import Gameboard from './Gameboard';
import Player from './Player';

const playerGrid = document.querySelector('.player-grid');
const computerGrid = document.querySelector('.computer-grid');

const player = Player();
const playerGameboard = Gameboard();

const computer = Player();
const computerGameboard = Gameboard();
computerGameboard.placeShip(8,1,8,1);
computerGameboard.placeShip(6,3,6,3);
computerGameboard.placeShip(3,6,3,6);
computerGameboard.placeShip(1,8,1,8);

const display = displayController(playerGameboard, computerGameboard);
display.init();
addPlayerShipEventListeners();
let turn = 0;

const restartButton = document.querySelector('.restart');
restartButton.addEventListener('click', resetGame);

function addPlayerShipEventListeners() {
    Array.from(playerGrid.children).forEach(square => {
        square.addEventListener('click', placePlayerShip, {once: true});
    })
}

function removePlayerShipEventListeners() {
    Array.from(playerGrid.children).forEach(square => {
        square.removeEventListener('click', placePlayerShip, {once: true});
    })
}

function placePlayerShip(e) {
    let index = Array.from(playerGrid.children).indexOf(e.target);
    let x = index%10;
    let y = Math.floor(index/10);
    playerGameboard.placeShip(x, y, x, y);
    display.markPlayerShips();
    if(playerGameboard.ships.length >= 4) {
        removePlayerShipEventListeners();
        display.updateMessage();
        addGridEventListeners();
    }
}

function addGridEventListeners() {
    Array.from(computerGrid.children).forEach(square => {
        square.addEventListener('click', playerAttackListener, {once: true});
    })
}

function playerAttackListener(e) {
    // only attack on player's turn
    if(turn % 2 === 0)
        playerAttack(e);
}

function playerAttack(e) {
    let index = Array.from(computerGrid.children).indexOf(e.target);
    let attack = player.attack(index%10, Math.floor(index/10));
    let isHit = computerGameboard.receiveAttack(attack);
    display.playerAttack(index, isHit);
    if(computerGameboard.allSunk()) 
        endGame(player);
    turn++;
    computerAttack();
}

function computerAttack() {
    let attack = computer.randomAttack();
    while (playerGameboard.receivedShots.length < 100 && (playerGameboard.receivedShots.some(a => (a.x === attack.x && a.y === attack.y)))){
        try {
            attack = computer.randomAttack();
        }
        catch {}
    } 
    let isHit = playerGameboard.receiveAttack(attack);
    display.computerAttack(attack, isHit);
    if(playerGameboard.allSunk()) 
        endGame(computer);
    turn++;
}

function endGame(winner) {
    (winner === player) ? display.endGame(true) : display.endGame(false);
    Array.from(computerGrid.children).forEach(square => {
        square.removeEventListener('click', playerAttackListener, {once: true});
    })
}

function resetGame() {
    playerGameboard.receivedShots.length = 0;
    playerGameboard.ships.forEach(ship => ship.ship.hitCount = 0);
    playerGameboard.ships.length = 0;
    computerGameboard.receivedShots.length = 0;
    computerGameboard.ships.forEach(ship => ship.ship.hitCount = 0);
    turn = 0;
    display.resetGame();
    addPlayerShipEventListeners();
}