const Gameboard = require('./gameboard');

test('test', () => {
    let gameboard = Gameboard();
    let result = gameboard.placeShip(1,2,1,2);
    expect(result.x).toBe(1);
    expect(result.y).toBe(2);
    expect(result).toHaveProperty('ship');
    expect(result.ship.length).toBe(1);
    expect(result.ship.hitCount).toBe(0);
    expect(result.ship).toHaveProperty('isSunk');
})