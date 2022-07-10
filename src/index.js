console.log("Up and running!");

function shipFactory(position) {
    const len = position.length;
    let hits = []; 
    const isSunk = () => {
        // calculates it based on their length and whether all of their positions are ‘hit’. (if a number in position is passed into hit(), add it to hits array)
    }
    const hit = (num) => {
        if (position.includes(num)) hits.push(num);
        console.log(hits)
    }
    return {isSunk, hits, hit}
}

export {shipFactory}