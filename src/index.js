import './style.css';
import displayController from './displayController';
import Gameboard from './Gameboard';
import Player from './Player';

const playerGrid = document.querySelector('.player-grid');
const computerGrid = document.querySelector('.computer-grid');

const messageSelectShip = 'Select a ship to place';
const messagePlaceShip = 'Select a starting space to place your ';
const messagePlayGame = 'Click on the computer grid to attack';
const messagePlayerWins = 'You win!';
const messagePlayerLoses = 'You lose!';

const shipLengths = {
    carrier: 5,
    battleship: 4,
    cruiser: 3,
    submarine: 3,
    destroyer: 2
}
let selectedShipId;
let isHorizontal = true;

const player = Player();
const playerGameboard = Gameboard();

const computer = Player();
const computerGameboard = Gameboard();
randomizeComputerShips();

const display = displayController(playerGameboard, computerGameboard);
display.init();
display.updateMessage(messageSelectShip);
addShipyardEventListeners();
let turn = 0;

const restartButton = document.querySelector('.restart');
restartButton.addEventListener('click', resetGame);

function randomizeComputerShips() {
    let ships = [5, 4, 3, 3, 2];
    let x = 0;
    let y = 0;
    while(ships.length > 0) {
        let isHorizontal = Math.floor(Math.random()*2) === 0;
        let currentShipLength = ships.shift();
        if (isHorizontal) {
            x = Math.floor(Math.random() * (10 - currentShipLength));
            y = Math.floor(Math.random() * 10);
            computerGameboard.placeShip(x, y, x + currentShipLength - 1, y);
        } else {
             y = Math.floor(Math.random() * (10 - currentShipLength));
             x = Math.floor(Math.random() * 10);
             computerGameboard.placeShip(x, y, x, y + currentShipLength - 1);
        }
    }
}

function addShipyardEventListeners() {
    document.querySelectorAll('.shipyard .ship').forEach(ship => ship.addEventListener('click', selectShip, {once: true}));
}

function removeShipyardEventListeners() {
    document.querySelectorAll('.shipyard .ship').forEach(ship => ship.removeEventListener('click', selectShip));
}

function selectShip(e) {
    e.target.classList.add('selected');
    isHorizontal = true;
    let rotateBtn = e.target.previousElementSibling;
    rotateBtn.classList.remove('hide');
    rotateBtn.addEventListener('click', rotateShip);
    selectedShipId = e.target.id;
    display.updateMessage(messagePlaceShip + selectedShipId);
    removeShipyardEventListeners();
    removePlayerGridEventListeners();
    addPlayerGridEventListeners(shipLengths[selectedShipId]);
}

function rotateShip(e) {
    e.target.classList.toggle('rotate-back');
    let ship = e.target.nextElementSibling;
    ship.classList.toggle('rotate');
    isHorizontal = !isHorizontal;
    removePlayerGridEventListeners();
    addPlayerGridEventListeners(shipLengths[selectedShipId]);
}

function addPlayerGridEventListeners(shipLength) {
    const playerGridArray = Array.from(playerGrid.children);
    playerGridArray.forEach(square => {
        let index = playerGridArray.indexOf(square);
        if((isHorizontal && index%10 <= 10-shipLength)
        || (!isHorizontal && Math.floor(index/10) <= 10-shipLength)) {
            square.classList.add('valid');
        }
    })
    document.querySelectorAll('.square.selected').forEach(square => {
        let index = playerGridArray.indexOf(square);
        for(let i = 0; i < shipLength; i++) {
            if (isHorizontal) {
                playerGridArray[index - i].classList.remove('valid')
            } else if (!isHorizontal && index - (i*10) > 0) {
                playerGridArray[index - (i*10)].classList.remove('valid');
            }
        }
    })
    document.querySelectorAll('.valid').forEach(square => {
        square.addEventListener('click', placePlayerShip, {once: true});
        square.addEventListener('mouseover', hoverPlayerShip);
        square.addEventListener('mouseout', mouseoutPlayerShip);
    })
}

function removePlayerGridEventListeners() {
    Array.from(playerGrid.children).forEach(square => {
        square.classList.remove('valid');
        square.removeEventListener('click', placePlayerShip, {once: true});
        square.removeEventListener('mouseover', hoverPlayerShip);
        square.removeEventListener('mouseout', mouseoutPlayerShip);
    })
}

function hoverPlayerShip(e) {
    let target = e.target;
    const playerGridArray = Array.from(playerGrid.children);
    for(let i = 0; i < shipLengths[selectedShipId]; i++) {
        target.classList.add('hover');
        (isHorizontal) ? target = target.nextElementSibling : target = playerGridArray[playerGridArray.indexOf(target) + 10];
    }
}

function mouseoutPlayerShip(e) {
    let target = e.target;
    const playerGridArray = Array.from(playerGrid.children);
    for(let i = 0; i < shipLengths[selectedShipId]; i++) {
        target.classList.remove('hover');
        (isHorizontal) ? target = target.nextElementSibling : target = playerGridArray[playerGridArray.indexOf(target) + 10];
    }
}

function placePlayerShip(e) {
    let target = e.target;
    const playerGridArray = Array.from(playerGrid.children);
    let index = playerGridArray.indexOf(target);
    let x = index%10;
    let y = Math.floor(index/10);
    for(let i = 0; i < shipLengths[selectedShipId]; i++) {
        target.classList.add('selected');
        target.classList.remove('hover');
        (isHorizontal) ? target = target.nextElementSibling : target = playerGridArray[playerGridArray.indexOf(target) + 10];
    }
    (isHorizontal) ? 
        playerGameboard.placeShip(x, y, x + shipLengths[selectedShipId] - 1, y) : 
        playerGameboard.placeShip(x, y, x, y + shipLengths[selectedShipId] - 1);
    let selectedShip = document.querySelector('.shipyard .selected');    
    selectedShip.classList.add('placed');
    selectedShip.previousElementSibling.classList.add('hide');
    selectedShip.classList.remove('selected');
    if(playerGameboard.ships.length < 5) {
        display.updateMessage(messageSelectShip);
        addShipyardEventListeners();
        removePlayerShipEventListeners();
    } else if(playerGameboard.ships.length >= 5) {
        removePlayerShipEventListeners();
        display.updateMessage(messagePlayGame);
        addComputerGridEventListeners();
        document.querySelectorAll('.shipyard .ship').forEach(ship => ship.classList.remove('placed'));
        display.toggleHideShipyard();
    }
}

function removePlayerShipEventListeners() {
    Array.from(playerGrid.children).forEach(square => {
        square.classList.remove('valid');
        square.removeEventListener('click', placePlayerShip, {once: true});
        square.removeEventListener('mouseover', hoverPlayerShip);
        square.removeEventListener('mouseout', mouseoutPlayerShip);
    })
}

function addComputerGridEventListeners() {
    Array.from(computerGrid.children).forEach(square => {
        square.addEventListener('click', playerAttackListener, {once: true});
    })
}

function playerAttackListener(e) {
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
    display.toggleHideShipyard();
    addShipyardEventListeners();
}