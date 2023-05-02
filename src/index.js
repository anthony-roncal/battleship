import '../src/style.css';
import displayController from './displayController';
import Gameboard from './Gameboard';
import Player from './Player';

const playerGrid = document.querySelector('.player-grid');
const computerGrid = document.querySelector('.computer-grid');

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
display.updateMessage('messageSelectShip');
addShipyardEventListeners();
let turn = 0;

const restartButton = document.querySelector('.restart');
restartButton.addEventListener('click', resetGame);

function randomizeComputerShips() {
    let ships = [5, 4, 3, 3, 2];
    let x = 0;
    let y = 0;
    let shipSpaces = [];
    while(ships.length > 0) {
        let isHorizontal = Math.floor(Math.random()*2) === 0;
        let shipLength = ships.shift();
        let validCoordsFound = false;
        while(!validCoordsFound) {
            if (isHorizontal) {
                x = Math.floor(Math.random() * (10 - shipLength));
                y = Math.floor(Math.random() * 10);
            } else {
                y = Math.floor(Math.random() * (10 - shipLength));
                x = Math.floor(Math.random() * 10);
            }
            let index = y*10 + x;
            for(let i = 0; i < shipLength; i++) {
                if((isHorizontal && shipSpaces.includes(index + i)) || (!isHorizontal && shipSpaces.includes(index + i*10))) {
                    validCoordsFound = false;
                    break;
                } else {
                    validCoordsFound = true;
                }
            }
        }
        let index = y*10 + x;
        for(let i = 0; i < shipLength; i++) {
            (isHorizontal) ? shipSpaces.push(index + i) : shipSpaces.push(index + i*10);
        }
        (isHorizontal) ? computerGameboard.placeShip(x, y, x + shipLength - 1, y) : computerGameboard.placeShip(x, y, x, y + shipLength - 1);
    }
}

function addShipyardEventListeners() {
    document.querySelectorAll('.shipyard .ship').forEach(ship => {
        if(!ship.classList.contains('placed'))
            ship.addEventListener('click', selectShip);
    });
}

function removeShipyardEventListeners() {
    document.querySelectorAll('.shipyard .ship').forEach(ship => ship.removeEventListener('click', selectShip));
}

function selectShip(e) {
    display.selectShip(e.target);
    isHorizontal = true;
    let rotateBtn = e.target.previousElementSibling;
    rotateBtn.addEventListener('click', rotateShip);
    selectedShipId = e.target.id;
    display.updateMessage('messagePlaceShip');
    removeShipyardEventListeners();
    removePlayerGridEventListeners();
    addPlayerGridEventListeners(shipLengths[selectedShipId]);
}

function rotateShip(e) {
    display.rotateShip(e.target);
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
                playerGridArray[index - i].classList.remove('valid');
            } else if (!isHorizontal && index - (i*10) > 0) {
                playerGridArray[index - (i*10)].classList.remove('valid');
            }
        }
    })
    document.querySelectorAll('.valid').forEach(square => {
        square.addEventListener('mouseover', hoverPlayerShip);
        square.addEventListener('mouseout', mouseoutPlayerShip);
        square.addEventListener('click', placePlayerShip, {once: true});
    })
}

function removePlayerGridEventListeners() {
    Array.from(playerGrid.children).forEach(square => {
        square.classList.remove('valid');
        square.removeEventListener('mouseover', hoverPlayerShip);
        square.removeEventListener('mouseout', mouseoutPlayerShip);
        square.removeEventListener('click', placePlayerShip, {once: true});
    })
}

function hoverPlayerShip(e) {
    display.hoverPlayerShip(e.target, shipLengths[selectedShipId], isHorizontal);
}

function mouseoutPlayerShip(e) {
    display.mouseoutPlayerShip(e.target, shipLengths[selectedShipId], isHorizontal);
}

function placePlayerShip(e) {
    let target = e.target;
    const playerGridArray = Array.from(playerGrid.children);
    let index = playerGridArray.indexOf(target);
    let x = index%10;
    let y = Math.floor(index/10);
    
    removePlayerShipEventListeners();
    (isHorizontal) ? 
        playerGameboard.placeShip(x, y, x + shipLengths[selectedShipId] - 1, y) : 
        playerGameboard.placeShip(x, y, x, y + shipLengths[selectedShipId] - 1);
    if(playerGameboard.ships.length < 5) {
        display.updateMessage('messageSelectShip');
        addShipyardEventListeners();
    } else if(playerGameboard.ships.length >= 5) {
        display.updateMessage('messagePlayGame');
        addComputerGridEventListeners();
    }
    display.placePlayerShip(target, shipLengths[selectedShipId], isHorizontal, playerGameboard.ships.length);
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
    Array.from(computerGrid.children).forEach(square => square.addEventListener('click', playerAttackListener, {once: true}));
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
    (winner === player) ? display.endGame('messagePlayerWins') : display.endGame('messagePlayerLoses');
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
    computerGameboard.ships.length = 0;
    randomizeComputerShips();
    turn = 0;
    display.resetGame();
    display.updateMessage('messageSelectShip');
    addShipyardEventListeners();
}