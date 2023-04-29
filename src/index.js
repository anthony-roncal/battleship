import './style.css';
import displayController from './displayController';
import Gameboard from './Gameboard';
import Player from './Player';

const computerGrid = document.querySelector('.computer-grid');

const player = Player();
const playerGameboard = Gameboard();
playerGameboard.placeShip(0,0,0,0);
playerGameboard.placeShip(2,2,2,2);
playerGameboard.placeShip(5,5,5,5);
playerGameboard.placeShip(7,7,7,7);

const computer = Player();
const computerGameboard = Gameboard();
computerGameboard.placeShip(8,1,8,1);
computerGameboard.placeShip(5,3,5,3);
computerGameboard.placeShip(2,6,2,6);
computerGameboard.placeShip(1,8,1,8);

const display = displayController(playerGameboard, computerGameboard);
display.init();
addGridEventListeners();
let turn = 0;

const restartButton = document.querySelector('.restart');
restartButton.addEventListener('click', resetGame);

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
    playerGameboard.receivedShots = [];
    playerGameboard.ships.forEach(ship => ship.ship.hitCount = 0);
    computerGameboard.receivedShots = [];
    computerGameboard.ships.forEach(ship => ship.ship.hitCount = 0);
    turn = 0;
    display.resetGame();
    addGridEventListeners();
}