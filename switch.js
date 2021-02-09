const color = 'Red';

switch(color) { 
    case 'Yellow':
    console.log('Color is Yellow');
    break; 
    case 'Blue':
        console.log('Color is Blue');
        break;
        default:
            console.log('Color is not Red or Blue');
            break;
}

let day;

switch(new Date().getDay()) {
    case 0: 
    day = 'Sunday';
    break;
    case 1: 
    day = 'Monday';
    break;
    case 2: 
    day = 'Tuesday';
    break;
    case 3:
    day = 'Wednesday';
    break;
    case 4:
    day = 'Thursday';
    break;
    case 5:
    day = 'Friday';
    break;
    case 6: 
    day = 'Saturday';
    break;
        

}