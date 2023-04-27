import './style.css';
import displayController from './displayController';
import Gameboard from './Gameboard';
import Player from './Player';

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
const computerGrid = document.querySelector('.computer-grid');
let turn = 0;

// add event listeners to computer grid for player attacks
Array.from(computerGrid.children).forEach(square => {
    square.addEventListener('click', playerAttackListener);
})

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
    turn++;
    computerAttack();
}

function computerAttack() {
    let attack = computer.randomAttack();
    while (playerGameboard.receivedShots.some(a => (a.x === attack.x && a.y === attack.y))){
        try {
            attack = computer.randomAttack();
        }
        catch {}
    } 
    let isHit = playerGameboard.receiveAttack(attack);
    display.computerAttack(attack, isHit);
    turn++;
}
