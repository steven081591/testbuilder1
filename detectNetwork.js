// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)
var cards = [
    { 
      cardName: 'Diner\'s Club',
      length: [14],
      prefix: ['38', '39'],
    },
     { 
      cardName: 'American Express',
      length: [15],
      prefix: ['34', '37'],
    },
    { 
      cardName: 'Visa',
      length: [13,16,19],
      prefix: ['4'],
    },
    { 
      cardName: 'MasterCard',
      length: [16],
      prefix: ['51','52','53','54','55'],
    },
    {
      name: 'Discover',
      prefix: ['6011', '644', '645', '646', '647', '648', '649', '65'],
      length: [16, 19]
    },
    { 
      cardName: 'Maestro',
      length: [12,13,14,15,16,17,18,19],
      prefix: ['5018','5020','5038','6304'],
    },
  
  ]
  
  function prefixGenerator(start, stop) {
    allnum = [];
    for (var prefix = start; prefix <= stop; prefix++){
      allnum.push(prefix.toString());
    }
    return allnum;
  }

var detectNetwork = function(cardNumber) {
  
};



console.log(detectNetwork('6518123456789012'))
