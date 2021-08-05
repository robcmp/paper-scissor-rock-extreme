let scissors = 'scissors';
let paper = 'paper';
let rock = 'rock';
let lizard = 'lizard';
let spock = 'spock';


const choice = (p1, p2) => {

    switch (`${p1}-${p2}`) {
        // SCISSORS
        case `${scissors}-${paper}`:
        case `${scissors}-${lizard}`:
            console.log(`${scissors}` + ' wins');
            break;
        // PAPER 
        case `${paper}-${rock}`:
        case `${paper}-${spock}`:
            console.log(`${paper}` + ' wins');
            break;
        // LIZARD 
        case `${lizard}-${spock}`:
        case `${lizard}-${paper}`:
            console.log(`${lizard}` + ' wins');
            break;
        // SPOCK
        case `${spock}-${scissors}`:
        case `${spock}-${rock}`:
            console.log(`${spock}` + ' wins');
            break;
        default:
            console.log('tie');
            break;
    }

}


choice('spock', 'paper');