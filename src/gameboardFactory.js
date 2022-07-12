function gameboardFactory() {
    let _generateBlankBoard = () => {
        let arr = [];
        for (let i = 0; i < 100; i++) arr.push({ship: null, isHit: false})
        return arr;
    }
    let board = _generateBlankBoard();
    let allShipsSunk = false;
    let receiveHit = (loc) => {
        board[loc].isHit = true;
    }
    return {board, receiveHit, allShipsSunk}
}

export { gameboardFactory };
