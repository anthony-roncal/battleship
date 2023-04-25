const Ship = require('../src/Ship');

test('ship factory create a ship with length, hiCount, isSunk', () => {
    let ship = Ship(1);
    expect(ship).toHaveProperty('length');
    expect(ship).toHaveProperty('hitCount');
    expect(ship).toHaveProperty('hit');
    expect(ship).toHaveProperty('isSunk');
})

test('hits increment ship hitCount', () => {
    let ship = Ship(1);
    expect(ship.hit()).toBe(1);
})

test('isSunk returns false if hits < length', () => {
    let ship = Ship(2);
    ship.hit();
    expect(ship.isSunk()).toBe(false);
})

test('isSunk returns true if hits === length', () => {
    let ship = Ship(2);
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBe(true);
})