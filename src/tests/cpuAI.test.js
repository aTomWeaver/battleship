import {targetShip} from '../cpuAI.js'

test("generates a valid targetShip", () => {
    const ship = new targetShip([20, 42, 63], 20);
    expect(ship.orientation).toBe('none');
    expect(ship.spaces).toStrictEqual([20]);
    expect(ship.unavailableSpaces)
        .toStrictEqual([20, 42, 63])
});

 test("tests validity of targets", () => {
    // ship with only one hit
    const ship = new targetShip([80, 90], 90);
    expect(ship.getTarget()).toBe(91)
    // horizontal ship
    const ship2 = new targetShip([35, 45, 55], 45, 46);
    expect(ship2.getTarget()).toBe(47);
    // vertical ship
    const ship3 = new targetShip([19, 29, 39], 19, 29);
    expect(ship3.getTarget()).toBe(9)
});