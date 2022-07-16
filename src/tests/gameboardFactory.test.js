import {gameboardFactory} from '../gameboardFactory.js';
import {shipFactory} from '../shipFactory.js'

test('generates a blank gameboard', () => {
    const newBoard = gameboardFactory();
    let testArr = [];
    for (let i = 0; i < 100; i++) testArr.push({ship: null, isHit: false});
    expect(newBoard.board).toStrictEqual(testArr);
})

test('gameboard can place a ship', () => {
    const firstBoard = gameboardFactory();
    firstBoard.placeShip('cruiser', 'vertical', 24);
    expect(firstBoard.board[24].ship).toBe('cruiser');
    expect(firstBoard.board[34].ship).toBe('cruiser');
    expect(firstBoard.board[44].ship).toBe('cruiser');
    firstBoard.placeShip('destroyer', 'horizontal', 7);
    expect(firstBoard.board[7].ship).toBe('destroyer');
    expect(firstBoard.board[8].ship).toBe('destroyer');
})

test('spaces can receive a hit once and pass it to the ship', () => {
    const playerOne = gameboardFactory();
    playerOne.placeShip('destroyer', 'horizontal', 1);
    playerOne.receiveHit(1);
    playerOne.receiveHit(1);
    // a hit in the same location is not passed to ship hit() function 
    expect(playerOne.ships['destroyer'].isSunk()).not.toBe(true);
    playerOne.receiveHit(2);
    expect(playerOne.board[1].isHit).toBe(true);
    expect(playerOne.ships['destroyer'].isSunk()).toBe(true);
})

test('cannot place ship with inadequate room', () => {

})

test('cannot place ship on occupied space', () => {

})

test('hits pass the hit to the corresponding ship', () => {

});

test('reports whether or not all ships have sunk', () => {

});
