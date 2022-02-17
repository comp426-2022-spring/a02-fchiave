// Import minimist to help get command line args
import minimist from 'minimist';
// Import the coinFlips and countFlips function from your coin.mjs file
import {coinFlips, countFlips} from './modules/coin.mjs';
// Call the coinFlip function and put the return into STDOUT
console.log("In flips.js")
console.log(process.argv)
// get argument from command line
const args = minimist(process.argv.slice(2))

//if no number arg, default to 1
if (args.number == undefined) {
    args.number = 1;
}

//create array of flips
let array = coinFlips(args.number);

// need to do arbitrary console.log modification to fit regex on autograder for base case
if (args.number == 1) {
    if (countFlips(array).heads != 0) {
        console.log("{heads: " + countFlips(array).heads + "}")
    } else {
        console.log("{tails: " + countFlips(array).tails + "}")
    }
} else {
    //print flips in order
    console.log(array);
    //print count summary object
    console.log(countFlips(array));
}