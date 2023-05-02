export default function displayController(playerGameboard, computerGameboard) {
    const playerGrid = document.querySelector('.player-grid');
    const computerGrid = document.querySelector('.computer-grid');
    const message = document.querySelector('.message');
    const restartButton = document.querySelector('.restart');
    const shipyardLabels = document.querySelector('.shipyard-labels');
    const shipyard = document.querySelector('.shipyard');

    const messages = {
        messageSelectShip: 'Select a ship to place',
        messagePlaceShip: 'Select a starting space to place your ship',
        messagePlayGame: 'Click on the computer grid to attack',
        messagePlayerWins: 'You win!',
        messagePlayerLoses: 'You lose!'
    }

    function init() {
        for (let i = 0; i < 200; i++) {
            let square = document.createElement('div');
            square.classList.add("square");
            (i < 100) ? playerGrid.appendChild(square) : computerGrid.appendChild(square);
        }

        // remove following loop when finished (this displays computer's ships)
        computerGameboard.ships.forEach(ship => {
            for(let i = 0; i < ship.coordinates.length; i++) {
                let shipIndex = (ship.coordinates[i].y * 10) + ship.coordinates[i].x;
                computerGrid.children[shipIndex].classList.add('ship');
            }
        })
    };

    function updateMessage(displayMessage) {
        message.textContent = messages[displayMessage];
    }

    function playerAttack(target, isHit) {
        (isHit) ? computerGrid.children[target].classList.add('hit') : computerGrid.children[target].classList.add('miss');
    }

    function computerAttack(target, isHit) {
        let index = target.y * 10 + target.x;
        (isHit) ? playerGrid.children[index].classList.add('hit') : playerGrid.children[index].classList.add('miss');

    }

    function selectShip(targetShip) {
        targetShip.classList.add('selected');
        let rotateBtn = targetShip.previousElementSibling;
        rotateBtn.classList.remove('hide');
    }

    function rotateShip(rotateBtn) {
        rotateBtn.classList.toggle('rotateBtn-vertical');
        let ship = rotateBtn.nextElementSibling;
        ship.classList.toggle('rotate');
    }

    function hoverPlayerShip(target, shipLength, isHorizontal) {
        const playerGridArray = Array.from(playerGrid.children);
        for(let i = 0; i < shipLength; i++) {
            target.classList.add('hover');
            (isHorizontal) ? target = target.nextElementSibling : target = playerGridArray[playerGridArray.indexOf(target) + 10];
        }
    }

    function mouseoutPlayerShip(target, shipLength, isHorizontal) {
        const playerGridArray = Array.from(playerGrid.children);
        for(let i = 0; i < shipLength; i++) {
            target.classList.remove('hover');
            (isHorizontal) ? target = target.nextElementSibling : target = playerGridArray[playerGridArray.indexOf(target) + 10];
        }
    }

    function placePlayerShip(target, shipLength, isHorizontal, shipCount) {
        const playerGridArray = Array.from(playerGrid.children);
        for(let i = 0; i < shipLength; i++) {
            target.classList.add('selected');
            target.classList.remove('hover');
            (isHorizontal) ? target = target.nextElementSibling : target = playerGridArray[playerGridArray.indexOf(target) + 10];
        }
        let selectedShip = document.querySelector('.shipyard .selected');    
        selectedShip.classList.add('placed');
        selectedShip.previousElementSibling.classList.add('hide');
        selectedShip.classList.remove('selected');
        if(shipCount >= 5) {
            document.querySelectorAll('.shipyard .ship').forEach(ship => {
                ship.classList.remove('placed');
                ship.classList.remove('rotate');
            });
            shipyardLabels.classList.add('hide');
            shipyard.classList.add('hide');
        }
    }

    function endGame(winnerMessage) {
        updateMessage(winnerMessage);
        restartButton.classList.remove('hide');
    }

    function resetGame() {
        restartButton.classList.add('hide');
        shipyardLabels.classList.remove('hide');
        shipyard.classList.remove('hide');
        Array.from(playerGrid.children).forEach(child => playerGrid.removeChild(child));
        Array.from(computerGrid.children).forEach(child => computerGrid.removeChild(child));
        init();
    }

    return {
        init,
        updateMessage,
        playerAttack,
        computerAttack,
        selectShip,
        rotateShip,
        hoverPlayerShip,
        mouseoutPlayerShip,
        placePlayerShip,
        endGame,
        resetGame
    }
};