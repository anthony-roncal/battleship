import './style.css';
import displayController from './displayController';
import Gameboard from './Gameboard';
import Player from './Player';

const playerGrid = document.querySelector('.player-grid');
const computerGrid = document.querySelector('.computer-grid');

const messageSelectShip = 'Select a ship to place';
const messagePlaceShip = 'Select a space to place the ship';
const messagePlayGame = 'Click on the computer grid to attack';
const messagePlayerWins = 'You win!';
const messagePlayerLoses = 'You lose!';

const player = Player();
const playerGameboard = Gameboard();

const computer = Player();
const computerGameboard = Gameboard();
computerGameboard.placeShip(8,1,8,3);
computerGameboard.placeShip(3,3,6,3);
computerGameboard.placeShip(3,6,5,6);
computerGameboard.placeShip(1,4,1,8);
computerGameboard.placeShip(7,8,8,8);

const display = displayController(playerGameboard, computerGameboard);
display.init();
display.updateMessage(messageSelectShip);
addShipyardEventListeners();
let turn = 0;

const restartButton = document.querySelector('.restart');
restartButton.addEventListener('click', resetGame);

function addShipyardEventListeners() {
    document.querySelectorAll('.shipyard .ship').forEach(ship => ship.addEventListener('click', selectShip));
}

function removeShipyardEventListeners() {
    document.querySelectorAll('.shipyard .ship').forEach(ship => ship.removeEventListener('click', selectShip));
}

function selectShip(e) {
    // highlight selected ship
    e.target.classList.add('selected');
    // let player select space on grid to place ship
    display.updateMessage(messagePlaceShip);
    addPlayerGridEventListeners();
    // don't let player select another ship without placing selected ship first
    removeShipyardEventListeners();
}

function addPlayerGridEventListeners() {
    Array.from(playerGrid.children).forEach(square => {
        square.addEventListener('click', placePlayerShip, {once: true});
    })
}

function placePlayerShip(e) {
    let index = Array.from(playerGrid.children).indexOf(e.target);
    let x = index%10;
    let y = Math.floor(index/10);
    e.target.classList.add('selected');
    playerGameboard.placeShip(x, y, x, y);
    // display.markPlayerShips();
    if(playerGameboard.ships.length < 5) {
        // if player has more ships to place, let player select another ship
        display.updateMessage(messageSelectShip);
        addShipyardEventListeners();
        removePlayerShipEventListeners();
    } else if(playerGameboard.ships.length >= 5) {
        // if all ships are placed, start game
        removePlayerShipEventListeners();
        display.updateMessage(messagePlayGame);
        addComputerGridEventListeners();
    }
}

function removePlayerShipEventListeners() {
    Array.from(playerGrid.children).forEach(square => {
        square.removeEventListener('click', placePlayerShip, {once: true});
    })
}

function addComputerGridEventListeners() {
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
    (winner === player) ? display.updateMessage(messagePlayerWins) : display.updateMessage(messagePlayerLoses);
    display.showRestartButton();
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
    display.updateMessage(messageSelectShip);
    addShipyardEventListeners();
}