function cyberReindeer(road, time) {
    const roadArray = [road];
    let roadClean = [...road];
    roadClean[roadClean.indexOf('S')] = '.';

    for(let i = 0; i < time - 1; i++) {
        if(i == 4) {
            road = road.replaceAll('|', '*');
            roadClean = roadClean.map(char => char == '|' ? '*' : char);
        }
        const santaIndex = road.indexOf('S');
        if(road[santaIndex + 1] == '.' || road[santaIndex + 1] == '*') {
            let prev = roadClean[santaIndex];
            road = road.substring(0, santaIndex+1) + 'S' + road.substring(santaIndex+2);
            road = road.substring(0, santaIndex) + prev + road.substring(santaIndex+1);
        }
        roadArray.push(road);
    }
    return roadArray;
}

const road = 'S..|...|..'
const time = 10 // unidades de tiempo
const result = cyberReindeer(road, time)
console.log(result)

/* -> result:
[
  'S..|...|..', // estado inicial
  '.S.|...|..', // avanza el trineo la carretera
  '..S|...|..', // avanza el trineo la carretera
  '..S|...|..', // el trineo para en la barrera
  '..S|...|..', // el trineo para en la barrera
  '...S...*..', // se abre la barrera, el trineo avanza
  '...*S..*..', // avanza el trineo la carretera
  '...*.S.*..', // avanza el trineo la carretera
  '...*..S*..', // avanza el trineo la carretera
  '...*...S..', // avanza por la barrera abierta
]
*/
