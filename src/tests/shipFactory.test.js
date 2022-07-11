import {shipFactory} from '../shipFactory.js';


test('ship objects take hits with hit function', () => {
    const ship = shipFactory([1, 2, 3]);
    const ship2 = shipFactory([6, 7, 8, 9]);
    ship.hit(1);
    ship.hit(2);
    ship2.hit(4);
    // expect(ship.isSunk).toBe(false);
    expect(ship.hits).toStrictEqual([1, 2]);
    expect(ship2.hits).toStrictEqual([]);
    expect(ship.hits).not.toStrictEqual([1, 2, 3])
});

test('ships return true when hit', () => {
    const ship = shipFactory([1, 2, 3]);
    expect(ship.hit()).toBe(true);
})

test('ship sinks when all positions are hit', () => {
    const ship = shipFactory([8, 9, 10]);
    ship.hit(10);
    ship.hit(8);
    ship.hit(7);
    expect(ship.isSunk()).not.toBe(true);
    ship.hit(9);
    expect(ship.isSunk()).toBe(true);
})

