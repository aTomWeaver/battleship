const coinflip = () => Math.floor(Math.random() * 2);

class targetShip {
  constructor(...hits) {
    this.spaces = [...hits];
  }
  get orientation() {
    console.log(this.spaces.length)
    console.log(this.spaces)
    if (this.spaces.length < 2) {
      return "none";
    } else if (Math.abs(this.spaces[1] - this.spaces[0]) == 1) {
      return "horizontal";
    } else {
      return "vertical";
    }
  }
  getTarget() {
    if (this.orientation == 'none') {

    } else {
      let lowestValHit = Math.min(...this.spaces);
      let highestValHit = Math.max(...this.spaces);
      console.log(lowestValHit, highestValHit);
      if (this.orientation == "vertical") {
        if (this.#isValidTarget(highestValHit + 10)) {
          return highestValHit + 10;
        } else if (this.#isValidTarget(lowestValHit - 10)) {
          return lowestValHit - 10;
        } else {
          console.log('no valid move');
        }
      } else {
        if (this.#isValidTarget(highestValHit + 1)) {
          return highestValHit + 1;
        } else if (this.#isValidTarget(lowestValHit - 1)) {
          return lowestValHit - 1;
        } else {
          console.log('no valid move');
        }
      }
    }
  }
  #isValidTarget(target) { 
    // I don't like the below solution but it's workable
    const hitArray = [...document.querySelectorAll('.hit')].map(elm => parseInt(elm.dataset.index));
    const missArray = [...document.querySelectorAll('.miss')].map(elm => parseInt(elm.dataset.index));
    const totalAttemptsArray = [...missArray,...hitArray];

    if (!totalAttemptsArray.includes(target)) {
      if (this.orientation == "horizontal") {
        if (Math.floor(this.spaces[0] * 0.1) == Math.floor(target * 0.1)) {
          return true;
        } else {
          return false;
        }
      } else if (this.orientation == "vertical") {
        if (target > 0 && target < 100) {
          return true;
        } else {
          return false;
        }
      } else {
        
      }
    } else {
      return false;
    }
  }
}

let ship = new targetShip(1,2,3);
console.log(ship.orientation)
