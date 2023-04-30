const Ship = require('./Ship');

const GameboardFactory = () => { 

    let ships = [];
    let receivedShots = [];
    
    function placeShip(startX, startY, endX, endY) {
        let coordinates = [];
        let newShip;
        if(startX === endX && startY === endY) {
            // ship takes up 1 space
            let shipLength = 1;
            newShip = Ship(shipLength);
            coordinates.push({x: startX, y: startY});
        } else if(startX !== endX && startY === endY) {
            // horizontal ship placement
            let shipLength = endX - startX;
            newShip = Ship(shipLength);
            for(let i = 0; i <= shipLength; i++) {
                coordinates.push({
                    x: startX + i,
                    y: startY
                })
            }
        } else if(startX === endX && startY !== endY) {
            // vertical ship placement
            let shipLength = endY - startY;
            newShip = Ship(shipLength);
            for(let i = 0; i <= shipLength; i++) {
                coordinates.push({
                    x: startX,
                    y: startY + i
                })
            }
        } else if(startX !== endX && startY !== endY) {
            // invalid (diagonal) ship placement
            return;
        }
        ships.push({
            coordinates: coordinates,
            ship: newShip
        });
        return ships[ships.length-1];
    }

    function receiveAttack({x, y}) {
        receivedShots.push({x, y});
        let isHit = false;
        ships.forEach(ship => {
            for(let i = 0; i < ship.coordinates.length; i++) {
                if(ship.coordinates[i].x === x && ship.coordinates[i].y === y) {
                    ship.ship.hit();
                    isHit = true;
                }
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