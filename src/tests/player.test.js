import { Player } from "../player.js";

test("Player can hit a space", () => {
  const playerOne = new Player("player 1");
  const cpu = new Player("cpu");
  cpu.attack(playerOne, 4);
  expect(playerOne.board.spaces[4].isHit).toBe(true);

  cpu.board.placeShip('destroyer', 'horizontal', 6);
  playerOne.attack(cpu, 6);
  playerOne.attack(cpu, 7);
  expect(cpu.board.spaces[6].isHit).toBe(true);
  expect(cpu.board.allSunken()).toBe(true);
});
