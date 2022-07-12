function gameboardFactory() {
    let _generateBlankBoard = () => {
        let arr = [];
        for (let i = 0; i < 100; i++) arr.push({hasShip: false, isHit: false})
        return arr;
    }
    let board = _generateBlankBoard();
    let hit
    return {board, hit}
}

export { gameboardFactory };
