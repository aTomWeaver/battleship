import {targetShip} from '../cpuAI.js'

test("generates a valid targetShip", () => {
    const ship = new targetShip(0, 1);
    expect(ship.orientation).toBe('horizontal');
    expect(ship.spaces).toStrictEqual([0, 1]);
});

