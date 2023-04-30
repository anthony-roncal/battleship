export default function displayController(playerGameboard, computerGameboard) {
    const playerGrid = document.querySelector('.player-grid');
    const computerGrid = document.querySelector('.computer-grid');
    const message = document.querySelector('.message');
    const restartButton = document.querySelector('.restart');

    function init() {
        // init grids
        for (let i = 0; i < 200; i++) {
            let square = document.createElement('div');
            square.classList.add("square");
            (i < 100) ? square.textContent = i : square.textContent = (i - 100); // temp
            (i < 100) ? playerGrid.appendChild(square) : computerGrid.appendChild(square);
        }

        // prompt player to place ships
        message.textContent = 'Place your ships';

        // mark computer ship locations
        computerGameboard.ships.forEach(ship => {
            for(let i = 0; i < ship.coordinates.length; i++) {
                let shipIndex = (ship.coordinates[i].y * 10) + ship.coordinates[i].x;
                computerGrid.children[shipIndex].classList.add('ship');
            }
        })
    };

    function markPlayerShips() {
        playerGameboard.ships.forEach(ship => {
            let shipIndex = (ship.coordinates[0].y * 10) + ship.coordinates[0].x;
            playerGrid.children[shipIndex].classList.add('ship');
        })
    }

    function updateMessage() {
        message.textContent = 'Click on the computer grid to attack';
    }

    function playerAttack(target, isHit) {
        (isHit) ? computerGrid.children[target].classList.add('hit') : computerGrid.children[target].classList.add('miss');
    }

    function computerAttack(target, isHit) {
        let index = target.y * 10 + target.x;
        (isHit) ? playerGrid.children[index].classList.add('hit') : playerGrid.children[index].classList.add('miss');

    }

    function endGame(playerWon) {
        (playerWon) ? message.textContent = "You win!" : message.textContent = "You lose!";
        restartButton.classList.remove('hide');
    }

    function resetGame() {
        message.textContent = '';
        restartButton.classList.add('hide');
        Array.from(playerGrid.children).forEach(child => playerGrid.removeChild(child));
        Array.from(computerGrid.children).forEach(child => computerGrid.removeChild(child));
        init();
    }

    return {
        init,
        markPlayerShips,
        updateMessage,
        playerAttack,
        computerAttack,
        endGame,
        resetGame
    }
};