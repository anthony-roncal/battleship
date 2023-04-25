const PlayerFactory = () => {
    
    function attack(x, y) {
        return {
            x: x,
            y: y
        }
    }

    function randomAttack() {
        return {
            x: Math.floor(Math.random() * 10),
            y: Math.floor(Math.random() * 10)
        }
    }

    return {
        attack,
        randomAttack
    }
}

module.exports = PlayerFactory;