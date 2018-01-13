// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  
let prefix = cardNumber[0]+cardNumber[1]
let firstNum = cardNumber[0]

if (cardNumber.length === 14 && (prefix === '38' || prefix === '39')) {
    return 'Diner\'s Club'
} else if ((prefix === '34' || prefix === '37') && cardNumber.length === 15) {
    return 'American Express'
} else if (firstNum === '4' && (cardNumber.length === 13 || cardNumber.length === 16 || cardNumber.length === 19 )) {
    return 'Visa'
}

   
};

console.log(detectNetwork('3345678988012345'))


