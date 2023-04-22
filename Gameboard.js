const Ship = require('./Ship');

const GameboardFactory = () => { 

    let ships = [];
    
    function placeShip(startX, startY, endX, endY) {
        if(startX === endX && startY === endY) {
            let newShip = Ship(1);
            ships.push({
                x: startX,
                y: startY,
                ship: newShip
            });
        }
        return ships[ships.length-1];
    }

    return {
        placeShip
    }
}

module.exports = GameboardFactory;