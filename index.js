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
        case `${paper}-${scissors}`:
        case `${lizard}-${scissors}`:
            console.log(`${scissors}` + ' wins');
            break;
        // PAPER 
        case `${paper}-${rock}`:
        case `${paper}-${spock}`:
        case `${rock}-${paper}`:
        case `${spock}-${paper}`:
            console.log(`${paper}` + ' wins');
            break;
        // LIZARD 
        case `${lizard}-${spock}`:
        case `${lizard}-${paper}`:
        case `${spock}-${lizard}`:
        case `${paper}-${lizard}`:
            console.log(`${lizard}` + ' wins');
            break;
        // SPOCK
        case `${spock}-${scissors}`:
        case `${spock}-${rock}`:
        case `${rock}-${spock}`:
        case `${scissors}-${spock}`:
            console.log(`${spock}` + ' wins');
            break;
        // ROCK
        case `${rock}-${lizard}`:
        case `${rock}-${scissors}`:
        case `${scissors}-${rock}`:
        case `${lizard}-${rock}`:
            console.log(`${rock}` + ' wins');
            break;
        default:
            console.log('tie');
            break;
    }

}


choice('spock', 'paper');