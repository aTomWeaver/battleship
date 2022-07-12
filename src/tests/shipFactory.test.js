import {shipFactory} from '../shipFactory.js';

test('ship type sets correct length', () => {
    const carrier = shipFactory('carrier', [1, 2, 3, 4, 5]);
    expect(carrier.length).toBe(5);
    const destroyer = shipFactory('destroyer', [6, 7]);
    expect(destroyer.length).toBe(2);
    const cruiser = shipFactory('cruiser', [1, 2, 3]);
    expect(cruiser.length).toBe(3);
    const submarine = shipFactory('submarine', [1, 2, 3]);
    expect(submarine.length).toBe(3);
    const battleship = shipFactory('battleship', [1, 2, 3, 4]);
    expect(battleship.length).toBe(4);
})

test('ship objects updates hits with successful tryHit call', () => {
    const ship = shipFactory('submarine',[1, 2, 3]);
    const ship2 = shipFactory('cruiser', [6, 7, 8, 9]);
    ship.tryHit(1);
    ship.tryHit(2);
    ship2.tryHit(4);
    // expect(ship.isSunk).toBe(false);
    expect(ship.hits).toStrictEqual([1, 2]);
    expect(ship2.hits).toStrictEqual([]);
    expect(ship.hits).not.toStrictEqual([1, 2, 3])
});

test('tryHit returns true when hit and false when not hit', () => {
    const ship = shipFactory('submarine', [1, 2, 3]);
    expect(ship.tryHit(2)).toBe(true);
    expect(ship.tryHit(4)).toBe(false);
    expect(ship.tryHit(0)).toBe(false);
})

test('tryHit returns false if it has already been hit', () => {
    const ship = shipFactory('destoyer', [1, 2])
    expect(ship.tryHit(1)).toBe(true);
    expect(ship.tryHit(1)).toBe(false);
} )

test('ship sinks when all positions are hit', () => {
    const ship = shipFactory('submarine', [8, 9, 10]);
    ship.tryHit(10);
    ship.tryHit(8);
    ship.tryHit(7);
    expect(ship.isSunk()).not.toBe(true);
    ship.tryHit(9);
    expect(ship.isSunk()).toBe(true);
})

