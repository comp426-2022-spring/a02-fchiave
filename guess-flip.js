// Import minimist to help get command line args
import minimist from 'minimist';
// Import the coinFlips and countFlips function from your coin.mjs file
import {flipACoin} from './modules/coin.mjs';
// Call the coinFlip function and put the return into STDOUT

// get argument from command line
const args = minimist(process.argv.slice(2))

//if no call arg, exit with error
if (args.call === undefined) {
    console.log("Error: no input")
    process.exit(0);
} 

//if invalid call - exit with error
if (args.call !== 'tails' && args.call !== 'heads') {
    console.log("Usage: node guess-flip --call=[heads|tails]")
    process.exit(0);
}

console.log(flipACoin(args.call));
