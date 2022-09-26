const getRandSpace = () => Math.floor(Math.random() * 100);

function _getTrajectory(attempts) {

}

export default function getCpuMove(cpu) {
  let choice;
  if (cpu.lastAttackResult === "HIT") {
    let randInt = Math.floor(Math.random() * 8);

    if (randInt < 2) {
      choice = cpu.lastTarget + 10; // attack down one space
    } else if (randInt < 4) {
      choice = cpu.lastTarget - 10; // up one space
    } else if (randInt < 6) {
      choice = cpu.lastTarget + 1; // right one space
    } else if (randInt < 8) {
      choice = cpu.lastTarget - 1; // left one space
    }
  } else {
    while (
      choice === undefined ||
      choice < 0 ||
      choice > 99 ||
      cpu.choice
    )
      choice = getRandSpace();
  }

  return choice;
}
