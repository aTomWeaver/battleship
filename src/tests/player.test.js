import { Player } from "../player.js";

test("Player can hit a space", () => {
  const playerOne = new Player("player 1");
  const cpu = new Player("cpu");
  expect(cpu.attack()).toBe(`Hello, I am cpu`);
  playerOne.board.receiveHit(3);
  console.log(playerOne.board.board)
  expect(playerOne.board.board[3].isHit).toBe(true);
});
