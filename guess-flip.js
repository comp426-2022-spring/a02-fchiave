// Import minimist to help get command line args
import minimist from 'minimist';
// Import the coinFlips and countFlips function from your coin.mjs file
import {flipACoin} from './modules/coin.mjs';
// Call the coinFlip function and put the return into STDOUT

// get argument from command line
const args = minimist(process.argv.slice(2))

//if no number arg, default to 1
if (args.call == undefined) {
    Error("No input");
} else if (args.call != "heads" || args.call != "tails") {
    Error("Invalid input");
}

console.log(flipACoin(args.call));
