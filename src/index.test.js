import {shipFactory} from './index.js'


test('returns length and array of hits', () => {
    const ship1 = shipFactory([1, 2, 3]);
    ship1.hit(1);
    ship1.hit(2)
    // expect(ship1.isSunk).toBe(false);
    expect(ship1.hits).toStrictEqual([1, 2]);
})