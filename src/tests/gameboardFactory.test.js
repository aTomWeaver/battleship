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
    const firstBoard = gameboardFactory();
    firstBoard.placeShip('cruiser', 'vertical', 24);
    expect(firstBoard.board[24].ship).toBe('cruiser');
    expect(firstBoard.board[34].ship).toBe('cruiser');
    expect(firstBoard.board[44].ship).toBe('cruiser');
    firstBoard.placeShip('destroyer', 'horizontal', 7);
    expect(firstBoard.board[7].ship).toBe('destroyer');
    expect(firstBoard.board[8].ship).toBe('destroyer');
})

test('cannot place ship with inadequate room', () => {

})

test('cannot place ship on occupied space', () => {

})

test('hits pass the hit to the corresponding ship', () => {

});

// test('reports whether or not all ships have sunk', () => {

// });
