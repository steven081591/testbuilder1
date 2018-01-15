// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)


var detectNetwork = function(cardNumber) {
    let len = cardNumber.length
    let prefix1 = Number(cardNumber.slice(0,1));
    let prefix2 = Number(cardNumber.slice(0,2));
    let prefix3 = Number(cardNumber.slice(0,3));
    let prefix4 = Number(cardNumber.slice(0,4));

   
    if (len === 14 && (prefix2 === 38 || prefix2 === 39)) {
        return 'Diner\'s Club';
    } else if ((prefix2 === 34 || prefix2 === 37) && len === 15) {
        return 'American Express';
    } else if (prefix1 === 4 && (len === 13 || len === 16 || len === 19 )) {
        return 'Visa';
    } else if ((prefix2 === 51 || prefix2 === 52 || prefix2 === 53 || prefix2 === 54 || prefix2 === 55) && len === 16) {
        return 'MasterCard';
    } else if ((prefix4 === 6011 || prefix3 === 644 || prefix3 === 645 || prefix3 === 646 || prefix3 === 647 || prefix3 === 648 || prefix3 === 649 || prefix2 === 65) && (len === 19 || len === 16)) {
        return 'Discover';
    } else if ((prefix4 === 5018 || prefix4 === 5020 || prefix4 === 5038 || prefix4 === 6304) && (len === 12 || len === 13 || len === 14 || len === 15 || len === 16 || len === 17 || len === 18 || len === 19)) {
        return 'Maestro';
    }

};

console.log(detectNetwork('6518123456789012'))
