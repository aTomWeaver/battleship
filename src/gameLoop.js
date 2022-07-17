import { Player } from "./player.js";

const game = () => {
  const playerOne = new Player("Player 1");
  const cpu = new Player("CPU");
  //   console.log(playerOne.board.ships)
  //     playerOne.board.placeShip(
  //       "carrier",
  //       prompt("carrier orientation?"),
  //       parseInt(prompt("carrier space?"))
  //     )
  //     console.log(playerOne.board)

  const getShipPlacement = (type) => {
    while (!playerOne.board.ships[type]) {
      playerOne.board.placeShip(
        type,
        prompt(`${type} orientation?`),
        parseInt(prompt(`${type} space?`))
      );
    }
  };
  while (!playerOne.board.ships["carrier"]) {
    playerOne.board.placeShip(
      "carrier",
      prompt("carrier orientation?"),
      parseInt(prompt("carrier space?"))
    );
    console.log(playerOne.board.spaces);
  }
  //   while (!playerOne.board.ships.includes("battleship"))
  //     playerOne.board.placeShip(
  //       "battleship",
  //       prompt("battleship orientation?"),
  //       parseInt(prompt("battleship space?"))
  //     );
  //   while (!playerOne.board.ships.includes("cruiser"))
  //     playerOne.board.placeShip(
  //       "cruiser",
  //       prompt("cruiser orientation?"),
  //       parseInt(prompt("cruiser space?"))
  //     );
  //   while (!playerOne.board.ships.includes("submarine"))
  //     playerOne.board.placeShip(
  //       "submarine",
  //       prompt("submarine orientation?"),
  //       parseInt(prompt("submarine space?"))
  //     );
  //   while (!playerOne.board.ships.includes("destroyer"))
  //     playerOne.board.placeShip(
  //       "destroyer",
  //       prompt("destroyer orientation?"),
  //       parseInt(prompt("destroyer space?"))
  //     );

  let gameIsOver = false;
};

export { game };
