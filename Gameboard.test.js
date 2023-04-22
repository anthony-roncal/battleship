const Gameboard = require('./gameboard');

test('place ship with length of 1', () => {
    let gameboard = Gameboard();
    let result = gameboard.placeShip(1,2,1,2);
    expect(result.x).toBe(1);
    expect(result.y).toBe(2);
    expect(result).toHaveProperty('ship');
    expect(result.ship.length).toBe(1);
    expect(result.ship.hitCount).toBe(0);
    expect(result.ship).toHaveProperty('isSunk');
})

test('receive a missed attack', () => {
    let gameboard = Gameboard();
    gameboard.placeShip(1, 1, 1, 1);
    expect(gameboard.ships[0].ship.isSunk()).toBeFalsy();
    expect(gameboard.receiveAttack(0, 0)).toBeFalsy();
    expect(gameboard.ships[0].ship.isSunk()).toBeFalsy();
    expect(gameboard.receivedShots[0].x).toBe(0);
    expect(gameboard.receivedShots[0].y).toBe(0);
})

test('receive a hit attack', () => {
    let gameboard = Gameboard();
    gameboard.placeShip(0, 0, 0, 0);
    expect(gameboard.ships[0].ship.isSunk()).toBeFalsy();
    expect(gameboard.receiveAttack(0, 0)).toBeTruthy();
    expect(gameboard.ships[0].ship.isSunk()).toBeTruthy();
    expect(gameboard.receivedShots[0].x).toBe(0);
    expect(gameboard.receivedShots[0].y).toBe(0);
})