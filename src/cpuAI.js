class targetShip {
  constructor(firstHit) {
    this.orientation = 'unknown';
    this.spaces = [firstHit];
  }
  set orientation(secondHit) {
    if (secondHit - this.spaces[0] == 1 || secondHit - this.spaces[0] == -1) {
      this.orientation = 'horizontal';
    } else {
      this.orientation = 'vertical'
    }
  }
}


const getRandSpace = () => Math.floor(Math.random() * 100);



function _getTrajectory(attempts) {

}

function cpuAttack(cpu) {
  let choice;
  if (cpu.lastAttackResult === 'HIT') {
    let randInt = Math.floor(Math.random() * 8);

    if (randInt < 2) {
      choice = cpu.attempts[cpu.attempts.length - 1] + 10; // attack down one space  
    } else if (randInt < 4) {
      choice = cpu.attempts[cpu.attempts.length - 1] - 10 // up one space
    } else if (randInt < 6) {
      choice = cpu.attempts[cpu.attempts.length - 1] + 1 // right one space
    } else if (randInt < 8) {
      choice = cpu.attempts[cpu.attempts.length - 1] - 1 // left one space
    }
  }
  return choice;
}