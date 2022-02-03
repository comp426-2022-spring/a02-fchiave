// Import the coinFlip function from your coin.mjs file
import {coinFlip, coinFlips, countFlips, flipACoin} from './modules/coin.mjs';
// Call the coinFlip function and put the return into STDOUT
let array = coinFlips(100);
console.log(array);
console.log(countFlips(array));