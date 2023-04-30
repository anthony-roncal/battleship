const Ship = require('./Ship');

const GameboardFactory = () => { 

    let ships = [];
    let receivedShots = [];
    
    function placeShip(startX, startY, endX, endY) {
        if(startX === endX && startY === endY) {
            // ship takes up 1 space
            let newShip = Ship(1);
            ships.push({
                coordinates: [{x: startX, y: startY}],
                ship: newShip
            });
        } else if(startX !== endX && startY === endY) {
            // horizontal ship placement
            let shipLength = endX - startX;
            let newShip = Ship(shipLength);
            let coordinates = [];
            for(let i = 0; i <= shipLength; i++) {
                coordinates.push({
                    x: startX + i,
                    y: startY
                })
            }
            ships.push({
                coordinates: coordinates,
                ship: newShip
            });
        } else if(startX === endX && startY !== endY) {
            // vertical ship placement
            let shipLength = endY - startY;
            let newShip = Ship(shipLength);
            let coordinates = [];
            for(let i = 0; i <= shipLength; i++) {
                coordinates.push({
                    x: startX,
                    y: startY + i
                })
            }
            ships.push({
                coordinates: coordinates,
                ship: newShip
            });
        } else if(startX !== endX && startY !== endY) {
            // invalid (diagonal) ship placement
            console.log('invalid ship placement!');
        }
        return ships[ships.length-1];
    }

    function receiveAttack({x, y}) {
        receivedShots.push({x, y});
        let isHit = false;
        ships.forEach(ship => {
            if(ship.x === x && ship.y === y) {
                ship.ship.hit();
                isHit = true;
            }
        })
        return isHit;
    }

    function allSunk() {
        let allSunk = true;
        for(let i = 0; i < ships.length; i++) {
            if (!ships[i].ship.isSunk()) {
                allSunk = false;
            }
        }
        return allSunk;
    }

    return {
        ships,
        receivedShots,
        placeShip,
        receiveAttack,
        allSunk
    }
}

module.exports = GameboardFactory;