function calculateTime(deliveries) {
    const totalSeconds = deliveries.reduce((acc, delivery) => {
        const [hour, minute, second] = delivery.split(':').map(Number);
        acc += hour * 3600 + minute * 60 + second;
        return acc;
    } , 0);

    const formatSeconds = s => (new Date(s * 1000)).toUTCString().match(/(\d\d:\d\d:\d\d)/)[0];

    return `${(totalSeconds - 3600 * 7) < 0 ? '-' : ''}${formatSeconds(Math.abs(totalSeconds - 3600 * 7))}`;
}

console.log(calculateTime(['00:10:00', '01:00:00', '03:30:00']));
// '-02:20:00'

console.log(calculateTime(['02:00:00', '05:00:00', '00:30:00']));
// '00:30:00'

console.log(calculateTime([
  '00:45:00',
  '00:45:00',
  '00:00:30',
  '00:00:30'
])); // '-05:29:00'
