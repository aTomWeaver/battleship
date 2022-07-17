import {gameboardFactory} from '../gameboardFactory.js';

test('generates a blank gameboard', () => {
    const newBoard = gameboardFactory();
    let testArr = [];
    for (let i = 0; i < 100; i++) testArr.push({ship: null, isHit: false});
    expect(newBoard.board).toStrictEqual(testArr);
})

test('gameboard can place a ship', () => {
    const firstPlayer = gameboardFactory();
    firstPlayer.placeShip('cruiser', 'vertical', 24);
    expect(firstPlayer.board[24].ship).toBe('cruiser');
    expect(firstPlayer.board[34].ship).toBe('cruiser');
    expect(firstPlayer.board[44].ship).toBe('cruiser');
    firstPlayer.placeShip('destroyer', 'horizontal', 7);
    expect(firstPlayer.board[7].ship).toBe('destroyer');
    expect(firstPlayer.board[8].ship).toBe('destroyer');
})

test('spaces can receive a hit once and pass it to the ship', () => {
    const playerOne = gameboardFactory();
    playerOne.placeShip('destroyer', 'horizontal', 1);
    playerOne.receiveHit(1);
    playerOne.receiveHit(1);
    // a hit in the same location is not passed to ship hit() function 
    expect(playerOne.board[1].ship).toBe('destroyer');
    expect(playerOne.ships['destroyer'].isSunk()).not.toBe(true);
    playerOne.receiveHit(2);
    expect(playerOne.board[1].isHit).toBe(true);
    expect(playerOne.ships['destroyer'].isSunk()).toBe(true);
})

test('cannot place ship with inadequate space', () => {
    const newPlayer = gameboardFactory();
    // cannot place a ship that overhangs a row
    newPlayer.placeShip('carrier', 'horizontal', 7);
    expect(newPlayer.board[7].ship).not.toBe('carrier');
    // cannot place a ship that overhangs a column
    newPlayer.placeShip('cruiser', 'vertical', 89);
    expect(newPlayer.board[99].ship).not.toBe('cruiser');
})


test.only('cannot place a ship on top of an existing ship', () => {
    const newPlayer = gameboardFactory()
    newPlayer.placeShip('carrier', 'horizontal', 4);
    newPlayer.placeShip('destroyer', 'horizontal', 5);
    console.log(newPlayer.board)
});

test('reports whether or not all ships have sunk', () => {

});
