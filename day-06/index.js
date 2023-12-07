function maxDistance(movements) {
    let currentPos = 0;
    //contar las veces que < se repite
    let countLeft = 0;
    for (let i = 0; i < movements.length; i++) {
        let move = movements[i];
        if (move === '<') {
            countLeft++;
        }
    }
    //contar las veces que > se repite
    let countRight = 0;
    for (let i = 0; i < movements.length; i++) {
        let move = movements[i];
        if (move === '>') {
            countRight++;
        }
    }
    let bestWay = countLeft>countRight ? '<' : '>';


    for (let i = 0; i < movements.length; i++) {
        let move = movements[i];
        if (move === '>') {
            currentPos++;
        } else if (move === '<') {
            currentPos--;
        }else if (move === '*') {
            if (bestWay === '>') {
                currentPos++;
            }else if (bestWay === '<') {
                currentPos--;
            }
        }
    }
    return currentPos>0 ? currentPos : currentPos*-1;
}

const movements = '>>*<'
const result = maxDistance(movements)
console.log(result) // -> 2

const movements2 = '<<<>'
const result2 = maxDistance(movements2)
console.log(result2) // -> 2

const movements3 = '>***>'
const result3 = maxDistance(movements3)
console.log(result3) // -> 5
