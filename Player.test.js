const Player = require('./Player');

test('attack enemy gameboard', () => {
    let player = Player();
    let attack = player.attack(0, 0);
    expect(attack.x).toBe(0);
    expect(attack.y).toBe(0);
})

test('computer makes random legal attack', () => {
    let computer = Player();
    let attack = computer.randomAttack();
    expect(attack.x).toBeGreaterThanOrEqual(0);
    expect(attack.y).toBeLessThan(10);
})