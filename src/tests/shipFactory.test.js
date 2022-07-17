import {shipFactory} from '../shipFactory.js';

test('ship type sets correct length', () => {
    const carrier = shipFactory('carrier');
    expect(carrier.length).toBe(5);
    const destroyer = shipFactory('destroyer');
    expect(destroyer.length).toBe(2);
    const cruiser = shipFactory('cruiser');
    expect(cruiser.length).toBe(3);
    const submarine = shipFactory('submarine');
    expect(submarine.length).toBe(3);
    const battleship = shipFactory('battleship');
    expect(battleship.length).toBe(4);
})

test('ship objects updates hits with successful hit call', () => {
    const ship = shipFactory('submarine');
    const ship2 = shipFactory('cruiser');
    ship.hit();
    ship.hit();
    ship2.hit();
    // expect(ship.isSunk).toBe(false);
    expect(ship.hits).toStrictEqual([0, 1]);
    expect(ship2.hits).toStrictEqual([0]);
});

test('ship sinks when all positions are hit', () => {
    const ship = shipFactory('submarine');
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).not.toBe(true);
    ship.hit();
    expect(ship.isSunk()).toBe(true);
})

