import './style.css';

let size = 10;
let side = 300/size;
const playerGrid = document.querySelector('.player-grid');
const computerGrid = document.querySelector('.computer-grid');

function createGrid(size, div){
    // remove any other elements before generating grids
    Array.from(div.children).forEach(child => {
        div.removeChild(child);
    })
    // generate grid
    for (let i = 0; i < Math.pow(size, 2); i++) {
        let square = document.createElement('div');
        side = 300/size;
        square.setAttribute('style', `width: ${side}px; height: ${side}px; border: solid 1px black; box-sizing: border-box;`);
        square.classList.add("square");
        div.appendChild(square);
    }
}

createGrid(size, playerGrid);
createGrid(size, computerGrid);
