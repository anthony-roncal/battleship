export default function displayController(playerGameboard, computerGameboard) {
    const playerGrid = document.querySelector('.player-grid');
    const computerGrid = document.querySelector('.computer-grid');
    const message = document.querySelector('.message');

    (function init() {
        // init grids
        for (let i = 0; i < 200; i++) {
            let square = document.createElement('div');
            square.setAttribute('style', `width: 40px; height: 40px; border: solid 1px black; box-sizing: border-box;`);
            square.classList.add("square");
            (i < 100) ? square.textContent = i : square.textContent = (i - 100); // temp
            (i < 100) ? playerGrid.appendChild(square) : computerGrid.appendChild(square);
        }

        // mark ship locations
        playerGameboard.ships.forEach(ship => {
            let shipIndex = (ship.y * 10) + ship.x;
            playerGrid.children[shipIndex].classList.add('ship');
        })
        computerGameboard.ships.forEach(ship => {
            let shipIndex = (ship.y * 10) + ship.x;
            computerGrid.children[shipIndex].classList.add('ship');
        })
    })();

    function playerAttack(target, isHit) {
        (isHit) ? computerGrid.children[target].classList.add('hit') : computerGrid.children[target].classList.add('miss');
    }

    function computerAttack(target, isHit) {
        let index = target.y * 10 + target.x;
        (isHit) ? playerGrid.children[index].classList.add('hit') : playerGrid.children[index].classList.add('miss');

    }

    return {
        playerAttack,
        computerAttack
    }
};