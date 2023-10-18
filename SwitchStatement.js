

// if (currentDay === 'Mon') {
//     console.log('Timings : 10:00-06:00');
// }else if (currentDay === 'Tue') {
//     console.log('Timings : 09:00-05:00');
// }else if (currentDay === 'Wed') {
//     console.log('Timings : 09:30-05:30');
// }else if (currentDay === 'Thu') {
//     console.log('Timings : 10:15-06:15');
// }else if (currentDay === 'Fri') {
//     console.log('Timings : 10:30-06:30');
// }else if (currentDay === 'Sat') {
//     console.log('Timings : 10:45-06:45');
// }
// else if (currentDay === 'Sun') {
//     console.log('Timings : 11:00-07:00');
// }

var currentDay = 'Sun'
switch (currentDay) {
    case 'Mon':
        console.log('Timings : 10:00-06:00');
        break;
    case 'Tue':
        console.log('Timings : 09:00-05:00');
        break;
    case 'Wed':
        console.log('Timings : 09:30-05:30');
        break;
    case 'Thu':
        console.log('Timings : 10:15-06:15');
        break;
    case 'Fri':
        console.log('Timings : 10:30-06:30');
        break;
    case 'Sat':
        console.log('Timings : 10:45-06:45');
        break;
    case 'Sun':
        console.log('Timings : 11:00-07:00');
        break;

    default:
        console.log('Timings : 11:00-07:00');
        break;
}