import {gameboardFactory} from '../gameboardFactory.js';

test('generates a blank gameboard', () => {
    const newBoard = gameboardFactory();
    let testArr = [];
    for (let i = 0; i < 100; i++) testArr.push({ship: null, isHit: false});
    expect(newBoard.board).toStrictEqual(testArr);
})

test('spaces can receive a hit', () => {
    const newBoard = gameboardFactory();
    newBoard.receiveHit(1);
    expect(newBoard.board[1].isHit).toBe(true);
})

test.only('gameboard can place a ship', () => {
    const newBoard = gameboardFactory();
    newBoard.placeShip('cruiser', 'vertical', 24);
    expect(newBoard.board[24].ship).toBe('cruiser');
    expect(newBoard.board[34].ship).toBe('cruiser');
    expect(newBoard.board[44].ship).toBe('cruiser');
})

test('cannot place ship with inadequate room', () => {

})

test('cannot place ship on occupied space', () => {

})

test('hits pass the hit to the corresponding ship', () => {

});

test('reports whether or not all ships have sunk', () => {

});
