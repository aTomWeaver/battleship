import {shipFactory} from './shipFactory.js'

function gameboardFactory() {
    let _generateBlankBoard = () => {
        let arr = [];
        for (let i = 0; i < 100; i++) arr.push({ship: null, isHit: false})
        return arr;
    }
    let board = _generateBlankBoard();
    const placeShip = (type, direction, origin) => {
        const newShip = shipFactory(type)
    }
    let receiveHit = (loc) => {
        board[loc].isHit = true;
    }
    return {board, receiveHit, placeShip}
}

export { gameboardFactory };
