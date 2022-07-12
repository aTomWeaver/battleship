import {gameboardFactory} from '../gameboardFactory.js';

test('generates a blank gameboard', () => {
    const newBoard = gameboardFactory();
    let testArr = [];
    for (let i = 0; i < 100; i++) testArr.push({hasShip: false, isHit: false});
    expect(newBoard.board).toStrictEqual(testArr);
})

test('spaces can be hit', () => {
    const newBoard = gameboardFactory();
    newBoard.hit(1);
    expect(newBoard.board[1].isHit).toBe(true);
})