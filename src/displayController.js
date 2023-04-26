export default function displayController(playerGameboard, computerGameboard) {

    (function init() {
        // init grids
        const playerGrid = document.querySelector('.player-grid');
        const computerGrid = document.querySelector('.computer-grid');

        for (let i = 0; i < 200; i++) {
            let square = document.createElement('div');
            square.setAttribute('style', `width: 40px; height: 40px; border: solid 1px black; box-sizing: border-box;`);
            square.classList.add("square");
            (i < 100) ? square.textContent = i : square.textContent = (i - 100);
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

    return {
    }
};