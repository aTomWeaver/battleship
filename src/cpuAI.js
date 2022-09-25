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