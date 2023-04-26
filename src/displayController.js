export default function displayController(playerGameboard, computerGameboard) {

    (function init() {
        // init grids
        const playerGrid = document.querySelector('.player-grid');
        const computerGrid = document.querySelector('.computer-grid');

        for (let i = 0; i < 100; i++) {
            let square = document.createElement('div');
            let squareC = document.createElement('div');
            square.setAttribute('style', `width: 40px; height: 40px; border: solid 1px black; box-sizing: border-box;`);
            square.classList.add("square");
            square.textContent = i;
            squareC.setAttribute('style', `width: 40px; height: 40px; border: solid 1px black; box-sizing: border-box;`);
            squareC.classList.add("square");
            squareC.textContent = i;
            playerGrid.appendChild(square);
            computerGrid.appendChild(squareC);
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

    return {
    }
};