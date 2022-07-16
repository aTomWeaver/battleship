import {shipFactory} from './shipFactory.js'

function gameboardFactory() {
    let _generateBlankBoard = () => {
        let arr = [];
        for (let i = 0; i < 100; i++) arr.push({ship: null, isHit: false})
        return arr;
    }
    let ships = {};
    let board = _generateBlankBoard();
    const placeShip = (type, direction, origin) => {
        const newShip = shipFactory(type);
        ships[type] = newShip; // appends new ship to ships object
        if (direction === 'vertical') {
            for (let i = 0; i <= newShip.length * 10; i += 10) {
               board[origin + i].ship = type;
            }
        } else {
            for (let i = 0; i < newShip.length; i++) {
                board[origin + i].ship = type;
            }
        }
    }

    let receiveHit = (x) => {
        let pos = board[x];
        if (!pos.isHit && pos.ship) {
            pos.isHit = true;
            ships[pos.ship].hit();
        } else {
            console.log('position has already been hit');
            return;
        }
    }

    return {board, receiveHit, placeShip, ships}
}

export { gameboardFactory }
